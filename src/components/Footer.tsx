import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
    <section className="bg-slate-100 h-[80px] text-black   font-medium flex flex-col md:flex-row justify-between px-10 items-center">
      <div className="">
        Developed By Kunj Dave
      </div>
      <div className="flex justify-evenly items-center w-[30%] md:w-[12%] mt-2 md:mt-0">
        <Link href={"https://github.com/kunj3740/"} target="_blank">
          <Github size={20} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/kunjdave/"}
          target="_blank"
        >
          <Linkedin size={20} />
        </Link>
        <Link href={"mailto:kunjdave694@gmail.com"} target="_blank">
          <Mail size={20} />
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Footer;