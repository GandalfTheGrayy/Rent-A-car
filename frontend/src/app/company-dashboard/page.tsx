import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    Briefcase,
    ArrowUpRight,
    ArrowDownRight,
    Car,
    Wrench,
    ShieldCheck,
    Activity,
    Download,
    Target,
    Award,
    Fuel,
    Clock,
    CheckCircle2,
    AlertCircle,
    Droplets,
    CalendarClock,
    Building2
} from "lucide-react";

export default function CompanyDashboard() {
    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        Yönetim Paneli
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Filo operasyon merkezi ve anlık durum takibi.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-foreground">Sistem Çevrimiçi</span>
                    </div>
                    <Button variant="outline" className="h-10">
                        <Download className="mr-2 h-4 w-4" />
                        Rapor Al
                    </Button>
                </div>
            </div>

            {/* Critical KPIs */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Utilization Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 group-hover:w-2 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Anlık Doluluk Oranı</CardTitle>
                        <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Activity className="h-5 w-5 text-blue-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">%78.4</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center font-medium">
                            <span className="text-blue-500 flex items-center mr-2">
                                <ArrowUpRight className="mr-1 h-3 w-3" /> +%2.1
                            </span>
                            düne göre
                        </p>
                        <div className="mt-3 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[78.4%]"></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Fleet Health Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-2 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Filo Sağlık Skoru</CardTitle>
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                            <ShieldCheck className="h-5 w-5 text-emerald-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">94/100</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center font-medium">
                            <span className="text-emerald-500 flex items-center mr-2">
                                <CheckCircle2 className="mr-1 h-3 w-3" /> Mükemmel
                            </span>
                            operasyonel durum
                        </p>
                        <div className="mt-3 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[94%]"></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Active Rentals Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 group-hover:w-2 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Aktif Kiralamalar</CardTitle>
                        <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Car className="h-5 w-5 text-purple-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">142</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center font-medium">
                            <span className="text-purple-500 flex items-center mr-2">
                                <ArrowUpRight className="mr-1 h-3 w-3" /> +12
                            </span>
                            bugün başlayan
                        </p>
                        <div className="mt-3 flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-6 w-6 rounded-full bg-secondary border-2 border-card"></div>
                            ))}
                            <div className="h-6 w-6 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-[10px] font-bold text-muted-foreground">+138</div>
                        </div>
                    </CardContent>
                </Card>

                {/* Pending Actions Card */}
                <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 overflow-hidden group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 group-hover:w-2 transition-all duration-300"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bekleyen İşlemler</CardTitle>
                        <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-orange-500" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-foreground">8</div>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center font-medium">
                            <span className="text-orange-500 flex items-center mr-2">
                                <AlertCircle className="mr-1 h-3 w-3" /> Aksiyon Gerekli
                            </span>
                            onay/teslimat
                        </p>
                        <div className="mt-3 flex gap-2">
                            <Badge variant="outline" className="text-[10px] border-orange-500/20 text-orange-500">3 Onay</Badge>
                            <Badge variant="outline" className="text-[10px] border-blue-500/20 text-blue-500">5 Teslimat</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Operations & Activity Grid */}
            <div className="grid gap-6 md:grid-cols-3">

                {/* Vehicle Status Board (Kanban Style) */}
                <div className="col-span-2">
                    <Card className="border-none shadow-lg bg-card h-full">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                        Operasyon Panosu
                                    </CardTitle>
                                    <CardDescription>Araçların anlık durum dağılımı.</CardDescription>
                                </div>
                                <Button variant="ghost" size="sm" className="text-primary">Tümünü Gör</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-4 gap-4">
                                {/* Available Column */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between pb-2 border-b border-border">
                                        <span className="text-sm font-semibold text-emerald-500">Müsait</span>
                                        <Badge className="bg-emerald-500/10 text-emerald-500 border-none">24</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Renault Clio", plate: "34 ABC 123", loc: "Levent Şube" },
                                            { name: "Fiat Egea", plate: "34 XYZ 789", loc: "Sabiha Gökçen" },
                                            { name: "Toyota Corolla", plate: "34 DEF 456", loc: "Merkez Ofis" },
                                        ].map((car, i) => (
                                            <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-emerald-500/50 transition-colors cursor-pointer group">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-medium text-sm text-foreground">{car.name}</span>
                                                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                                </div>
                                                <div className="text-xs text-muted-foreground">{car.plate}</div>
                                                <div className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
                                                    <Building2 className="h-3 w-3" /> {car.loc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Rented Column */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between pb-2 border-b border-border">
                                        <span className="text-sm font-semibold text-blue-500">Kirada</span>
                                        <Badge className="bg-blue-500/10 text-blue-500 border-none">142</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "BMW 320i", plate: "34 BMW 01", return: "Yarın 10:00" },
                                            { name: "Mercedes C200", plate: "34 MER 02", return: "Bugün 14:30" },
                                            { name: "Audi A3", plate: "34 AUD 03", return: "2 Gün Sonra" },
                                        ].map((car, i) => (
                                            <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-blue-500/50 transition-colors cursor-pointer">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-medium text-sm text-foreground">{car.name}</span>
                                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                                </div>
                                                <div className="text-xs text-muted-foreground">{car.plate}</div>
                                                <div className="text-[10px] text-blue-500 mt-2 flex items-center gap-1 font-medium">
                                                    <Clock className="h-3 w-3" /> Dönüş: {car.return}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Maintenance Column */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between pb-2 border-b border-border">
                                        <span className="text-sm font-semibold text-orange-500">Bakımda</span>
                                        <Badge className="bg-orange-500/10 text-orange-500 border-none">8</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Ford Focus", plate: "34 FRD 99", status: "Periyodik Bakım" },
                                            { name: "VW Passat", plate: "34 VW 88", status: "Lastik Değişimi" },
                                        ].map((car, i) => (
                                            <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-orange-500/50 transition-colors cursor-pointer">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-medium text-sm text-foreground">{car.name}</span>
                                                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                                </div>
                                                <div className="text-xs text-muted-foreground">{car.plate}</div>
                                                <div className="text-[10px] text-orange-500 mt-2 flex items-center gap-1 font-medium">
                                                    <Wrench className="h-3 w-3" /> {car.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Cleaning Column */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between pb-2 border-b border-border">
                                        <span className="text-sm font-semibold text-purple-500">Temizlikte</span>
                                        <Badge className="bg-purple-500/10 text-purple-500 border-none">4</Badge>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "Hyundai i20", plate: "34 HYU 55", type: "Detaylı Temizlik" },
                                            { name: "Opel Corsa", plate: "34 OPL 44", type: "Yıkama" },
                                        ].map((car, i) => (
                                            <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-purple-500/50 transition-colors cursor-pointer">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-medium text-sm text-foreground">{car.name}</span>
                                                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                                </div>
                                                <div className="text-xs text-muted-foreground">{car.plate}</div>
                                                <div className="text-[10px] text-purple-500 mt-2 flex items-center gap-1 font-medium">
                                                    <Droplets className="h-3 w-3" /> {car.type}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity Feed */}
                <div className="col-span-1">
                    <Card className="border-none shadow-lg bg-card h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                                <CalendarClock className="h-6 w-6 text-primary" />
                                Son Hareketler
                            </CardTitle>
                            <CardDescription>Gerçek zamanlı işlem akışı.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                {[
                                    { title: "Araç Teslim Alındı", desc: "Ahmet Yılmaz - BMW 320i", time: "10 dk önce", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                    { title: "Yeni Rezervasyon", desc: "Ayşe Demir - 3 Günlük", time: "32 dk önce", icon: CalendarClock, color: "text-blue-500", bg: "bg-blue-500/10" },
                                    { title: "Bakım Kaydı Açıldı", desc: "Ford Focus - Fren Balatası", time: "1 saat önce", icon: Wrench, color: "text-orange-500", bg: "bg-orange-500/10" },
                                    { title: "Araç Çıkışı Yapıldı", desc: "Mehmet Kaya - Fiat Egea", time: "2 saat önce", icon: ArrowUpRight, color: "text-purple-500", bg: "bg-purple-500/10" },
                                    { title: "Temizlik Tamamlandı", desc: "Renault Clio - İç/Dış", time: "3 saat önce", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-500/10" },
                                ].map((item, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${item.bg} ${item.color} z-10`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-secondary/30 shadow-sm">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-foreground text-sm">{item.title}</div>
                                                <time className="font-caveat font-medium text-xs text-muted-foreground">{item.time}</time>
                                            </div>
                                            <div className="text-muted-foreground text-xs">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
