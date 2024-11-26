import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";

const subscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/Login");
  }

  return <Navbar />;
};

export default subscriptionPage;
