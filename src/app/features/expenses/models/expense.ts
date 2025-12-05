import { TCategory } from "./category";

export type TExpense = {
    id: number;
    title: string;
    category: TCategory;
    value: string;
    createdAt: Date;
}