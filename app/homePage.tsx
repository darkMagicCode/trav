"use client";
import { useEffect, useState } from "react";
import { filterItems, sortItems } from "@/utils/helpers";
import Base from "@/lib/Baseof";
import config from "../config/products.json";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DynamicTable } from "@/components/ui/DynamicTable";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";

export default function HomePage({ items }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<any>("name");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const config1 = config;
  const [filteredItems, setFilteredItems] = useState<any>(config1);

  useEffect(() => {
    let filtered = filterItems(items, searchQuery, minPrice, maxPrice);
    filtered = sortItems(filtered, sortOption);
    setFilteredItems(filtered);
  }, [searchQuery, sortOption, minPrice, maxPrice, items]);

  const { dispatch } = useCart();
  const handleAddToCart = (item: any) => {
    toast({
      variant: "default",
      title: "Added to cart",
      description: `${item.name} added to cart`,
    });
    dispatch({ type: "ADD_TO_CART", item });
  };
  const columns = [
    {
      id: "select",
      header: ({ table }: any) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }: any) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "description",
      header: ({ column }: any) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            description
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => (
        <div className="lowercase">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }: any) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => {
        const amount = parseFloat(row.getValue("price"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="t font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }: any) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-black-400 bg-black text-white">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="hover" onClick={() => handleAddToCart(row.original)}>
                Add To Cart
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const handleAction = (action: string, item: any) => {
    console.log(`Action: ${action}, Item:`, item);
  };

  return (
    <Base imgUrl={"logo"}>
      <div className="grid grid-cols-1 lg:grid-cols-full gap-4 px-2 md:px-10">
        <div className="lg:col-span-3 sm:col-span-1">
            <DynamicTable
              data={filteredItems}
              columns={columns}
              onAction={handleAction}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
        </div>
      </div>
    </Base>
  );
}
