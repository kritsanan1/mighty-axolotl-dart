import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Billing() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="text-gray-500">Manage your subscription and payment methods.</p>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Pro plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$99/month</p>
            <p className="text-sm text-gray-500">Your next bill is on July 1, 2024.</p>
            <Button className="mt-4">Change Plan</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Your primary payment method.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <img src="https://www.svgrepo.com/show/303202/visa-logo.svg" alt="Visa" className="h-8 w-8 mr-4" />
              <div>
                <p className="font-semibold">Visa ending in 1234</p>
                <p className="text-sm text-gray-500">Expires 12/2025</p>
              </div>
            </div>
            <Button variant="outline" className="mt-4">Update Payment Method</Button>
          </CardContent>
        </Card>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Your past invoices.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Invoice</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>June 1, 2024</TableCell>
                  <TableCell>$99.00</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <Button variant="link">Download</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>May 1, 2024</TableCell>
                  <TableCell>$99.00</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <Button variant="link">Download</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>April 1, 2024</TableCell>
                  <TableCell>$99.00</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <Button variant="link">Download</Button>
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