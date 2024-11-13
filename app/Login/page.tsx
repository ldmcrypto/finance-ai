import Image from "next/image"; //16.5k (gzipped: 6.1k)
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
//import { eslint } from 'next/dist/lib/constants';

import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect} from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
if (userId) {
  redirect("/");
}

  return (
    <div className="grid h-full grid-cols-2">
      {/* esquerda */}
      <div className="mx_auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">BEM-VINDO</h1>
        <p className="mb-8 text-muted-foreground">
          A finance AI é uma plataforma de gestão financeira que utiliza AI paa
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle de seu orçamento.
        </p>
        <SignInButton>
          <Button>
            <LogInIcon className="mr-2" />
            Fazer Login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* direita */}
      <div className="relative h-full w-full">
        <Image
          src="/login.svg"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
