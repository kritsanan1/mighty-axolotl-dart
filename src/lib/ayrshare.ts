import { supabase } from "@/integrations/supabase/client";

interface PostData {
  post: string;
  mediaUrls?: string[];
  // Add other Ayrshare post properties as needed
}

export async function sendAyrsharePost(postData: PostData, platforms: string[]) {
  try {
    const { data, error } = await supabase.functions.invoke('send-ayrshare-post', {
      body: { postData, platforms },
    });

    if (error) {
      console.error('Error invoking Ayrshare Edge Function:', error);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Failed to send post via Ayrshare:', error);
    throw error;
  }
}