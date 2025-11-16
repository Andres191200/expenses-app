"use server";

export type TCategory = {
  id: number;
  name: string;
  color: string | null;
  icon: string | null;
};

export default async function getCategories() {
  const categories: TCategory[] = [
    {
      id: 1,
      name: "Food",
      color: "#FF5733",
      icon: null,
    },
    {
      id: 2,
      name: "Transport",
      color: "#33FF57",
      icon: null,
    },
    {
      id: 3,
      name: "Shopping",
      color: "#5733FF",
      icon: null,
    },
    {
      id: 4,
      name: "Misc",
      color: "#FF338C",
      icon: null,
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return categories;
}
