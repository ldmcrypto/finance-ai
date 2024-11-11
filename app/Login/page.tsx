import Image from "next/image"; //16.5k (gzipped: 6.1k)
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
//import { eslint } from 'next/dist/lib/constants';


const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* esquerda */}
      <div className="mx_auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image src="logo.svg" width={173} height={39} alt="Finance AI" className="mb-8"/>
        <h1 className="mb-3 text-4xl font-bold">BEM-VINDO</h1>
        <p className="text-muted-foreground mb-8">
          A finance AI é uma plataforma de gestão financeira que utiliza AI paa
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle de seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer Login ou criar conta
        </Button>
      </div>  

      {/* direita */}
      <div className="relative h-full w-full">
        <Image src="/login.svg" alt="Faça login" fill className="object-cover"/>
      </div>
    </div>
  );
};

export default LoginPage;
