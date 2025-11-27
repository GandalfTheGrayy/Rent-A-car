"use client";

import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
            <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Ara..."
                        className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-4 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="relative rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-primary"></span>
                </button>
                <div className="flex items-center space-x-2 pl-4 border-l border-border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                        AD
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-foreground">Admin User</p>
                        <p className="text-xs text-muted-foreground">Manager</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
