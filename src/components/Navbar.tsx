// imports
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60">
            <div className="w-full max-w-7xl mx-auto px-6 xl:px-0">
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent shadow-sm">
                            <Sparkles className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Clerk Auth
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                href="/"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                            <Link
                                href="/dashboard"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                Dashboard
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                        </div>

                        {/* Auth Section */}
                        <div className="flex items-center gap-3">
                            <SignedIn>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "h-9 w-9 ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                                        }
                                    }}
                                />
                            </SignedIn>

                            <Button
                                asChild
                                size="sm"
                                className="rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <Link href="/sign-up">
                                    Sign Up
                                </Link>
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}