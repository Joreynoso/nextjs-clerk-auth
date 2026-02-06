import { auth, currentUser } from "@clerk/nextjs/server";

export default async function AboutPage() {

    // get the current user with Clerk auth
    const user  = await currentUser();  
    
    // render return
    return (
        <div className="w-full flex flex-col py-12">
            <h1>Dashboard Page</h1>

            <h2 className="mt-4 text-lg font-semibold">User Information</h2>
            <p className="text-foreground">Welcome: {user?.firstName} {user?.lastName}</p>
            <p className="text-foreground">Email: {user?.emailAddresses[0].emailAddress}</p>
        </div>
    )
}