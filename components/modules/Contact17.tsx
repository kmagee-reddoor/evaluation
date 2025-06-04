"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              For any inquiries, please fill out the contact form below.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us for more information or to book a storage unit.
            </p>
            <a className="underline" href="#">
              +1 (555) 000-0000
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              Visit our office during business hours for assistance.
            </p>
            <a className="underline" href="#">
              123 Sample St, Sydney NSW 2000 AU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
