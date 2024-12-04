import DynamicButton from "@/components/DynamicButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  params: {
    id: any
  }
}
const UserAnalyticsDetailsPage = async ({params}: Props) => {
  const { id } = params;
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());

  return (
    <AdminLayout>
      <Link href={'/users'}>
        <DynamicButton label="back 🔙" variant="secondary"/>
      </Link>
      <div className="flex justify-center my-5">
        <Image 
          src={"/helloworld2.jpg"} 
          alt="helloworld" 
          width={300} 
          height={300} 
          className="shadow-slate-600 shadow-sm"
        />
      </div>
      <div className="grid gap-5 grid-cols-3 border border-slate-200 p-5 shadow-sm">
        <Text>{user.id}</Text>
        <Text>{user.name}</Text>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
        <Text>{user.address.zipcode}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.website}</Text>
        <Text>{user.company.name}</Text>
      </div>
    </AdminLayout>
  )
}

const Text = ({children}: {children: ReactNode}) => {
  return (
    <p className="font-medium text-2xl">{children}</p>
  )
}

export default UserAnalyticsDetailsPage;