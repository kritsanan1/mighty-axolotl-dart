import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Collaboration() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Collaboration</h1>
        <p className="text-gray-500">Manage your team and projects.</p>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Invite and manage your team members.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Email" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Button>Invite</Button>
            </div>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      John Doe
                    </div>
                  </TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704e" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      Jane Smith
                    </div>
                  </TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>Editor</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Remove</Button>
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