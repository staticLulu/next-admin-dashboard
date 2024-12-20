import ClientUsersPage from "@/components/Users";
import AdminLayout from "@/Layouts/AdminLayout";
import { Metadata } from "next";


export const metadata: Metadata ={
  title: {
    absolute: "User Analytics",
  },
}

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 },
  });
  return res.json();
};

const UsersPage = async () => {
  const [ users ] = await Promise.all([fetchUsers()]);

  return (
    <AdminLayout>
      <ClientUsersPage users={users} />
    </AdminLayout>
  );
};

export default UsersPage;