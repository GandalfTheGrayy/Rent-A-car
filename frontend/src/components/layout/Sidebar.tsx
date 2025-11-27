"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Car,
    Users,
    CalendarDays,
    Wallet,
    LogOut,
    Building2,
} from "lucide-react";

const navigation = [
    { name: "Panel", href: "/", icon: LayoutDashboard },
    { name: "Filo", href: "/fleet", icon: Car },
    { name: "Müşteriler", href: "/customers", icon: Users },
    { name: "Rezervasyonlar", href: "/reservations", icon: CalendarDays },
    { name: "Finans", href: "/finance", icon: Wallet },
    { name: "Yönetim Paneli", href: "/company-dashboard", icon: Building2 },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col bg-card border-r border-border">
            <div className="flex h-16 items-center px-6 border-b border-border">
                <Car className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold text-foreground tracking-tight">
                    Rent<span className="text-primary">X</span>
                </span>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="border-t border-border p-4">
                <button className="flex w-full items-center px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:bg-destructive/10 hover:text-destructive transition-colors">
                    <LogOut className="mr-3 h-5 w-5" />
                    Çıkış Yap
                </button>
            </div>
        </div>
    );
}
