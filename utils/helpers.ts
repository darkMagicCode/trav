'use client';
interface Item {
    name: string;
    price: number;
  }
  
  export const filterItems = (items: Item[], query: string, minPrice: number, maxPrice: number): Item[] => {
    return items?.filter((item:any) => item.name.toLowerCase().includes(query.toLowerCase()))
      .filter((item:any) => item.price >= minPrice && item.price <= maxPrice);
  };
  
  export const sortItems = (items: Item[], sortOption: 'name' | 'price'): Item[] => {
    return items?.sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
  };
  