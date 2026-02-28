"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { DiGithub } from "react-icons/di";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    value: "nareshksee12@gmail.com",
    link: "mailto:nareshksee12@gmail.com",
  },
  {
    icon: <DiGithub className="w-6 h-6" />,
    title: "GitHub",
    value: "naresh9810",
    link: "https://github.com/nareshkhatri98",
  },
  {
    icon: <FaLinkedinIn className="w-6 h-6" />,
    title: "LinkedIn",
    value: "Naresh Khatri",
    link: "https://www.linkedin.com/in/naresh9810/",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    value: "9844703217",
    link: "tel:+9779844703217",
  },
  {
    icon: <FaMapMarkedAlt className="w-6 h-6" />,
    title: "Location",
    value: "Remote",
    link: "#",
  },
];

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const validate = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (fields.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};

const ContactSection = () => {
  const inputBase =
    "px-4 py-3.5 bg-slate-800 outline-none w-full rounded-md text-gray-200 placeholder-gray-400 transition-colors duration-200 focus:ring-2 focus:ring-indigo-500";

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...fields, [name]: value };
    setFields(updated);

    // Live re-validate if field was already touched
    if (touched[name as keyof FormFields]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormFields],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormFields],
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mark all as touched
    setTouched({ name: true, email: true, subject: true, message: true });

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before sending.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9bbfd842-e12c-4d2f-83c5-82c38c2e3bd0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        setFields({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTouched({});
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong 😢");
    } finally {
      setIsLoading(false);
    }
  };

  const fieldError = (key: keyof FormFields) =>
    touched[key] && errors[key] ? (
      <p className="text-red-400 text-sm mt-1 ml-1">{errors[key]}</p>
    ) : null;

  const inputClass = (key: keyof FormFields) =>
    `${inputBase} ${
      touched[key] && errors[key]
        ? "ring-2 ring-red-500"
        : touched[key] && !errors[key]
        ? "ring-2 ring-green-500"
        : ""
    }`;

  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Section */}
        <div>
          <h2 className="py-3 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-gray-300">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 mb-10">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div data-aos ="fade-right" className="space-y-5">
            {contactInfo.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 text-gray-300"
              >
                <div className="h-12 w-12 rounded-full grid place-items-center bg-white/5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div data-aos="fade-left">
          <form
            onSubmit={onSubmit}
            noValidate
            className="bg-slate-900 px-6 py-8 rounded-lg"
          >
            <div className="my-4">
              <input
                name="name"
                value={fields.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Name"
                className={inputClass("name")}
              />
              {fieldError("name")}
            </div>

            <div className="my-4">
              <input
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className={inputClass("email")}
              />
              {fieldError("email")}
            </div>

            <div className="my-4">
              <input
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Subject"
                className={inputClass("subject")}
              />
              {fieldError("subject")}
            </div>

            <div className="my-4">
              <textarea
                name="message"
                value={fields.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Message"
                rows={5}
                className={`${inputClass("message")} resize-none`}
              />
              {fieldError("message")}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 transition-all duration-200"
            >
              <LuSend size={20} />
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;