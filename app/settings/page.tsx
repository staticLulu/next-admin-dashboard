import AdminLayout from "@/Layouts/AdminLayout"
import { Metadata } from "next"

export const metadata: Metadata ={
  title: {
    absolute: "Setting User Roles",
  },
}
const settingsPage = () => {
  return (
    <AdminLayout>
      im settings blah blah
    </AdminLayout>
  )
}

export default settingsPage