'use client'

import LoadingIndicator from "@/components/LoadingIndicator";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HelloWorldPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  
  const onRedirectHome = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  if(loading) {
    return (
      <LoadingIndicator size="lg" color="primary" className="mt-4" />
    )
  }
  
  return (
    <div className="h-screen w-screen grid justify-center">
      <p className="text-4xl font-bold text-center text-rose-500 my-6">
        ** helloworld **
      </p>

      <div onClick={onRedirectHome} className="flex items-center gap-2 justify-center my-6 group cursor-pointer">
        <DoubleArrowLeftIcon 
          width={30} 
          height={30} 
          className="animate-pulse text-primary group-hover:-translate-x-2 transition-transform" 
        />
        <p className="text-3xl group-hover:text-primary transition-colors">
          Back home
        </p>
      </div>
      <Image src={"/helloworld.jpg"} alt="helloworld" width={500} height={500} />
    </div>
  );
};

export default HelloWorldPage;
