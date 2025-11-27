"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Plus,
    Calendar as CalendarIcon,
    Clock,
    CheckCircle2,
    AlertCircle,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    MoreVertical,
    MapPin,
    CreditCard,
    User,
    Car,
    Phone,
    Mail
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export default function ReservationsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        Rezervasyon Yönetimi
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Günlük operasyon ve rezervasyon takibi.
                    </p>
                </div>
                <Button asChild className="h-10 bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/reservations/new">
                        <Plus className="mr-2 h-4 w-4" /> Yeni Rezervasyon
                    </Link>
                </Button>
            </div>

            {/* Daily Operations Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowUpRight className="h-24 w-24 text-emerald-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bugün Teslimat</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">5</div>
                        <p className="text-xs text-muted-foreground mt-2">
                            3 araç teslim edildi, 2 bekliyor.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowDownRight className="h-24 w-24 text-blue-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bugün İade</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <ArrowDownRight className="h-4 w-4 text-blue-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">8</div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Tüm iadeler zamanında.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertCircle className="h-24 w-24 text-orange-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Onay Bekleyen</CardTitle>
                        <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">3</div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Web sitesinden gelen talepler.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                {/* Sidebar Calendar */}
                <div className="space-y-6">
                    <Card className="border-none shadow-lg bg-card">
                        <CardHeader>
                            <CardTitle className="text-lg">Takvim</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex justify-center pb-4">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border-none pointer-events-auto"
                            />
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg bg-card">
                        <CardHeader>
                            <CardTitle className="text-lg">Hızlı Filtreler</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            <Button variant="outline" className="justify-start">
                                <Car className="mr-2 h-4 w-4" /> Ekonomik Sınıf
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <Car className="mr-2 h-4 w-4" /> SUV / Arazi
                            </Button>
                            <Button variant="outline" className="justify-start">
                                <Car className="mr-2 h-4 w-4" /> Lüks / Premium
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Reservation List */}
                <div className="space-y-6">
                    <Tabs defaultValue="upcoming" className="w-full">
                        <div className="flex items-center justify-between mb-4">
                            <TabsList className="bg-secondary/50 p-1 border border-border rounded-xl">
                                <TabsTrigger value="upcoming" className="rounded-lg">Gelecek</TabsTrigger>
                                <TabsTrigger value="active" className="rounded-lg">Aktif Kiralamalar</TabsTrigger>
                                <TabsTrigger value="completed" className="rounded-lg">Tamamlanan</TabsTrigger>
                                <TabsTrigger value="cancelled" className="rounded-lg">İptal</TabsTrigger>
                            </TabsList>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="İsim veya Plaka ara..."
                                        className="h-9 w-[200px] rounded-md border border-input bg-background pl-9 pr-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <Button variant="outline" size="icon">
                                    <Filter className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Upcoming Tab */}
                        <TabsContent value="upcoming" className="space-y-4">
                            {[
                                {
                                    id: "REZ-9821",
                                    car: "Mercedes C200",
                                    plate: "34 MER 02",
                                    client: "Ayşe Demir",
                                    date: "28 Kasım - 01 Aralık",
                                    days: "3 Gün",
                                    price: "₺4,500",
                                    status: "Onaylandı",
                                    payment: "Ödendi",
                                    time: "Yarın 10:00"
                                },
                                {
                                    id: "REZ-9822",
                                    car: "Renault Clio",
                                    plate: "34 ABC 123",
                                    client: "Mehmet Yılmaz",
                                    date: "29 Kasım - 30 Kasım",
                                    days: "1 Gün",
                                    price: "₺1,200",
                                    status: "Bekliyor",
                                    payment: "Kapıda",
                                    time: "Cuma 14:30"
                                },
                            ].map((res, i) => (
                                <Card key={i} className="border-none shadow-md bg-card hover:bg-accent/5 transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                            {/* Car & Client Info */}
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-16 rounded-xl bg-secondary flex items-center justify-center">
                                                    <Car className="h-8 w-8 text-primary" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-bold text-lg text-foreground">{res.car}</h3>
                                                        <Badge variant="outline" className="text-xs">{res.plate}</Badge>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <User className="h-3 w-3" /> {res.client}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" /> {res.time}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Date & Price */}
                                            <div className="flex flex-col md:items-end gap-1">
                                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                                    {res.date}
                                                </div>
                                                <div className="text-xs text-muted-foreground">{res.days} • Toplam Tutar</div>
                                                <div className="font-bold text-lg text-primary">{res.price}</div>
                                            </div>

                                            {/* Status & Actions */}
                                            <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
                                                <div className="flex gap-2">
                                                    <Badge className={res.status === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-none' : 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none'}>
                                                        {res.status}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">
                                                        <CreditCard className="mr-1 h-3 w-3" /> {res.payment}
                                                    </Badge>
                                                </div>
                                                <div className="flex gap-2 w-full md:w-auto">
                                                    <Button variant="outline" size="sm" className="flex-1 md:flex-none">Düzenle</Button>
                                                    <Button size="sm" className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-700 text-white">Teslim Et</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>

                        {/* Active Tab */}
                        <TabsContent value="active" className="space-y-4">
                            {[
                                {
                                    id: "REZ-9810",
                                    car: "BMW 320i",
                                    plate: "34 BMW 01",
                                    client: "Caner Erkin",
                                    date: "25 Kasım - 28 Kasım",
                                    days: "3 Gün",
                                    price: "₺6,000",
                                    status: "Kirada",
                                    payment: "Ödendi",
                                    returnTime: "Yarın 12:00"
                                },
                            ].map((res, i) => (
                                <Card key={i} className="border-none shadow-md bg-card hover:bg-accent/5 transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-16 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                                    <Car className="h-8 w-8 text-blue-500" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-bold text-lg text-foreground">{res.car}</h3>
                                                        <Badge variant="outline" className="text-xs">{res.plate}</Badge>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                                        <div className="flex items-center gap-1">
                                                            <User className="h-3 w-3" /> {res.client}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-blue-500 font-medium">
                                                            <Clock className="h-3 w-3" /> Dönüş: {res.returnTime}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-end gap-3 w-full md:w-auto ml-auto">
                                                <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-none w-fit">
                                                    {res.status}
                                                </Badge>
                                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">İade Al</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
