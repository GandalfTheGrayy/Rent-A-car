import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Users,
  CalendarDays,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Key,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Fuel,
  Gauge,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-8 font-sans pb-10">
      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Operasyon Merkezi
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Günlük filo durumu ve acil aksiyonlar.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10">
            <Search className="mr-2 h-4 w-4" />
            Müsaitlik Ara
          </Button>
          <Button className="h-10 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Key className="mr-2 h-4 w-4" />
            Hızlı Teslimat
          </Button>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Car className="h-24 w-24 text-blue-500" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Yoldaki Araçlar</CardTitle>
            <Car className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">42</div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center">
              <span className="text-blue-500 flex items-center mr-2">
                <ArrowUpRight className="mr-1 h-3 w-3" /> +5
              </span>
              bugün çıktı
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock className="h-24 w-24 text-emerald-500" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bugün Dönecekler</CardTitle>
            <Clock className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center">
              <span className="text-emerald-500 flex items-center mr-2">
                3 Araç
              </span>
              dönüş yaptı
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <AlertTriangle className="h-24 w-24 text-red-500" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Geciken İadeler</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center">
              <span className="text-red-500 flex items-center mr-2">
                Acil Aksiyon
              </span>
              gerekli
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-card hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle2 className="h-24 w-24 text-emerald-500" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Müsait Araçlar</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">24</div>
            <p className="text-xs text-muted-foreground mt-2 flex items-center">
              <span className="text-emerald-500 flex items-center mr-2">
                %19
              </span>
              filo müsaitliği
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity / Reservations */}
        <Card className="col-span-4 border-none shadow-lg bg-card">
          <CardHeader>
            <CardTitle>Son Hareketler</CardTitle>
            <CardDescription>
              Bugün gerçekleşen son 5 işlem.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { user: "Ahmet Yılmaz", car: "BMW 320i", type: "Teslimat", time: "10 dk önce", amount: "₺4,500", status: "success" },
                { user: "Ayşe Demir", car: "Mercedes C200", type: "Rezervasyon", time: "32 dk önce", amount: "₺6,000", status: "warning" },
                { user: "Mehmet Kaya", car: "Fiat Egea", type: "İade", time: "1 saat önce", amount: "Tamamlandı", status: "default" },
                { user: "Caner Erkin", car: "Renault Clio", type: "Teslimat", time: "2 saat önce", amount: "₺1,200", status: "success" },
                { user: "Zeynep Şen", car: "Ford Focus", type: "Bakım Çıkışı", time: "3 saat önce", amount: "Servis", status: "destructive" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm
                        ${item.status === 'success' ? 'bg-emerald-500/10 text-emerald-500' : ''}
                        ${item.status === 'warning' ? 'bg-orange-500/10 text-orange-500' : ''}
                        ${item.status === 'destructive' ? 'bg-red-500/10 text-red-500' : ''}
                        ${item.status === 'default' ? 'bg-blue-500/10 text-blue-500' : ''}
                    `}>
                      {item.user.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none text-foreground">{item.user}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.car} • {item.type}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm text-foreground">{item.amount}</div>
                    <div className="text-xs text-muted-foreground">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Smart Alerts */}
        <Card className="col-span-3 border-none shadow-lg bg-card">
          <CardHeader>
            <CardTitle>Akıllı Bildirimler</CardTitle>
            <CardDescription>
              Operasyonel uyarılar ve hatırlatmalar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <AlertTriangle className="mt-1 h-5 w-5 text-red-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-red-500">Geciken İade (2 Araç)</p>
                  <p className="text-sm text-muted-foreground">
                    34 ABC 123 ve 34 XYZ 789 plakalı araçların iade süresi geçti.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-red-500 font-bold text-xs">Müşteriyi Ara</Button>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
                <Gauge className="mt-1 h-5 w-5 text-orange-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-orange-500">Bakım Yaklaşıyor</p>
                  <p className="text-sm text-muted-foreground">
                    Mercedes C180 (34 MER 01) 200km sonra bakıma girmeli.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-orange-500 font-bold text-xs">Randevu Oluştur</Button>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                <Fuel className="mt-1 h-5 w-5 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none text-blue-500">Yakıt Uyarısı</p>
                  <p className="text-sm text-muted-foreground">
                    Son teslim alınan 2 araçta yakıt seviyesi %20'nin altında.
                  </p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline">
              Tüm Bildirimleri Gör <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
