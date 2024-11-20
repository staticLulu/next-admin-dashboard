'use client'
import { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 3200);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {loading ? 
        <Spinner size="lg" color="success" className="mt-4" />
        : <Button 
            onPress={handleLogin} 
            disabled={loading} 
            size="lg"
            className="bg-green-600 shadow-sm text-white"
          >
            Login 
          </Button>
      }
    </div>
  );
}
