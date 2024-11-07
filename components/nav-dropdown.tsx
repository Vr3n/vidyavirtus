"use client";

import { redirect } from "next/navigation";
import { Avatar } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";
import { signOutAction } from "@/app/actions";
import { type User } from "@supabase/supabase-js";

export const NavDropDown = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className=""
          avatar_url={user?.user_metadata?.avatar_url}
          full_name={user?.user_metadata?.full_name}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => redirect("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOutAction}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
