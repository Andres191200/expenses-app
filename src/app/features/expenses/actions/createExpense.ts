"use server";

import { TExpense } from "@/app/features/expenses/models/expense";
import expenseSchema from "@/app/features/expenses/schemas/expense";
import TFetchResponse from "@/app/models/fetch_response";
import { prisma } from "@/shared/lib/prisma";
import { revalidatePath } from "next/cache";

async function createExpense(expense: TExpense): Promise<TFetchResponse> {
  "use server";
  try {
    expenseSchema().safeParse({...expense, createdAt: new Date(Date.now())});
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Invalid data. Check the fields.",
    };
  }
  try {
    console.log('creating: ', expense);
    await prisma.expense.create({
      data: {
        title: expense.title,
        value: expense.value.toString(),
        categoryId: expense.category.id,
      },
    });

  } catch (error) {
    console.error(error);
    if (error instanceof Error)
      return {
        success: false,
        error: error.toString(),
      };
    else {
      return {
        success: false,
        error: "There was an unknown error. Please try again",
      };
    }
  }
  revalidatePath("/");

  return {
    success: true,
    error: null,
  };
}

export { createExpense };
