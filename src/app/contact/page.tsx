"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      }).then((res) => res.json());
      setResponse(response.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setResponse("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className="relative h-1/3 w-full md:h-full md:w-1/2">
        <Image src="/contact_us_eazybite.jpg" alt="contact-us" fill className="object-cover w-1/2" />
      </div>
      <div className="p-10 flex flex-col gap-8 md:w-1/2">
        <h1 className="font-bold text-xl xl:text-3xl">Contact Us</h1>
        <p>Send a message we are here to help.😊</p>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
