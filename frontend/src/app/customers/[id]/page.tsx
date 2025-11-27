import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, MapPin, FileText, CreditCard, History, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
    // Mock data
    const customer = {
        id: params.id,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 890",
        address: "123 Main St, New York, NY 10001",
        status: "active",
        joinDate: "2022-05-10",
        documents: [
            { name: "Driver's License", status: "Verified", date: "2022-05-10" },
            { name: "Passport", status: "Pending", date: "2023-11-15" },
        ],
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/customers">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold tracking-tight">{customer.name}</h2>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                        <span>Customer since {customer.joinDate}</span>
                        <span>•</span>
                        <Badge variant="success" className="capitalize">{customer.status}</Badge>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline">Edit Profile</Button>
                    <Button variant="destructive">Block Customer</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{customer.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{customer.address}</span>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 space-y-6">
                    <Tabs defaultValue="rentals">
                        <TabsList>
                            <TabsTrigger value="rentals">Rental History</TabsTrigger>
                            <TabsTrigger value="documents">Documents</TabsTrigger>
                            <TabsTrigger value="payments">Payments</TabsTrigger>
                        </TabsList>

                        <TabsContent value="rentals" className="mt-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Past Rentals</CardTitle>
                                    <CardDescription>History of vehicles rented by this customer.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                                <div className="flex items-center space-x-4">
                                                    <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                                                        <History className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">BMW 320i</p>
                                                        <p className="text-sm text-muted-foreground">Oct 15 - Oct 18, 2023</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium">$360.00</p>
                                                    <Badge variant="outline">Completed</Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="documents" className="mt-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Documents</CardTitle>
                                    <CardDescription>Uploaded identification and contracts.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {customer.documents.map((doc, i) => (
                                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                                <div className="flex items-center space-x-4">
                                                    <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                                                        <FileText className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{doc.name}</p>
                                                        <p className="text-sm text-muted-foreground">Uploaded on {doc.date}</p>
                                                    </div>
                                                </div>
                                                <Badge variant={doc.status === "Verified" ? "success" : "warning"}>
                                                    {doc.status}
                                                </Badge>
                                            </div>
                                        ))}
                                        <Button className="w-full mt-4" variant="outline">
                                            <Plus className="mr-2 h-4 w-4" /> Upload New Document
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
