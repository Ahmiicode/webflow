"use client";

import { Suspense } from "react";
import ContactPageInner from "./ContactPageInner";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-slate-500">Loading...</div>}>
      <ContactPageInner />
    </Suspense>
  );
}
