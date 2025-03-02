"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

const ContactSection: React.FC = () => {
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
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    // You might want to add form validation, API call, etc.
  };

  return (
    <section className="bg-white py-10 md:py-16 lg:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 md:gap-12 md:grid-cols-2">
          {/* Map Section */}
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
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

          {/* Contact Form */}
          <div className="my-6 md:my-auto">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-light uppercase">
                  Send a Message
                </h2>
                <p className="mb-4 md:mb-8 text-sm md:text-base">
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
                  className="w-full py-3 md:py-5 text-base md:text-xl font-light"
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