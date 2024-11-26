import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface ExpensePerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensePerCategory = ({
  expensesPerCategory,
}: ExpensePerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border p-6">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2"></div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensePerCategory;
