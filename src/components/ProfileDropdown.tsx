// components/ProfileDropdown.tsx
import React from 'react';
import { DropdownMenuCheckboxes } from './DropdownMenuCheckboxes'; // Import the DropdownMenuCheckboxes component

const ProfileDropdown: React.FC = () => {
  return (
    <div className="relative">
      <DropdownMenuCheckboxes /> {/* Use the DropdownMenuCheckboxes component */}
    </div>
  );
};

export default ProfileDropdown;
