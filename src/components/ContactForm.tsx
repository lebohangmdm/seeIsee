"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className="space-y-2 ">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="enquiry">Enquiry</Label>
          <Textarea
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button type="submit" variant={"destructive"} className="mt-6">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
