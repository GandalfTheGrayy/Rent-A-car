"use client";

import { useState } from "react";
import Link from "next/link";
import { format, addDays } from "date-fns";
import { tr } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { ArrowLeft, Calendar as CalendarIcon, Car, User, Check, Info } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function NewReservationPageRebuilt() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 3),
    });

    const [selectedVehicle, setSelectedVehicle] = useState<string>("");
    const [selectedCustomer, setSelectedCustomer] = useState<string>("");

    const calculateTotalDays = () => {
        if (date?.from && date?.to) {
            const diffTime = Math.abs(date.to.getTime() - date.from.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }
        return 0;
    };

    return (
        <div className="container mx-auto py-6 max-w-7xl">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="icon" asChild className="h-10 w-10">
                    <Link href="/reservations">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Yeni Rezervasyon Oluştur
                    </h1>
                    <p className="text-muted-foreground">
                        Araç kiralama işlemini tamamlamak için aşağıdaki adımları izleyin.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Input Forms (Span 7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Vehicle Selection Card */}
                    <Card className="border-l-4 border-l-primary shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Car className="h-6 w-6 text-primary" />
                                Araç Seçimi
                            </CardTitle>
                            <CardDescription>
                                Müsait araçlar listesinden seçim yapın.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="vehicle-select">Araç</Label>
                                    <Select onValueChange={setSelectedVehicle} value={selectedVehicle}>
                                        <SelectTrigger id="vehicle-select" className="h-12">
                                            <SelectValue placeholder="Bir araç seçiniz..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bmw-320i">
                                                <span className="font-medium">BMW 320i</span> - 34 ABC 123 (1200 ₺/gün)
                                            </SelectItem>
                                            <SelectItem value="mercedes-c200">
                                                <span className="font-medium">Mercedes C200</span> - 34 XYZ 789 (1400 ₺/gün)
                                            </SelectItem>
                                            <SelectItem value="fiat-egea">
                                                <span className="font-medium">Fiat Egea</span> - 34 DEF 456 (450 ₺/gün)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Customer Selection Card */}
                    <Card className="border-l-4 border-l-blue-500 shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <User className="h-6 w-6 text-blue-500" />
                                Müşteri Bilgileri
                            </CardTitle>
                            <CardDescription>
                                Kiralama yapacak müşteriyi belirleyin.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="customer-select">Müşteri</Label>
                                    <Select onValueChange={setSelectedCustomer} value={selectedCustomer}>
                                        <SelectTrigger id="customer-select" className="h-12">
                                            <SelectValue placeholder="Bir müşteri seçiniz..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ahmet-yilmaz">Ahmet Yılmaz</SelectItem>
                                            <SelectItem value="ayse-demir">Ayşe Demir</SelectItem>
                                            <SelectItem value="mehmet-kaya">Mehmet Kaya</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="notes">Notlar (Opsiyonel)</Label>
                                    <Input
                                        id="notes"
                                        placeholder="Örn: Bebek koltuğu istendi, havaalanı teslim..."
                                        className="h-12"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Date & Summary (Span 5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="sticky top-6 shadow-lg border-2 border-muted/40 overflow-hidden">
                        <div className="bg-muted/30 p-4 border-b">
                            <h3 className="font-semibold flex items-center gap-2">
                                <CalendarIcon className="h-5 w-5" />
                                Tarih ve Özet
                            </h3>
                        </div>
                        <CardContent className="p-0">
                            {/* Inline Calendar Container */}
                            <div className="p-4 flex justify-center bg-background">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={1}
                                    locale={tr}
                                    className="rounded-md border shadow-sm"
                                />
                            </div>

                            <Separator />

                            {/* Summary Details */}
                            <div className="p-6 space-y-4 bg-muted/10">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Alış Tarihi</span>
                                        <span className="font-medium">
                                            {date?.from ? format(date.from, "d MMMM yyyy", { locale: tr }) : "-"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">İade Tarihi</span>
                                        <span className="font-medium">
                                            {date?.to ? format(date.to, "d MMMM yyyy", { locale: tr }) : "-"}
                                        </span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Toplam Süre</span>
                                        <span className="font-bold text-primary text-lg">
                                            {calculateTotalDays()} Gün
                                        </span>
                                    </div>
                                </div>

                                {selectedVehicle && (
                                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-md flex items-start gap-3">
                                        <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                                        <div className="text-sm">
                                            <p className="font-medium text-blue-700 dark:text-blue-400">Tahmini Tutar</p>
                                            <p className="text-muted-foreground">
                                                Araç seçimi yapıldı. Günlük fiyat üzerinden hesaplama yapılacaktır.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 bg-muted/30 border-t">
                            <div className="flex flex-col gap-3 w-full">
                                <Button size="lg" className="w-full font-bold text-md h-12">
                                    <Check className="mr-2 h-5 w-5" />
                                    Rezervasyonu Onayla
                                </Button>
                                <Button variant="ghost" className="w-full text-muted-foreground hover:text-destructive">
                                    İptal Et
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
