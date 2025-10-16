'use client';
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
    return (
        <Image
            src="/HeaderLogo.png"
            width={100}
            height={100}
            alt="HeaderLogo"
            priority
        />
    );
};

export default function Header() {
    const pathName = usePathname();

    const getNavItems = () => {
        return siteConfig.navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
                <NavbarItem className={`
                            ${isActive ? "text-blue-500" : "text-foreground"}
                        `}
                    key={item.href}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </NavbarItem>
            )
        })
    }
    return (
        <Navbar>
            <NavbarBrand>
                <Link href='/'>
                    <Logo />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {getNavItems()}
            </NavbarContent>
            
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
