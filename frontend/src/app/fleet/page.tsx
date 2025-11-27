import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Plus,
    Search,
    Filter,
    Fuel,
    Gauge,
    Settings,
    MoreVertical,
    Car,
    AlertTriangle,
    CheckCircle2,
    Wrench,
    Calendar
} from "lucide-react";

// Mock data
const vehicles = [
    {
        id: "1",
        brand: "BMW",
        model: "320i M Sport",
        plate: "34 BMW 01",
        status: "available",
        fuel: "Benzin",
        transmission: "Otomatik",
        price: 4500,
        km: "12,500",
        nextMaintenance: "15,000",
        image: "bmw"
    },
    {
        id: "2",
        brand: "Mercedes",
        model: "C200 AMG",
        plate: "34 MER 02",
        status: "rented",
        fuel: "Dizel",
        transmission: "Otomatik",
        price: 5200,
        km: "28,000",
        nextMaintenance: "30,000",
        image: "mercedes"
    },
    {
        id: "3",
        brand: "Fiat",
        model: "Egea Cross",
        plate: "34 EGE 03",
        status: "maintenance",
        fuel: "Dizel",
        transmission: "Manuel",
        price: 1200,
        km: "45,000",
        nextMaintenance: "45,000",
        image: "fiat"
    },
    {
        id: "4",
        brand: "Renault",
        model: "Clio Joy",
        plate: "34 CLIO 04",
        status: "available",
        fuel: "Benzin",
        transmission: "Otomatik",
        price: 1100,
        km: "8,200",
        nextMaintenance: "15,000",
        image: "renault"
    },
    {
        id: "5",
        brand: "Audi",
        model: "A6 Quattro",
        plate: "34 AUD 05",
        status: "cleaning",
        fuel: "Dizel",
        transmission: "Otomatik",
        price: 6500,
        km: "5,000",
        nextMaintenance: "15,000",
        image: "audi"
    },
];

export default function FleetPage() {
    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Filo Yönetimi
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Araç durumları, bakım takibi ve filo envanteri.
                    </p>
                </div>
                <Button className="h-10 bg-purple-600 hover:bg-purple-700 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Yeni Araç Ekle
                </Button>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-[300px]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Marka, model veya plaka ara..."
                            className="pl-9 h-10"
                        />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    <Button variant="secondary" className="whitespace-nowrap">Tümü</Button>
                    <Button variant="ghost" className="whitespace-nowrap">Müsait (12)</Button>
                    <Button variant="ghost" className="whitespace-nowrap">Kirada (8)</Button>
                    <Button variant="ghost" className="whitespace-nowrap">Bakımda (2)</Button>
                </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group overflow-hidden flex flex-col">
                        {/* Image Placeholder */}
                        <div className="h-48 bg-secondary/30 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                            <Car className="h-20 w-20 text-muted-foreground/20" />
                            <div className="absolute top-3 right-3">
                                <Badge className={`
                                    ${vehicle.status === 'available' ? 'bg-emerald-500 text-white' : ''}
                                    ${vehicle.status === 'rented' ? 'bg-blue-500 text-white' : ''}
                                    ${vehicle.status === 'maintenance' ? 'bg-red-500 text-white' : ''}
                                    ${vehicle.status === 'cleaning' ? 'bg-orange-500 text-white' : ''}
                                    border-none shadow-sm
                                `}>
                                    {vehicle.status === 'available' && 'Müsait'}
                                    {vehicle.status === 'rented' && 'Kirada'}
                                    {vehicle.status === 'maintenance' && 'Bakımda'}
                                    {vehicle.status === 'cleaning' && 'Temizlikte'}
                                </Badge>
                            </div>
                        </div>

                        <CardContent className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">{vehicle.brand} {vehicle.model}</h3>
                                    <p className="text-sm text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded w-fit mt-1">
                                        {vehicle.plate}
                                    </p>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 my-4">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-2 rounded">
                                    <Fuel className="h-3 w-3" /> {vehicle.fuel}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-2 rounded">
                                    <Settings className="h-3 w-3" /> {vehicle.transmission}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-2 rounded">
                                    <Gauge className="h-3 w-3" /> {vehicle.km} KM
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-2 rounded">
                                    <Wrench className="h-3 w-3" /> {vehicle.nextMaintenance}
                                </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                                <div>
                                    <span className="text-lg font-bold text-primary">₺{vehicle.price}</span>
                                    <span className="text-xs text-muted-foreground"> / gün</span>
                                </div>
                                <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                                    Detaylar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
