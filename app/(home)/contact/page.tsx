"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="w-full h-full bg-[#A20F11]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-stretch px-6 py-12 md:flex-row md:py-20">
        {/* Left Side - Content */}
        <div className="flex flex-1 mt-12 flex-col justify-center pr-0 md:pr-16 lg:pr-24">
          <h1 className="mb-4 text-5xl font-bold text-white rus md:text-6xl lg:text-7xl">Get in touch</h1>
          <h2 className="mb-6 text-2xl font-medium mono text-white md:text-3xl">Let's work together</h2>
          <p className="text-lg leading-relaxed mono text-white md:text-xl">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="mt-12 flex flex-1 flex-col justify-center md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-white bg-transparent px-0 py-4 text-lg text-white placeholder-white focus:border-white focus:outline-none"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-white bg-transparent px-0 py-4 text-lg text-white placeholder-white focus:border-white focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full mono resize-none border-b border-white0 bg-transparent px-0 py-4 text-lg text-white placeholder-white focus:border-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rus rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-colors hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
