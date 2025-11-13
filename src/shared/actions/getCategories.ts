"use server";

export type TCategory = {
  id: string;
  type: "food" | "transport" | "shopping" | "misc";
  label: string;
  color: string;
};

export default async function getCategories() {
  const categories: TCategory[] = [
    {
      id: "1",
      type: "food",
      label: "Food",
      color: "#FF5733",
    },
    {
      id: "2",
      type: "transport",
      label: "Transport",
      color: "#33FF57",
    },
    {
      id: "3",
      type: "shopping",
      label: "Shopping",
      color: "#5733FF",
    },
    {
      id: "10",
      type: "misc",
      label: "misc",
      color: "#FF338C",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return categories;
}
