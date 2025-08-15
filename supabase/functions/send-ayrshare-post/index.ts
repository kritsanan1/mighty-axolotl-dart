import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 401,
      });
    }

    const { postData, platforms } = await req.json();

    if (!postData || !platforms || !Array.isArray(platforms) || platforms.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing postData or platforms' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const ayrshareApiKey = Deno.env.get('AYRSHARE_API_KEY');

    if (!ayrshareApiKey) {
      return new Response(JSON.stringify({ error: 'Ayrshare API key not configured' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    const ayrshareResponse = await fetch('https://app.ayrshare.com/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ayrshareApiKey}`,
      },
      body: JSON.stringify({
        post: postData,
        platforms: platforms,
      }),
    });

    const ayrshareResult = await ayrshareResponse.json();

    if (!ayrshareResponse.ok) {
      console.error('Ayrshare API error:', ayrshareResult);
      return new Response(JSON.stringify({ error: ayrshareResult.message || 'Failed to post to Ayrshare' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: ayrshareResponse.status,
      });
    }

    return new Response(JSON.stringify(ayrshareResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error: unknown) {
    console.error('Edge Function error:', error);
    return new Response(JSON.stringify({ error: (error as Error).message || 'Internal Server Error' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});