"use client";

import { motion } from "framer-motion";
import {t} from '../../lib/language';
import { useLanguage } from '../../lib/LanguageContext';
import InfoCard from "./InfoCard";
import { MdFamilyRestroom } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import DropDownMenu from "./Drop-down-menu";


export default function ContactContainer() {
  const { lang } = useLanguage();
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-transparent backdrop-blur-md p-6 pt-30"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 bg-opacity-80 rounded-3xl shadow-lg p-8 max-w-7xl w-full text-center gap-6 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">{t('contact.title', lang)}</h1>
        <div className="flex flex-col gap-10 md:flex-row">
          <InfoCard
           titre="Customer Support"
            desc="Visit your local customer care page for all product-related questions and online shop support."
            icon={<MdFamilyRestroom className="text-blue-400 text-4xl" />}
          />
           <InfoCard
           titre="Support for healthcare professionals"
            desc="Find out all about the options available for thecnical support and other forms of assistance."
            icon={<FaUserDoctor className="text-blue-400 text-4xl" />}
          />
        </div>
        <div className="flex flex-col gap-10 w-full  mt-8">
          <div className="flex flex-col items-start gap-4 w-full w-full">
            <h2 className="text-white text-2xl font-semibold">Company contacts</h2>
            <DropDownMenu title="Média Contact" desc="Find all news-related information in the news center.To contact our team on press-related matters – e.g. media contacts, press releases, biographies, pictures and video downloads – see here our media contacts.To download photos and videos, visit our media library."/>
            <DropDownMenu title="Investor Contacts" desc="Find all investor-related information in our Investor Relations section.To contact our team on investor matters, visit our Investor Relations contacts page."/>
            <DropDownMenu title="Consumer Support" desc="Visit your local customer care page for all product-related questions and online shop support"/>
            <DropDownMenu title="Support for healthcare professionals" desc="Find out all about the options available for thecnical support and other forms of assistance."/>
          </div>
          <div className="flex flex-col items-start gap-4 w-full w-full">
            <h2 className="text-white text-2xl font-semibold">Sustainability and Innovation contacts</h2>
            <DropDownMenu title="Sustainability" desc="If you have any questions about sustainability at Philips, please e-mail us at philips.sustainability@philips.com"/>
            <DropDownMenu title="Research" desc="If you have any questions about research at Philips, please e-mail us at cto.communications@philips.com"/>
            <DropDownMenu title="Intellectual Property and Standards" desc="If you have any questions about intellectual property and standards at Philips, please e-mail us at info.ips@philips.com"/>
            <DropDownMenu title="Philips Engineering Solutions" desc="If you have any questions about Philips Engineering Solutions, please contact us via our website"/>
          </div>
          <div className="flex flex-col items-start gap-4 w-full w-full">
            <h2 className="text-white text-2xl font-semibold">Interested in joining us?</h2>
            <DropDownMenu title="careers" desc="Visit our Careers site for a list of current job opportunities."/>
            <DropDownMenu title="Suppliers" desc="Visit our Suppliers site for detailed information and partnering opportunities."/>
          </div>
        </div>
      </motion.div>
    </div>
  );
}