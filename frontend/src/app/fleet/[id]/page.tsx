import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Car, Calendar, Wrench, AlertTriangle, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
    // Mock data based on ID (in a real app, fetch from API)
    const vehicle = {
        id: params.id,
        brand: "BMW",
        model: "320i",
        plate: "34 ABC 123",
        year: 2023,
        color: "Black",
        km: 15000,
        fuel: "Gasoline",
        transmission: "Automatic",
        status: "available",
        price: 120,
        group: "Luxury",
        insuranceExpiry: "2024-12-01",
        maintenanceDue: 20000,
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/fleet">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold tracking-tight">{vehicle.brand} {vehicle.model}</h2>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                        <span>{vehicle.plate}</span>
                        <span>•</span>
                        <span>{vehicle.year}</span>
                        <span>•</span>
                        <Badge variant="success" className="capitalize">{vehicle.status}</Badge>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline">Edit Vehicle</Button>
                    <Button>New Rental</Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                    <TabsTrigger value="damage">Damage & Incidents</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Current KM</CardTitle>
                                <Car className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{vehicle.km.toLocaleString()} km</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Daily Rate</CardTitle>
                                <FileText className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">${vehicle.price}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Next Service</CardTitle>
                                <Wrench className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{(vehicle.maintenanceDue - vehicle.km).toLocaleString()} km</div>
                                <p className="text-xs text-muted-foreground">remaining</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Insurance</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{vehicle.insuranceExpiry}</div>
                                <p className="text-xs text-muted-foreground">Expires in 12 days</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Vehicle Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="border-b pb-2">
                                    <dt className="text-sm font-medium text-muted-foreground">Group</dt>
                                    <dd className="text-lg font-semibold">{vehicle.group}</dd>
                                </div>
                                <div className="border-b pb-2">
                                    <dt className="text-sm font-medium text-muted-foreground">Color</dt>
                                    <dd className="text-lg font-semibold">{vehicle.color}</dd>
                                </div>
                                <div className="border-b pb-2">
                                    <dt className="text-sm font-medium text-muted-foreground">Fuel Type</dt>
                                    <dd className="text-lg font-semibold">{vehicle.fuel}</dd>
                                </div>
                                <div className="border-b pb-2">
                                    <dt className="text-sm font-medium text-muted-foreground">Transmission</dt>
                                    <dd className="text-lg font-semibold">{vehicle.transmission}</dd>
                                </div>
                            </dl>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="maintenance">
                    <Card>
                        <CardHeader>
                            <CardTitle>Maintenance History</CardTitle>
                            <CardDescription>Past services and repairs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-medium">Periodic Maintenance (10,000 km)</p>
                                            <p className="text-sm text-muted-foreground">Oil change, filter replacement.</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">2023-10-15</p>
                                            <Badge variant="outline">Completed</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="damage">
                    <Card>
                        <CardHeader>
                            <CardTitle>Damage Reports</CardTitle>
                            <CardDescription>Recorded scratches and dents.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <AlertTriangle className="h-10 w-10 text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium">No damage records found</h3>
                                <p className="text-muted-foreground max-w-sm mt-2">
                                    This vehicle has no recorded damage. Good job!
                                </p>
                                <Button className="mt-4" variant="outline">Report Damage</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
