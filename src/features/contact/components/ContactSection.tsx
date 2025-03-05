"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-lg sm:h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5556267206!2d4!3d52.373056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzMzLjMiTiA0wrA1JzI4LjciRQ!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location map"
            ></iframe>
          </div>

          <div className="my-6 md:my-auto">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="mb-2 text-2xl font-light uppercase sm:text-3xl md:mb-4 md:text-4xl">
                  Send a Message
                </h2>
                <p className="mb-4 text-sm md:mb-8 md:text-base">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-10 md:h-12"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-10 md:h-12"
                  />
                </div>

                <Textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="min-h-[150px] sm:min-h-[180px] md:min-h-[200px]"
                  required
                />

                <Button
                  type="submit"
                  className="w-full py-3 text-base font-light md:py-5 md:text-xl"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
