import React, {  } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function DrowDownItem({ data ,isOpen,setIsOpen}) {
  if (!data) {
    return console.log(data);
  }
  return (
    <Transition
      as={Fragment}
      show={isOpen } 
      onMouseLeave={() => setIsOpen(false)}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
   
    >
      <Menu.Items static className="absolute left-0 mt-1 w-96 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 flex flex-wrap ">
          {data.map((district) => (
            <Menu.Item key={district.id} >
              <div
                className={`group flex w-2/6 items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
              >
                <input type="checkbox" className="mr-1 cursor-pointer"/>
                {district.name}
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
   
  );
}
