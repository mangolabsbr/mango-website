import SendEmailForm from "@/components/form/send-email-form";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactPage = () => {
  return (
    <main className="page-layout pt-20">
      <h1 className="text-3xl font-medium font-serif text-center mb-8">
        Send us a message!
      </h1>
      <SendEmailForm className="container mx-auto px-8 max-w-[600px]" />
      {/* <h1 className="text-3xl font-medium font-serif text-center mt-20 mb-8">Or find me on social media:</h1>
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            className="text-orange-900 hover:text-orange-500 active:text-orange-500"
            href="https://wa.me/5531999949263"
            target="_blank"
          >
            <AiOutlineWhatsApp className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-900 hover:text-orange-500 active:text-orange-500"
            href="https://github.com/tchesa"
            target="_blank"
          >
            <FiGithub className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-900 hover:text-orange-500 active:text-orange-500"
            href="https://twitter.com/tchesa"
            target="_blank"
          >
            <FiTwitter className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-900 hover:text-orange-500 active:text-orange-500"
            href="https://www.linkedin.com/in/cesar-lima-03349665/"
            target="_blank"
          >
            <FiLinkedin className="text-3xl" />
          </Link>
        </li>
      </ul> */}
    </main>
  );
};

export default ContactPage;
