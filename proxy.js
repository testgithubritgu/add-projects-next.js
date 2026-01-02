import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth) => {
    const { userId, orgId } = await auth();

    if (!userId || orgId) {
        return NextResponse.next();
    }

    try {
        const client =await clerkClient();

        // ✅ Check if user is already part of any organization
        const { data: memberships } =
            await client.users.getOrganizationMembershipList({
                userId,
            });

        if (memberships.length > 0) {
            return NextResponse.next();
        }

        // ✅ Fetch user details
        const user = await client.users.getUser(userId);

        const orgName =
            user.fullName
                ? `${user.fullName}'s Organization`
                : user.firstName
                    ? `${user.firstName}'s Organization`
                    : user.username
                        ? `${user.username}'s Organization`
                        : user.primaryEmailAddress?.emailAddress
                            ? `${user.primaryEmailAddress.emailAddress} Organization`
                            : "My Organization";

        await client.organizations.createOrganization({
            name: orgName,
            createdBy: userId,
        });

        console.log("Auto-created organization:", orgName);
    } catch (error) {
        console.error("Error auto-creating organization:", error);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ico|woff2?|ttf)).*)",
        "/(api|trpc)(.*)",
    ],
};
