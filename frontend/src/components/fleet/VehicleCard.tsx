import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Fuel, Gauge, Settings } from "lucide-react";
import Link from "next/link";

interface VehicleProps {
    id: string;
    brand: string;
    model: string;
    plate: string;
    status: "available" | "rented" | "maintenance";
    fuel: "Gasoline" | "Diesel" | "Electric" | "Hybrid";
    transmission: "Automatic" | "Manual";
    image?: string;
    price: number;
}

export function VehicleCard({ vehicle }: { vehicle: VehicleProps }) {
    const statusColors: Record<string, "success" | "secondary" | "destructive"> = {
        available: "success",
        rented: "secondary",
        maintenance: "destructive",
    };

    const statusLabels: Record<string, string> = {
        available: "Uygun",
        rented: "Kirada",
        maintenance: "Bakımda",
    };

    return (
        <Card className="overflow-hidden group hover:shadow-md transition-all">
            <div className="aspect-video w-full bg-muted relative flex items-center justify-center">
                {vehicle.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="object-cover w-full h-full" />
                ) : (
                    <Car className="h-16 w-16 text-muted-foreground/50" />
                )}
                <div className="absolute top-2 right-2">
                    <Badge variant={statusColors[vehicle.status]} className="capitalize">
                        {statusLabels[vehicle.status]}
                    </Badge>
                </div>
            </div>
            <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{vehicle.brand} {vehicle.model}</CardTitle>
                        <p className="text-sm text-muted-foreground">{vehicle.plate}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-primary">₺{vehicle.price}</p>
                        <p className="text-xs text-muted-foreground">/gün</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-1" />
                        {vehicle.fuel}
                    </div>
                    <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-1" />
                        {vehicle.transmission}
                    </div>
                    <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-1" />
                        Sınırsız
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 bg-muted/50 flex gap-2">
                <Button variant="outline" className="w-full" asChild>
                    <Link href={`/fleet/${vehicle.id}`}>Detaylar</Link>
                </Button>
                <Button className="w-full">Kirala</Button>
            </CardFooter>
        </Card>
    );
}
