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
        <button className="flex items-center focus:outline-none">
          <User className="w-8 h-8 text-gray-700" /> {/* Use the Lucide User icon */}
        </button>
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
