import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export const dynamic = "force-dynamic";

export default async function AdminContactsPage() {
  await connectDB();
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">Service</th>
            <th className="border px-3 py-2">Message</th>
            <th className="border px-3 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td className="border px-3 py-2">{c.name}</td>
              <td className="border px-3 py-2">{c.email}</td>
              <td className="border px-3 py-2">{c.service}</td>
              <td className="border px-3 py-2 max-w-xs truncate">{c.message}</td>
              <td className="border px-3 py-2">{new Date(c.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
