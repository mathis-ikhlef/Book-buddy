// src/components/Header.jsx
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assurez-vous que ce chemin est correct
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-irish-grover">La caverne de l'Ickabog</h1>

      <div className="flex items-center space-x-2 w-1/2 bg-white p-1">
        <Select>
          <SelectTrigger className="w-[180px] bg-white text-black rounded-r-md p-2">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <input
          type="text"
          className="flex-grow p-2 rounded-l-md border-none outline-none"
          placeholder="Rechercher..."
        />
      </div>

      {/* Lien de navigation à droite */}
      <nav>
        <NavLink to="/LoginForm" className="text-xl font-irish-grover">Login</NavLink>
      </nav>
    </header>
  );
}

export default Header;
