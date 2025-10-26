"use server";

import { TExpense } from "@/app/features/expenses/models/expense";
import expenseSchema from "@/app/features/expenses/schemas/expense";
import TFetchResponse from "@/app/models/fetch_response";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


async function createExpense(expense: TExpense):Promise<TFetchResponse> {
  "use server";

  const parsedData = expenseSchema().safeParse(expense);

  if (!parsedData.success){
    // ERROR TOAST HERE
    return {
      success: false,

      // CONVERT ERROR.ISSUES TO AN RECORD<STRING, STRING> ???
      error: parsedData.error.issues,
    }
  }

  await prisma.expense.create({
    data: {
      title: expense.title,
      value: expense.value,
      category: expense.category,
    }
  });
  revalidatePath("/");
      return {
      success: true,
      error: {},
    }
}

export { createExpense };
