import { TCategory } from "@/shared/actions/getCategories";

export type TExpense = {
    id: number;
    title: string;
    category: TCategory;
    value: number;
    createdAt?: Date;
}