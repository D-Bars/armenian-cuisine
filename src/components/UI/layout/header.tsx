'use client';
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";
import { signOutFunc } from "@/actions/sign-out";

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

    const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

    const handleSignOut = async () => {
        await signOutFunc();
    }

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
        <Navbar className="h-[var(--size-header)]">
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
                    <Button
                        as={Link}
                        color="secondary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsLoginOpen(true)}
                    >
                        Log In
                    </Button>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button
                        as={Link}
                        color="secondary"
                        href="#"
                        variant="flat"
                        onPress={handleSignOut}
                    >
                        Log out
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsRegistrationOpen(true)}
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Navbar>
    );
}
