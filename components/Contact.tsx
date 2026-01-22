// components/Contact.tsx
import {  PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      {/* Quote */}
      <p className="italic text-gray-500 mb-8">
        "You are beautiful just the way you are." – Xiao Yuan
      </p>

      {/* Contact Info */}
      <div className="flex flex-col gap-3 items-center">
        <p className="flex items-center gap-2 text-gray-700">
          💌
          <a href="mailto:xiaoyuan.drhorse@gmail.com" className="hover:underline">xiaoyuan.drhorse@gmail.com</a>
        </p>

        <p className="flex items-center gap-2 text-gray-700">
          <PhoneIcon className="w-5 h-5 text-indigo-500" />
          <a href="tel:+959899130317" className="hover:underline">+959 899 130 317</a>
        </p>

        <p className="flex items-center gap-2 text-gray-700">
          <GlobeAltIcon className="w-5 h-5 text-indigo-500" />
          <a href="https://xiaoyuanlv.com" className="hover:underline">xiaoyuanlv.com</a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/xiaoyuan31" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 flex items-center gap-1">
          GitHub
        </a>
        <a href="https://linkedin.com/in/seintseintthu" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 flex items-center gap-1">
         LinkedIn
        </a>
        <a href="https://x.com/xiaoyuanlv" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 flex items-center gap-1">
          Twitter
        </a>
      </div>
    </section>
  );
}
