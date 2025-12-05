import Button from "@/components/form/ui/button";
import PortfolioUpdate from "@/components/shapes/portfolio-update";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

export default async function Home() {
  return (
    <main className="py-4 mb-20 page-layout">
      <div className="flex">
        <div className="pt-[120px] max-w-[500px]">
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            Apps for daily life.
          </span>
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            Trusted by millions.
          </span>
          <span className="font-serif text-5xl text-orange-900 text-shadow-orange-50 block">
            Crafted by humans.
          </span>
          <span className="text-xl bg-orange-50 mt-10 block">
            At Mango Labs, we create applications that millions of users trust
            and enjoy. From intelligent tools and wellness companions to
            entertaining mobile experiences, our PURPOSE is to transform
            everyday necessities into digital products that are user-friendly,
            reliable, and designed to deliver.
          </span>
        </div>
        <div className="grow lg:relative">
          <PortfolioUpdate
            width={600}
            height={600}
            className="hidden md:block opacity-20 lg:opacity-100 absolute top-[10px] lg:top-[-75px] right-0 -z-20"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href="/contact">
          <Button type="button">
            <FiMail className="inline mr-2" />
            Get in touch
          </Button>
        </Link>
      </div>
    </main>
  );
}
