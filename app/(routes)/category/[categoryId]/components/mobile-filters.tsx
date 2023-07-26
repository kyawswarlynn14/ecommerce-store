"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import IconButton  from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Type } from "@/types";

import Filter from "./filter";

interface MobileFiltersProps {
  types: Type[],
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  types
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 md:hidden"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 md:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-52 max-w-xs flex-col overflow-y-auto bg-slate-800 py-4 pb-6 shadow-xl rounded-l-lg">
            
            {/* Close button */}
            <div className="flex items-center text-black justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="typeId" 
                name="Types" 
                data={types}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;