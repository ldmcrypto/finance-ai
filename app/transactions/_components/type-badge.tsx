import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";

import { Transaction, TransactionType } from "@prisma/client";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger bg-opacity-10 font-bold text-danger">
        <CircleIcon className="fill-destrutext-destructive mr-2" size={10} />
        Despesas
      </Badge>
    );
  }
  return (
    <Badge className="bg-danger bg-opacity-10 font-bold text-danger">
      <CircleIcon className="fill-destrutext-destructive mr-2" size={10} />
      Investimentos
    </Badge>
  );
};

export default TransactionTypeBadge;
