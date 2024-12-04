import ClientProfile from "@/components/ClientProfile";
import AdminLayout from "@/Layouts/AdminLayout";
import { fetchUsers } from "../dashboard/page";
import { PersonIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: {
    absolute: "Profile User",
  },
}

const ProfilePage = async () => {
  const [ users ] = await Promise.all([fetchUsers()]);
  const animals = [
    { value: "dog", label: "Dog", icon: "🐶" },
    { value: "cat", label: "Cat", icon: "🐱" },
    { value: "bird", label: "Bird", icon: "🐣" },
  ];

  // Transform users data to match the DynamicSelectButton format
  const transformedUsers = users.map((user: any) => ({
    value: user.id.toString(),
    label: user.name,
    icon: <> <PersonIcon width={16} height={16} /> </>,
  }));
  
  return (
    <AdminLayout>
      <ClientProfile users={transformedUsers} animals={animals} />
    </AdminLayout>
  );
};

export default ProfilePage;
