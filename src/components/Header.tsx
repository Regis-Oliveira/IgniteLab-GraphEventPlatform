import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  dropdownActive: boolean;
  activateDropdown: () => void;
}

export function Header({ dropdownActive, activateDropdown }: HeaderProps) {
  return (
    <header className="w-full py-5 flex items-center justify-center 
      bg-gray-700 border-b border-gray-600">
      <Logo />

      <button 
        className="absolute right-6 lg:hidden" 
        onClick={() => activateDropdown()}
      >
        {dropdownActive 
          ? <X size={32} />
          : <List size={32} />        
        }
      </button>
    </header>
  )
}
