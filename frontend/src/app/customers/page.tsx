import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Search,
    Plus,
    MoreHorizontal,
    Phone,
    Mail,
    ShieldCheck,
    AlertTriangle,
    FileCheck,
    UserCheck,
    CreditCard,
    History,
    CheckCircle2,
    Clock
} from "lucide-react";
import Link from "next/link";

// Mock data
const customers = [
    {
        id: "1",
        name: "Ahmet Yılmaz",
        email: "ahmet.yilmaz@example.com",
        phone: "+90 532 123 45 67",
        status: "active",
        riskScore: "low",
        licenseStatus: "verified",
        totalRentals: 12,
        totalSpend: "₺45,000",
        lastRental: "20.11.2025",
    },
    {
        id: "2",
        name: "Ayşe Demir",
        email: "ayse.demir@example.com",
        phone: "+90 555 987 65 43",
        status: "active",
        riskScore: "medium",
        licenseStatus: "verified",
        totalRentals: 5,
        totalSpend: "₺12,500",
        lastRental: "15.11.2025",
    },
    {
        id: "3",
        name: "Mehmet Kaya",
        email: "mehmet.kaya@example.com",
        phone: "+90 544 555 44 33",
        status: "blocked",
        riskScore: "high",
        licenseStatus: "expired",
        totalRentals: 2,
        totalSpend: "₺3,200",
        lastRental: "10.08.2025",
    },
    {
        id: "4",
        name: "Zeynep Şen",
        email: "zeynep.sen@example.com",
        phone: "+90 533 444 77 88",
        status: "active",
        riskScore: "low",
        licenseStatus: "verified",
        totalRentals: 8,
        totalSpend: "₺28,000",
        lastRental: "25.11.2025",
    },
    {
        id: "5",
        name: "Caner Erkin",
        email: "caner.erkin@example.com",
        phone: "+90 532 222 33 44",
        status: "active",
        riskScore: "low",
        licenseStatus: "pending",
        totalRentals: 1,
        totalSpend: "₺1,200",
        lastRental: "27.11.2025",
    },
];

export default function CustomersPage() {
    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        Müşteri Yönetimi
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Müşteri profilleri, risk analizi ve belge takibi.
                    </p>
                </div>
                <Button className="h-10 bg-orange-600 hover:bg-orange-700 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Yeni Müşteri
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none shadow-lg bg-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Toplam Müşteri</CardTitle>
                        <UserCheck className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <p className="text-xs text-muted-foreground">+24 bu hafta</p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Riskli Müşteriler</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">Kara listede</p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bekleyen Belgeler</CardTitle>
                        <FileCheck className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">Ehliyet onayı bekliyor</p>
                    </CardContent>
                </Card>
            </div>

            {/* Search & Filter */}
            <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="İsim, telefon veya e-posta ara..."
                        className="pl-9 h-10"
                    />
                </div>
            </div>

            {/* Customers Table */}
            <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                <Table>
                    <TableHeader className="bg-secondary/50">
                        <TableRow>
                            <TableHead className="py-4">Müşteri Bilgisi</TableHead>
                            <TableHead className="py-4">İletişim</TableHead>
                            <TableHead className="py-4">Risk & Durum</TableHead>
                            <TableHead className="py-4">Ehliyet</TableHead>
                            <TableHead className="py-4">Finansal</TableHead>
                            <TableHead className="text-right py-4">İşlemler</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id} className="hover:bg-secondary/30 transition-colors">
                                <TableCell>
                                    <div className="font-bold text-foreground">{customer.name}</div>
                                    <div className="text-xs text-muted-foreground">ID: {customer.id}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Mail className="mr-2 h-3 w-3" />
                                            {customer.email}
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="mr-2 h-3 w-3" />
                                            {customer.phone}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-2">
                                        <Badge
                                            variant="outline"
                                            className={`w-fit capitalize border-none
                                                ${customer.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}
                                            `}
                                        >
                                            {customer.status === 'active' ? 'Aktif' : 'Engelli'}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-xs">
                                            <ShieldCheck className={`h-3 w-3 ${customer.riskScore === 'low' ? 'text-emerald-500' :
                                                customer.riskScore === 'medium' ? 'text-orange-500' : 'text-red-500'
                                                }`} />
                                            <span className="text-muted-foreground capitalize">Risk: {
                                                customer.riskScore === 'low' ? 'Düşük' :
                                                    customer.riskScore === 'medium' ? 'Orta' : 'Yüksek'
                                            }</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {customer.licenseStatus === 'verified' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                                        {customer.licenseStatus === 'pending' && <Clock className="h-4 w-4 text-orange-500" />}
                                        {customer.licenseStatus === 'expired' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                                        <span className="text-sm text-muted-foreground">
                                            {customer.licenseStatus === 'verified' && 'Onaylı'}
                                            {customer.licenseStatus === 'pending' && 'Bekliyor'}
                                            {customer.licenseStatus === 'expired' && 'Süresi Dolmuş'}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                                            <CreditCard className="h-3 w-3 text-muted-foreground" /> {customer.totalSpend}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <History className="h-3 w-3" /> {customer.totalRentals} Kiralama
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={`/customers/${customer.id}`}>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
