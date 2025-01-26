// components/DropdownMenuCheckboxes.tsx
"use client"

import * as React from "react"
import { User } from 'lucide-react'; // Import the User icon from Lucide
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuCheckboxes() {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout');
  };

  const handleProfile = () => {
    // Implement profile logic here
    console.log('Profile');
  };

  const handleLanguageChange = (language: string) => {
    // Implement language change logic here
    console.log(`Language changed to ${language}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfile}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleLanguageChange('Français')}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('Anglais')}>
          Anglais
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
