//import {Button} from "./_components/ui/button";/
//import { LogInIcon } from "lucide-react";

import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
//import Image from "next/image"; //16.5k (gzipped: 6.1k)

const HOME = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/Login");
  }
  return (
    //    <Button variant="outline">
    //    <LogInIcon className="mr-2" />
    //    Fazer Login ou criar conta
    //  </Button>

    //<Image src="/logo.svg" width={173} height={39} alt="Finance AI" />;

    <div className="flex h-full items-center justify-center">
      <UserButton
        showName
       
      />
    </div>
  );
};

export default HOME;
