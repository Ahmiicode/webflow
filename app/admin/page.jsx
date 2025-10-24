import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-y-3">
        <Link href="/admin/leads" className="text-blue-600 underline">
          View Leads
        </Link>
        <br />
        <Link href="/admin/contact" className="text-blue-600 underline">
          View Contact Messages
        </Link>
      </div>
    </main>
  );
}
