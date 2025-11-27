import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Wallet,
    TrendingUp,
    TrendingDown,
    CreditCard,
    FileText,
    DollarSign,
    AlertCircle,
    Car,
    Fuel,
    Tag,
    Download,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Receipt,
    Landmark,
    Wrench,
    Building2
} from "lucide-react";

export default function FinancePage() {
    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        Finans Merkezi
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Gelir, gider ve araç karlılık analizleri.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md border border-border">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">Kasım 2025</span>
                    </div>
                    <Button variant="outline" className="h-10">
                        <Download className="mr-2 h-4 w-4" />
                        Rapor İndir
                    </Button>
                    <Button className="h-10 bg-emerald-600 hover:bg-emerald-700 text-white">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Yeni İşlem
                    </Button>
                </div>
            </div>

            {/* Critical Financial KPIs */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Total Cash Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Landmark className="h-24 w-24 text-emerald-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Toplam Kasa</CardTitle>
                        <Wallet className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">₺845,230</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center">
                            <span className="text-emerald-500 flex items-center mr-2">
                                <ArrowUpRight className="mr-1 h-3 w-3" /> +%12.5
                            </span>
                            geçen aya göre
                        </p>
                    </CardContent>
                </Card>

                {/* Pending Payments Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Receipt className="h-24 w-24 text-orange-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bekleyen Ödemeler</CardTitle>
                        <AlertCircle className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">₺42,500</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center">
                            <span className="text-orange-500 flex items-center mr-2">
                                8 Fatura
                            </span>
                            tahsilat bekliyor
                        </p>
                    </CardContent>
                </Card>

                {/* Tolls & Fines Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Tag className="h-24 w-24 text-red-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">HGS & Cezalar</CardTitle>
                        <Tag className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">₺3,850</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center">
                            <span className="text-red-500 flex items-center mr-2">
                                <ArrowUpRight className="mr-1 h-3 w-3" /> +%4.2
                            </span>
                            bu ay artış
                        </p>
                    </CardContent>
                </Card>

                {/* Maintenance Costs Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Fuel className="h-24 w-24 text-blue-500" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Araç Bakım Gideri</CardTitle>
                        <Car className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">₺12,400</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center">
                            <span className="text-emerald-500 flex items-center mr-2">
                                <ArrowDownRight className="mr-1 h-3 w-3" /> -%2.1
                            </span>
                            bütçe altı
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-secondary/50 p-1 border border-border rounded-xl">
                    <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">Genel Bakış</TabsTrigger>
                    <TabsTrigger value="profitability" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">Araç Karlılık</TabsTrigger>
                    <TabsTrigger value="invoices" className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm">Faturalar</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-7">
                        {/* Cash Flow Chart Area */}
                        <Card className="col-span-4 border-none shadow-lg bg-card">
                            <CardHeader>
                                <CardTitle>Nakit Akışı (Son 6 Ay)</CardTitle>
                                <CardDescription>Gelir ve gider dengesinin aylık karşılaştırması.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[300px] flex items-end justify-between gap-4 pt-10 px-2">
                                    {[
                                        { month: "Haz", inc: 65, exp: 40 },
                                        { month: "Tem", inc: 85, exp: 45 },
                                        { month: "Ağu", inc: 95, exp: 50 },
                                        { month: "Eyl", inc: 75, exp: 42 },
                                        { month: "Eki", inc: 70, exp: 38 },
                                        { month: "Kas", inc: 80, exp: 41 },
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                            <div className="w-full flex gap-1 items-end justify-center h-full relative">
                                                <div style={{ height: `${item.inc}%` }} className="w-3 md:w-6 bg-emerald-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all relative">
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">₺{item.inc}K</div>
                                                </div>
                                                <div style={{ height: `${item.exp}%` }} className="w-3 md:w-6 bg-red-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all relative">
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">₺{item.exp}K</div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground font-medium">{item.month}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                                        <span className="text-xs text-muted-foreground">Gelir</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                                        <span className="text-xs text-muted-foreground">Gider</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Transactions */}
                        <Card className="col-span-3 border-none shadow-lg bg-card">
                            <CardHeader>
                                <CardTitle>Son İşlemler</CardTitle>
                                <CardDescription>Gerçekleşen son finansal hareketler.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        { title: "Kiralama Geliri", desc: "34 ABC 123 - 3 Günlük", amount: "+₺4,500", type: "inc", icon: TrendingUp },
                                        { title: "Araç Bakım", desc: "34 XYZ 789 - Fren Değişimi", amount: "-₺2,100", type: "exp", icon: Wrench },
                                        { title: "HGS Yükleme", desc: "Filo Geneli", amount: "-₺1,000", type: "exp", icon: Tag },
                                        { title: "Sigorta Ödemesi", desc: "Kasko Taksiti", amount: "-₺12,500", type: "exp", icon: FileText },
                                        { title: "Kurumsal Tahsilat", desc: "ABC Lojistik A.Ş.", amount: "+₺25,000", type: "inc", icon: Building2 },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-full ${item.type === 'inc' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                                                    <item.icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm text-foreground">{item.title}</div>
                                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                                </div>
                                            </div>
                                            <div className={`font-bold text-sm ${item.type === 'inc' ? 'text-emerald-500' : 'text-red-500'}`}>
                                                {item.amount}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Profitability Tab */}
                <TabsContent value="profitability">
                    <Card className="border-none shadow-lg bg-card">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Araç Karlılık Analizi</CardTitle>
                                    <CardDescription>Hangi araç ne kadar kazandırıyor?</CardDescription>
                                </div>
                                <Button variant="outline" size="sm">Excel İndir</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-border overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-secondary/50 text-muted-foreground font-medium">
                                        <tr>
                                            <th className="p-4">Araç</th>
                                            <th className="p-4">Plaka</th>
                                            <th className="p-4">Toplam Gelir</th>
                                            <th className="p-4">Giderler (Bakım/HGS)</th>
                                            <th className="p-4">Net Kar</th>
                                            <th className="p-4">Kar Marjı</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {[
                                            { name: "BMW 320i", plate: "34 BMW 01", inc: "₺145,000", exp: "₺25,000", net: "₺120,000", margin: "%82", trend: "up" },
                                            { name: "Mercedes C200", plate: "34 MER 02", inc: "₺160,000", exp: "₺30,000", net: "₺130,000", margin: "%81", trend: "up" },
                                            { name: "Renault Clio", plate: "34 ABC 123", inc: "₺85,000", exp: "₺12,000", net: "₺73,000", margin: "%85", trend: "up" },
                                            { name: "Fiat Egea", plate: "34 XYZ 789", inc: "₺78,000", exp: "₺15,000", net: "₺63,000", margin: "%80", trend: "down" },
                                            { name: "Ford Focus", plate: "34 FRD 99", inc: "₺92,000", exp: "₺45,000", net: "₺47,000", margin: "%51", trend: "down" },
                                        ].map((car, i) => (
                                            <tr key={i} className="hover:bg-secondary/30 transition-colors">
                                                <td className="p-4 font-medium text-foreground">{car.name}</td>
                                                <td className="p-4 text-muted-foreground">{car.plate}</td>
                                                <td className="p-4 text-emerald-500 font-medium">{car.inc}</td>
                                                <td className="p-4 text-red-500 font-medium">{car.exp}</td>
                                                <td className="p-4 font-bold text-foreground">{car.net}</td>
                                                <td className="p-4">
                                                    <Badge variant="outline" className={`${car.trend === 'up' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/10' : 'text-orange-500 border-orange-500/20 bg-orange-500/10'}`}>
                                                        {car.margin}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Invoices Tab */}
                <TabsContent value="invoices">
                    <Card className="border-none shadow-lg bg-card">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Kesilen Faturalar</CardTitle>
                                    <CardDescription>Kurumsal müşterilere kesilen faturaların durumu.</CardDescription>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Filtrele</Button>
                                    <Button size="sm">Yeni Fatura</Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { id: "FTR-2025-001", client: "ABC Lojistik A.Ş.", date: "25.11.2025", amount: "₺45,000", status: "Bekliyor", color: "orange" },
                                    { id: "FTR-2025-002", client: "Tekno Yazılım Ltd.", date: "24.11.2025", amount: "₺12,500", status: "Ödendi", color: "emerald" },
                                    { id: "FTR-2025-003", client: "Mega İnşaat A.Ş.", date: "20.11.2025", amount: "₺78,000", status: "Gecikmiş", color: "red" },
                                ].map((inv, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground">{inv.client}</div>
                                                <div className="text-xs text-muted-foreground flex gap-2">
                                                    <span>{inv.id}</span>
                                                    <span>•</span>
                                                    <span>{inv.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="font-bold text-foreground text-right">{inv.amount}</div>
                                            <Badge className={`
                                        ${inv.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20' : ''}
                                        ${inv.color === 'orange' ? 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20' : ''}
                                        ${inv.color === 'red' ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' : ''}
                                        border-none
                                    `}>
                                                {inv.status}
                                            </Badge>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Download className="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// Missing Icon Import Fix (Wrench and Building2 were used in map but might need explicit import if not already there)
// I added them to the top import list.
