"use client";
import { motion } from "framer-motion";

export default function ContactContainer() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-transparent backdrop-blur-md p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        <div className=" p-8 rounded-2xl shadow-lg flex items-center gap-6 bg-white/30">
            <form className="bg-white/90 dark:bg-neutral-900 shadow-lg rounded-2xl p-6 w-full max-w-md border border-neutral-200 dark:border-neutral-800">
                <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" required />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows={4} required></textarea>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow transition-colors duration-200" type="submit">Send Message</button>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2352096989!2d2.2264202768160004!3d48.872792499692444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664dacb29b6e1%3A0x9f5d18fb206943cd!2sPhilips%20France!5e0!3m2!1sfr!2sfr!4v1770135640541!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" className="rounded-xl"></iframe>
        </div>
    </motion.div>
  );
}