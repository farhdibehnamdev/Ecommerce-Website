"use client";
import { useState } from "react";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Person = {
  id: number;
  value: string;
  label: string;
  imageUrl: string;
};

const people: Person[] = [
  {
    id: 1,
    value: "Leslie Alexander",
    label: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    value: "Drake M",
    label: "Drake M",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    value: "Ali Karimi",
    label: "Ali Karimi",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const ProductCategory = function () {
  const [query, setQuery] = useState("");

  return (
    <div className="col-span-12 mb-5 rounded-md bg-white p-5 shadow-sm gap-x-8 gap-y-8 md:grid-cols-2">
      <h3 className=" mb-4  text-lg font-bold text-zinc-800 leading-6">
        Category
      </h3>
      <Select
        labelPlacement="outside"
        variant="bordered"
        label="Please select a category"
        className="w-full"
        placeholder="No items has been selected."
        size="md"
      >
        {people.map((curr) => (
          <SelectItem
            className="text-slate-800"
            key={curr.value}
            value={curr.value}
          >
            <span className="flex items-center">
              <Image
                width={30}
                height={30}
                src={curr.imageUrl}
                alt=""
                className="h-6 w-6 flex-shrink-0 rounded-full"
              />

              {curr.label}
            </span>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ProductCategory;
