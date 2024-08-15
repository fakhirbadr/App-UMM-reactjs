import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import List from "./liste.json";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[360px] h-[360px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 border-4 border-transparent duration-300 active:text-white active:border-white p-4 w-full font-bold text-lg rounded-lg tracking-wider flex items-center justify-between"
      >
        {selectedItem ? selectedItem.job : "Fonction"}
        {isOpen ? (
          <ArrowDropUpIcon className="h-8" />
        ) : (
          <ArrowDropDownIcon className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-[20%] bg-blue-200 flex-col items-start rounded-lg p-2 w-[100%]">
          {List.map((item, i) => (
            <div
              key={i}
              onClick={() => handleSelect(item)}
              className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent"
            >
              <h3 className="font-bold py-3">{item.job}</h3>
              <h3 className="">{item.emoticone}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
