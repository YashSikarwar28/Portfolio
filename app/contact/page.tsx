"use client";

import { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactPageStyles } from "@/public/dummyStyles";
import { Boxes } from "../components/ui/background-boxes";

export default function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focussed, setFocussed] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = "UbidvX5cPjqmiUytt";
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templeteParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    const serviceId = "service_w4hd0g7";
    const templateId = "template_cbb27nw";

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS service or template ID not configured.");
      }
      await emailjs.send(serviceId, templateId, templeteParams);
      setformData({ name: "", email: "", subject: "", message: "" });
      setFocussed(null);
      alert("Message sent.");
    } catch (error) {
      console.log("EmailJS error : ", error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getLabelClasses = (fieldName: string) => {
    const baseClass = contactPageStyles.formLabelBase;
    const foucssedClass =
      focussed === fieldName || formData[fieldName as keyof typeof formData]
        ? contactPageStyles.formLabelFocused
        : contactPageStyles.formLabelUnfocused;

    return `${baseClass} ${foucssedClass}`;
  };

  return (
    <div className={contactPageStyles.pageContainer}>
      <div className={contactPageStyles.contentContainer}>
        <div className={contactPageStyles.formOuterContainer}>
          <div className={contactPageStyles.backgroundOverlay} />
          <Boxes />

          <div className={contactPageStyles.headerContainer}>
            <h1 className={contactPageStyles.headerTitle}>Get in Touch</h1>
            <p className={contactPageStyles.headerSubtitle}>
              Have a project in mind or just want to say hi? I&apos;d love to
              hear from you.
            </p>
          </div>

          <div className={contactPageStyles.contactMethodsGrid}>
            <a
              href="mailto:yashsikarwar028@gmail.com"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Email</p>
                <p className={contactPageStyles.contactValue}>hello@Yash.ai</p>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Twitter</p>
                <p className={contactPageStyles.contactValue}>@YashzzTwt</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className={contactPageStyles.formContainer}
          >
            <div className={contactPageStyles.formGrid}>
              {/* Name Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handlechange}
                  onFocus={() => setFocussed("name")}
                  onBlur={() => setFocussed(null)}
                  className={contactPageStyles.formInput}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className={getLabelClasses("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handlechange}
                  onFocus={() => setFocussed("email")}
                  onBlur={() => setFocussed(null)}
                  className={contactPageStyles.formInput}
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="email" className={getLabelClasses("email")}>
                  Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handlechange}
                onFocus={() => setFocussed("subject")}
                onBlur={() => setFocussed(null)}
                className={contactPageStyles.formInput}
                placeholder="Project Collaboration"
                required
              />
              <label htmlFor="subject" className={getLabelClasses("subject")}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handlechange}
                onFocus={() => setFocussed("message")}
                onBlur={() => setFocussed(null)}
                rows={6}
                className={contactPageStyles.formTextarea}
                placeholder="Tell me about your project..."
                required
              />
              <label htmlFor="message" className={getLabelClasses("message")}>
                Message
              </label>
            </div>

            <div className={contactPageStyles.submitButtonContainer}>
              <button
                type="submit"
                className={contactPageStyles.submitButton}
                disabled={sending}
                aria-busy={sending}
              >
                <span className={contactPageStyles.submitButtonText}>
                  {sending ? "Sending..." : "Send Message"}

                  <svg
                    className={contactPageStyles.submitButtonIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

        <p className={contactPageStyles.alternativeText}>
          Prefer to schedule a call?{" "}
          <a href="#" className={contactPageStyles.alternativeLink}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            repellendus!
          </a>
        </p>
      </div>
    </div>
  );
}
