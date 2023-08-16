"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav
      className="ml-10 mr-2 flex items-center space-x-4 lg:space-x-6"
    >
      <a href="/" className="text-sm md:text-base font-medium transition-colors text-neutral-300 hover:text-white hover:underline underline-offset-4">
        Home
      </a>

      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm md:text-base font-medium transition-colors hover:text-white hover:underline underline-offset-4',
            route.active ? 'text-white border-b-2 border-green-500 hover:no-underline' : 'text-neutral-300'
          )}
        >
          {route.label}
      </Link>
      ))}

      <a href="#contact" className="text-sm md:text-base font-medium transition-colors text-neutral-300 hover:text-white hover:underline underline-offset-4">
        Contact Us
      </a>
    </nav>
  )
};

export default MainNav;