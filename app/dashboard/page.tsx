import DashboardClient from "@/components/DashboardClient";
import AdminLayout from "@/Layouts/AdminLayout";

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 },
  });
  return res.json();
};

const AdminDashboardPage = async () => {
  const [ users ] = await Promise.all([fetchUsers()]);

  return (
    <AdminLayout>
      <DashboardClient dataList={users}/>
    </AdminLayout>
  )
};

export default AdminDashboardPage;
