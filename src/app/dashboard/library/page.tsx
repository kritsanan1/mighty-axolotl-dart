import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Library() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Library</h1>
        <p className="text-gray-500">Manage your media assets.</p>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Media Library</CardTitle>
            <CardDescription>Upload and manage your images, videos, and other assets.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <Input type="search" placeholder="Search assets..." className="max-w-xs" />
              <Button>Upload</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>product-launch.jpg</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>2024-06-28</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>promo-video.mp4</TableCell>
                  <TableCell>Video</TableCell>
                  <TableCell>2024-06-27</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>logo.svg</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>2024-06-26</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}