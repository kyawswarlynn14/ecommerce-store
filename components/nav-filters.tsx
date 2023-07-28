"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link"

import IconButton  from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Category } from "@/types";
import { cn } from "@/lib/utils"

interface NavFiltersProps {
  data: Category[],
}

const NavFilters: React.FC<NavFiltersProps> = ({
  data
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        
        className="flex items-center md:hidden"
      >
        <RiMenu3Line className="text-lg" />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 md:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-52 flex-col overflow-y-auto bg-slate-800 py-4 pb-6 shadow-xl rounded-l-lg">
            
            {/* Close button */}
            <div className="flex items-center text-black justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <nav
                className="flex flex-col mt-4 mx-6 gap-4">

                <a href="/" className="rounded-md text-black p-2 bg-white border-2 border-green-500">
                    Home
                </a>
                
                {routes.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'rounded-md text-black p-2 bg-white border-2 border-green-500',
                        route.active && 'bg-black text-white'
                    )}
                    >
                    {route.label}
                    </Link>
                ))}

                <a href="#contact" className="rounded-md text-black p-2 bg-white border-2 border-green-500">
                    Contact Us
                </a>
            </nav>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default NavFilters;