import DynamicTable from "@/components/DynamicTable";
import Table from "@/components/DynamicTable";
import AdminLayout from "@/Layouts/AdminLayout";
import { usersProps } from "@/types/user";

const UsersPage = () => {

  // Define the columns
  const columns: any[] = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
  ];

  // Define the data
  const data: usersProps[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <AdminLayout>
      
      <DynamicTable columns={columns} data={data} />
      
    </AdminLayout>
  )
}

export default UsersPage;