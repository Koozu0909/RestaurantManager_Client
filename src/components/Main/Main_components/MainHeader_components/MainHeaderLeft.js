import React, { useState } from "react";
import DrowDownItem from "./DrowDownItem";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu } from "@headlessui/react";
import hcmcDistrictsData from "./hcmcDistricts.json";
import foodCategories from "./foodCategories.json";

export default function MainHeaderLeft() {
  const [isDistrictsOpen, setIsDistrictsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="w-2/6 h-full  flex justify-start items-end">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="inline-flex w-full justify-center rounded-t-md  px-4 py-2 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => setIsDistrictsOpen(!isDistrictsOpen)}
        >
          KHU VỰC
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-black hover:text-opacity-75"
            aria-hidden="true"
          />
        </Menu.Button>
        <DrowDownItem
          data={hcmcDistrictsData.hcmcDistricts}
          isOpen={isDistrictsOpen}
          setIsOpen={setIsDistrictsOpen}
        />
      </Menu>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="inline-flex w-full justify-center rounded-t-md   px-4 py-2 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        >
          PHÂN LOẠI
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-black hover:text-opacity-75"
            aria-hidden="true"
          />
        </Menu.Button>
        <DrowDownItem
          data={foodCategories.foodCategories}
          isOpen={isCategoriesOpen}
          setIsOpen={setIsCategoriesOpen}
        />
      </Menu>
    </div>
  );
}
