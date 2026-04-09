"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="bg-black py-14 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Form */}
          <div>
            <h2 className="font-khand text-[22px] uppercase text-[#d4af37] sm:text-[24px]">
              Feel Free To Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block font-roboto text-[13px] text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-white/40 bg-transparent px-0 pb-3 pt-1 font-roboto text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block font-roboto text-[13px] text-white"
                >
                  Contact E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-white/40 bg-transparent px-0 pb-3 pt-1 font-roboto text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block font-roboto text-[13px] text-white"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-white/40 bg-transparent px-0 pb-3 pt-1 font-roboto text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-3 block font-roboto text-[13px] text-white"
                >
                  Required Service<span className="text-[#d4af37]">*</span>
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-white/40 bg-transparent px-0 pb-3 pt-1 font-roboto text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block font-roboto text-[13px] text-white"
                >
                  Your Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border-0 border-b border-white/40 bg-transparent px-0 pb-3 pt-1 font-roboto text-[15px] text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="border border-[#d4af37] px-8 py-3 font-conthrax text-[11px] uppercase tracking-[1px] text-white transition duration-300 hover:bg-[#d4af37] hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-khand text-[22px] text-[#d4af37] sm:text-[24px]">
              Business Bay Dubai Office
            </h3>

            <div className="mt-10 overflow-hidden">
              <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px]">
                <iframe
                  title="Business Bay Dubai Office Map"
                 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4689686596093!2d55.26420447483642!3d25.187402577717158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6996a8213cc3%3A0x1573a9be77de8096!2sInterior%20Design%20Company%20in%20Dubai%20-%20Rady%20Interior%20Design%20%26%20Fit%20Out!5e0!3m2!1sen!2sae!4v1773489356556!5m2!1sen!2sae"
                  className="h-full w-full border-0 grayscale-[0%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}