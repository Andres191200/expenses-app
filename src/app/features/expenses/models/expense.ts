import { Decimal } from "@prisma/client/runtime/library";
import { TCategory } from "./category";

export type TExpense = {
    id: number;
    title: string;
    category: TCategory;
    value: Decimal;
    createdAt: Date;
}