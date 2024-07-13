"use client";
import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    Icon,
    Images,
    Layers,
    LineChart,
    Menu,
    MessageSquare,
    MessagesSquare,
    NotepadText,
    Package,
    Package2,
    Search,
    Settings,
    ShoppingCart,
    SquareDashedMousePointer,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/custom/sidebar"
import { Header } from "@/components/custom/header"
import { link } from "fs"
import { usePathname } from "next/navigation";
import { useEffect } from "react";



export default function Dashboard() {
    const navItems: any = [
        {
            title: 'Dashboard',
            link: 'dashboard',
            icon: Home,
            active: true
        },
        {
            title: 'Posts',
            link: '',
            icon: NotepadText
        },
        {
            title: 'Media',
            link: '',
            icon: Images
        },
        {
            title: 'Pages',
            link: '',
            icon: Layers
        },
        {
            title: 'Comments',
            link: '',
            icon: MessagesSquare
        },
        {
            title: 'Users',
            link: '',
            icon: Users
        },
        {
            title: 'Settings',
            link: '',
            icon: Settings
        }
    ]

    const pathname = usePathname()

    useEffect(() => {
        console.log('pathname', pathname)
    }, [])
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <SquareDashedMousePointer className="h-6 w-6 text-blue-500" />
                            <span className="">NextPress</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {navItems.map((item: any) => (
                                <Link
                                key={item.title}
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">

                </main>
            </div>
        </div>
    )
}
