'use client';

import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactMessage from "@/components/ContactMessage";

export default function Contact() {
  return (
    <div className="grid grid-rows-[130px_1fr_80px] min-h-screen bg-fixed bg-no-repeat bg-bottom-left items-center justify-center bg-[#006D88] font-sans" style={{ backgroundImage: "url('https://images.unsplash.com/vector-1746187357447-05a427d67847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y293Ym95JTIwaGF0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900')" }}>
      <PageHeader />
      <div className="grid grid-cols-[2fr_1fr] rounded-md h-full w-full px-18 justify-items-center text-end">
        <div className="items-center">
          <ContactForm />
        </div>
        <ContactMessage />
      </div>
    </div>
  );
}