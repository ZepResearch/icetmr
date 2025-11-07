"use client"

import { useState, useEffect } from "react"
import {  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, YoutubeIcon, Youtube, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNumber: "",
  })
  const [phoneNumber, setPhoneNumber] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update formData when phoneNumber changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phoneNumber }))
  }, [phoneNumber])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phoneNumber: "",
      })
      setPhoneNumber(undefined)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 ">
              <span className="relative inline-block mx-2 mr-4">
                <span className="relative z-10 text-black">Contact</span>
              </span>
              Us
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch with the Emerging Trends Conference team for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-3xl overflow-hidden h-full shadow-sm border">
                <div className="relative p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>

                  <p className="text-gray-700 mb-8">
                    Have questions about ICETMR 2026? Our team is here to help. Reach out to us using the contact
                    information below or fill out the form.
                  </p>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900/90 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                          <Mail className="h-5 w-5 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Email</p>
                        <p className="text-black font-medium">info@emergingtrendsconference.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900/90 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                          <Phone className="h-5 w-5 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Phone</p>
                        <p className="text-black font-medium">+91 92373 88328</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900/90 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                          <MapPin className="h-5 w-5 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">Address</p>
                        <p className="text-black font-medium">
                          DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-black mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61561809783777"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-red-400" />
                      </a>
                      <a
                        href="https://www.instagram.com/zepresearch/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-red-400" />
                      </a>
                      <a
                        href="https://x.com/Zepresearch"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-red-400" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/zep-research/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-red-400" />
                      </a>
                      <a
                        href="https://www.youtube.com/@Zepresearch"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Youtube className="h-5 w-5 text-red-400" />
                      </a>
                      <a
                        href="https://www.zepresearch.com/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-transparent transition-colors"
                      >
                        <Globe className="h-5 w-5 text-red-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border">
                <div className="relative p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-green-700/80">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Error Sending Message</p>
                        <p className="text-red-700/80">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border rounded-xl text-black placeholder-black/50 focus:outline-none focus:ring-1 focus:ring-gray-500/50 focus:border-gray-500/50"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
                          Phone Number
                        </label>
                        <PhoneInput
                          international
                          defaultCountry="TH"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          className="w-full px-4 py-3 bg-white border  rounded-xl text-gray-900 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border  rounded-xl text-gray-900 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border  rounded-xl text-gray-900 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50"
                          placeholder="What is your message about?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border  rounded-xl text-gray-900 placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/50"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-300 text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-orange-50 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-full bg-gradient-to-r from-rose-400 to-orange-300 opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000"></div>
                        </div>
                        <div className="relative flex items-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-[#f8faf5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2e1a] mb-6">Frequently Asked Questions</h2>
              <div className="h-1 w-20 bg-[#4d724d] mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-[#d3e4c5] overflow-hidden p-6 shadow-sm">
                <div className="relative">
                  <h3 className="text-lg font-medium text-[#1a2e1a] mb-2">
                    When is the ICSIFT conference taking place?
                  </h3>
                  <p className="text-[#4d724d]">
                    ICSIFT 2025: International Conference on Sustainability, Innovation, and Future Technologies will
                    take place on December 27-28, 2025 at the Queen Sirikit National Convention Center in Bangkok,
                    Thailand.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#d3e4c5] overflow-hidden p-6 shadow-sm">
                <div className="relative">
                  <h3 className="text-lg font-medium text-[#1a2e1a] mb-2">How can I register for the conference?</h3>
                  <p className="text-[#4d724d]">
                    Registration is available through our website. Visit the Registration page to secure your spot.
                    Early bird registration ends on September 30, 2025.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#d3e4c5] overflow-hidden p-6 shadow-sm">
                <div className="relative">
                  <h3 className="text-lg font-medium text-[#1a2e1a] mb-2">How can I submit a paper?</h3>
                  <p className="text-[#4d724d]">
                    You can submit your paper through our online submission system. Visit the Submission page for
                    detailed guidelines and templates. The submission deadline is September 15, 2025.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#d3e4c5] overflow-hidden p-6 shadow-sm">
                <div className="relative">
                  <h3 className="text-lg font-medium text-[#1a2e1a] mb-2">Will sessions be recorded?</h3>
                  <p className="text-[#4d724d]">
                    Yes, all keynote presentations and panel discussions will be recorded and available to registered
                    participants for 30 days after the event. Some interactive workshops may not be recorded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2e1a] mb-6">Find Us</h2>
              <div className="h-1 w-20 bg-[#4d724d] mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="bg-[#edf6e1] rounded-3xl overflow-hidden shadow-sm">
              <div className="relative h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9376366079!2d100.55990807495936!3d13.722995186959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2b72c78175%3A0xbe0e5ef798f39b1e!2sQueen%20Sirikit%20National%20Convention%20Center!5e0!3m2!1sen!2sth!4v1682345678901!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#1a2e1a]">Queen Sirikit National Convention Center</h3>
                  <p className="text-[#4d724d]">Ratchadaphisek Road, Bangkok 10110, Thailand</p>
                </div>
                <a
                  href="https://goo.gl/maps/JQJKsZ8JZ6Y2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#4d724d] hover:bg-[#3c5c3c] text-white px-6 py-3 rounded-full transition-colors"
                >
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
