import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
// import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";

interface HomeProps {
  searchParams: {
    month: string;
    balance: number;
  };
}

const HOME = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/Login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("?month=1");
   
  }

  const dashboard = await getDashboard(month);


  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between"></div>
        <div className="grid-cols-[2fr, 1fr] grid">
          <div className="flex flex-col gap-6">
            <SummaryCards month={month} {...dashboard} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              {/* <TimeSelect /> */}
              <TransactionsPieChart {...dashboard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
