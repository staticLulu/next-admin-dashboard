'use client'

import DynamicCard from "./DynamicCard";
import Image from "next/image";
import LoadingIndicator from "./LoadingIndicator";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface DynamicCardProps {
  id: number;
  username: string;
  company: Company;
}

const DashboardClient = ({dataList}:{dataList: any}) => {
  const router = useRouter();

  function handleClick() {
    router.push('/helloworld');
  }

  return (
    <>
    <div className="grid gap-5 grid-cols-3">
      {dataList.map((data: DynamicCardProps, index: number) => {
        if (index % 3 === 0) { return null; }
        return (
          <DynamicCard
            key={data.id}
            title={data.username}
            textColor="text-primary"
            onClick={handleClick}
          >
            <div className="p-4 bg-rose-200">
              {data.id === 1 || data.id === 3 || data.id === 5 ? (
                <Image src="/me.jpg" alt="card?" width={100} height={95} />
              ) : (
                <Image src="/card.jpg" alt="card?" width={100} height={100} />
              )}

            </div>
            <div>
              <p className="font-semibold text-base text-rose-500 my-2.5">Company: {data.company.name}</p>
              <p>Catch Phrase: {data.company.catchPhrase}</p>
              <p>BS: {data.company.bs}</p>
            </div>
          </DynamicCard>
        );
      })}
    </div>
    
    <div className="grid gap-5 grid-cols-4 mt-10">
      {dataList.map((data: DynamicCardProps) => (
        <DynamicCard key={data.id} title={data.username} textColor="text-green-500">
          <div>
            <p>Company: {data.company.name}</p>
            <p>Catch Phrase: {data.company.catchPhrase}</p>
            <p>BS: {data.company.bs}</p>
          </div>
        </DynamicCard>
      ))}
    </div>
  </>
  )
}

export default DashboardClient;

