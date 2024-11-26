"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  // Validação do esquema
  upsertTransactionSchema.parse(params);

  // Autenticação
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Lógica do upsert
  if (params.id) {
    // Atualiza se o ID foi fornecido
    await db.transaction.upsert({
      update: { ...params, userId },
      create: { ...params, userId },
      where: {
        id: params.id ?? "",
      },
    });
  } else {
    // Cria um novo registro se o ID não for fornecido
    await db.transaction.create({
      data: { ...params, userId },
    });
  }

  // Revalidação de caminho
  revalidatePath("/transactions");
};
