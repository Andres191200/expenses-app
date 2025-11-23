import { TCategory } from "./category";

export type TExpense = {
    id: number;
    title: string;
    category: TCategory;
    value: number;
    createdAt: Date;
}