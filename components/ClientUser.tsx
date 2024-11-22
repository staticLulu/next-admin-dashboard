// ClientUsersPage.tsx (Client Component)
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import DynamicTableII from "./DynamicTableII";
import DynamicTable from "./DynamicTable";

const ClientUsersPage = ({ users }: { users: any[]; }) => {
  const router = useRouter();

  const handleEdit = (id: number) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete user with ID: ${id}`);
  };

  const handleDetail = (id: number) => {
    router.push(`/users/detail?=${id}`);
  };

  const user_columns: any[] = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "username", header: "Username" },
    { key: "website", header: "Website" },
    { key: "phone", header: "Phone" },
    {
      key: "actions",
      header: "Actions",
      render: (row: any) => (
        <div className="flex gap-2 justify-center">
          <Button
            variant="bordered"
            size="sm"
            onClick={() => handleDetail(row.id)}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="bordered"
            color="secondary"
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </Button>
          <Button
            size="sm"
            color="danger"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const product_list: any[] = [
    { key: "id", header: "ID" },
    { key: "fullname", fullname: "fullname" },
    { key: "username", header: "username" },
  ];

  const data_list: any[] = [
    {id: 1, fullname: "Sok Koko", username: "KOKO"},
    {id: 2, fullname: "Sok Koko", username: "KOKO"}
  ]

  return (
    <div className="grid gap-5">
      <DynamicTableII columns={user_columns} data={users} />
      <DynamicTable columns={user_columns} data={users} />
      <DynamicTable columns={user_columns} data={[]} />
      <DynamicTable columns={product_list} data={data_list} />
    </div>
  );
};

export default ClientUsersPage;
