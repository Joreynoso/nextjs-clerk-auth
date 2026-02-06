// imports
import { SignedIn, SignUp, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {

    // render return
    return (
        <div className="w-full  flex flex-col py-4 bg-sidebar border border-[#bcc0cc]">

            <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <span className="text-lg font-semibold">Clerk Auth Example</span>

                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/about">About</Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
             
                    <Link href="/sign-up">Sign Up</Link>
                    
                </div>
            </nav>
        </div>
    )
}