"use client";

import {
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
  useClerk,
} from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  const handleOpenAccount = () => {
    openUserProfile();
  };

  return (
    <>
      <SignedOut>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col gap-2 p-2">
              <SignInButton>
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SignedOut>

      <SignedIn>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={user?.imageUrl}
                      alt={user?.fullName || ""}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user?.firstName?.charAt(0) ||
                        user?.emailAddresses?.[0]?.emailAddress?.charAt(0) ||
                        "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user?.fullName || user?.firstName || "User"}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.emailAddresses?.[0]?.emailAddress}
                    </span>
                  </div>
                  <IconDotsVertical className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={user?.imageUrl}
                        alt={user?.fullName || ""}
                      />
                      <AvatarFallback className="rounded-lg">
                        {user?.firstName?.charAt(0) ||
                          user?.emailAddresses?.[0]?.emailAddress?.charAt(0) ||
                          "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">
                        {user?.fullName || user?.firstName || "User"}
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        {user?.emailAddresses?.[0]?.emailAddress}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={handleOpenAccount}>
                    <IconUserCircle />
                    Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <IconLogout />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SignedIn>
    </>
  );
}
