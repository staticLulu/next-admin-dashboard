'use client';

import DynamicButton from "@/components/DynamicButton";
import AdminLayout from "@/Layouts/AdminLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleClickMe = () => {
    alert("hellodarkworldihitsm!!!");
  };

  const handleRefresh = () => {
    setIsRefreshing(true); // Set the button to "refreshing" state
    setTimeout(() => {
      setIsRefreshing(false); // Revert the state after timeout
      router.refresh(); // Refresh the page
      router.push("/"); // Navigate to "/"
    }, 1000); // Adjust the timeout duration as needed (e.g., 1000ms = 1s)
  };

  return (
    <AdminLayout>
      <div className="flex gap-5 border-b p-5">
        <DynamicButton label="hello world" variant="outline" onClick={() => router.push("/")} />
        <DynamicButton label="hello world" variant="primary" onClick={handleClickMe} />
        <DynamicButton
          label={isRefreshing ? "Refreshing..." : "hello world"}
          variant="secondary"
          disabled={isRefreshing}
          onClick={handleRefresh}
        />
      </div>
    </AdminLayout>
  );
};

export default ProfilePage;
