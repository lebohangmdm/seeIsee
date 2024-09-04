import React from "react";
import { Form } from "@/components/ui/form";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid items-center md:grid-cols-2 gap-6">
          <ContactForm />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
