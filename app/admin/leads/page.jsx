import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";

export default async function LeadsPage() {
  await connectDB();
  const leads = await Lead.find({}).sort({ createdAt: -1 }).limit(200).lean();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Leads</h1>
      <div className="grid gap-3">
        {leads.map((l) => (
          <div key={l._id} className="border rounded-xl p-4 bg-white">
            <div className="text-sm">{new Date(l.createdAt).toLocaleString()}</div>
            <div className="font-medium">{l.name} — {l.service}</div>
            <div className="text-sm">Contact: {l.contactMethod === "email" ? l.email : l.phone}</div>
            <div className="text-sm">Budget: {l.budget} • Timeline: {l.timeline}</div>
            <div className="text-sm">Page: {l.page}</div>
            <pre className="text-xs whitespace-pre-wrap mt-2">{l.details}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
