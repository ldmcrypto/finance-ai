import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

import SummaryCard from "./summary-card";
// import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
}: SummaryCards) => {
  return (
    <div className="space-y-6">
      {/*primeiro card */}

      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3">
        <SummaryCard
          icon={<PiggyBankIcon size={14} className="text-primary" />}
          title="Investido"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={14} className="text-red-500" />}
          title="Receitas"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={14} />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
