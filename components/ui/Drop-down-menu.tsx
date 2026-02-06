"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownMenuProps = {
    title: string;
    desc: string;
};

export default function DropDownMenu({ title, desc }: DropDownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();

    return (
        <div className="w-full mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/10">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white"
            >
                <span className="text-lg font-semibold">{title}</span>
                <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"
                >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 text-white/90 text-base leading-relaxed text-left">
                            {desc}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}