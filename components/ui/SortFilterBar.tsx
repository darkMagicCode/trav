'use client';


import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./input";

const SortFilterBar = ({
  sortOption,
  setSortOption,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: any) => (
  <div className="">
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent onChange={(e:any) => setSortOption(e.target.value)}>
        <SelectItem value="name">Sort by Name</SelectItem>
        <SelectItem value="price">Sort by Price</SelectItem>
      </SelectContent>
    </Select>


    <Input
      type="number"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      placeholder="Min Price"
    />
    <Input
      type="number"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      placeholder="Max Price"
    />
  </div>
);

export default SortFilterBar;
