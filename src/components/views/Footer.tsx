"use client";

import { LucideProps, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "use-intl";

interface PropsType {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LucideProps> & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  subtext?: string;
  link?: string;
}

const ContactItem: FC<PropsType> = ({ Icon, text, subtext, link }) => (
  <div className="flex items-center space-x-2">
    <Icon color="#2563eb" size={20} />
    <div>
      {link ? (
        <a href={link} className="font-bold hover:underline">
          {text}
        </a>
      ) : (
        <span className="font-bold">{text}</span>
      )}
      {subtext && <p className="text-sm text-gray-600">{subtext}</p>}
    </div>
  </div>
);

const Footer: FC = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="FAYD Logo"
            width={150}
            height={50}
          />
          <p className="text-gray-600 max-w-xs">{t("text")}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t("navigation")}</h3>
          <ul className="space-y-2 text-gray-700">
            {["#", "#tours", "#about", "#contacts"].map((item, idx) => (
              <li key={idx}>
                <Link href={item} className="hover:underline">
                  {t(`link-${idx + 1}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t("contacts")}</h3>
          <ContactItem
            Icon={Phone}
            text="+998 (94) 815-56-66"
            subtext={t("request")}
            link="tel:+998948155666"
          />
          <ContactItem
            Icon={Phone}
            text="+998 (99) 827-88-99"
            subtext={t("request")}
            link="tel:+998998278899"
          />
          <ContactItem
            Icon={Mail}
            text="info@fayd.uz"
            subtext={t("write")}
            link="mailto:info@fayd.uz"
          />
          <ContactItem
            Icon={MapPin}
            text={t("address")}
            subtext={t("sub-address")}
          />
        </div>
      </div>

      <div className="border-t mt-8 pt-4 px-4">
        <div className="container mx-auto flex max-sm:flex-col gap-2  justify-between items-center text-gray-600 text-sm">
          <p>© 2024 Fayd.uz. {t("copy")}.</p>
          <p>
            {t("development")} -{" "}
            <Link href="https://www.craftsoft.uz" className="hover:underline">
              Craftsoft.uz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
