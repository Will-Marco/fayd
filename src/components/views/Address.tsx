import { Mail, MapPin, Phone, User } from "lucide-react";
import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";

export default function Address() {
  const t = useTranslations("address");
  const contactDetails = [
    {
      icon: MapPin,
      text: t("address"),
    },
    { icon: Phone, text: "+998 (94) 815-56-66" },
    { icon: Mail, text: "info@fayd.uz" },
    { icon: User, text: "Director: Zhuratkhuzaev Saidyusuf" },
  ];

  return (
    <section
      id="contact"
      className="container mx-auto px-4 md:py-8 flex max-md:flex-col justify-center gap-4"
    >
      <div className="md:w-1/2 lg:w-1/3 p-6">
        <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
        <p className="mb-6">{t("description")}</p>
        <div className="space-y-4">
          {contactDetails.map((detail, idx: number) => (
            <div key={idx} className="flex items-center">
              <detail.icon color="#2563eb" size={20} />
              <span className="ml-2">{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-[70%] h-fit overflow-hidden rounded-xl shadow-lg">
          <CustomImage
            alt="map"
            src="/images/address.jpg"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
