'use client';


import React from 'react';
import { Input } from "@/components/ui/input"

const SearchBar = ({ searchQuery, setSearchQuery }:any) => (
  <Input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search for items..."
  />
);

export default SearchBar;
