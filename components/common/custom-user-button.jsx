'use client'
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { BuildingIcon } from "lucide-react";

export default function CustomUserButton (){
    return (
        <UserButton>
            <UserButton.UserProfilePage label="Orgenization" labelIcon={<BuildingIcon className="size-4"/>} url="Orgenization">
            <div className="p-4">
                <h2>Manage Orgenization</h2>
                <OrganizationSwitcher hidePersonal={true}  afterCreateOrganizationUrl={"/submit"} afterSelectPersonalUrl={"/submit"} appearance={{ 
                    elements:{
                        rootBox:"w-full"
                    }
                 }}/>
            </div>
            </UserButton.UserProfilePage>
        </UserButton>
    )
}