import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, User!</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,345</p>
            <p className="text-sm text-green-500">+12.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,678</p>
            <p className="text-sm text-green-500">+8.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">123,456</p>
            <p className="text-sm text-red-500">-2.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">89,012</p>
            <p className="text-sm text-green-500">+5.7%</p>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>Your most recent social media posts.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Likes</TableHead>
                  <TableHead>Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Excited to announce our new feature!</TableCell>
                  <TableCell>Twitter</TableCell>
                  <TableCell>2024-06-28</TableCell>
                  <TableCell>1.2k</TableCell>
                  <TableCell>345</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Check out our latest blog post.</TableCell>
                  <TableCell>LinkedIn</TableCell>
                  <TableCell>2024-06-27</TableCell>
                  <TableCell>876</TableCell>
                  <TableCell>123</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A day in the life at our company.</TableCell>
                  <TableCell>Instagram</TableCell>
                  <TableCell>2024-06-26</TableCell>
                  <TableCell>2.3k</TableCell>
                  <TableCell>456</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}