import { useTranslations } from "next-intl";
import Link from "next/link";
import CustomImage from "./CustomImage";

interface PropsType {
  image: string;
  city: string;
  description: string;
}

export default function ToursCard({ image, city, description }: PropsType) {
  const t = useTranslations("tours");
  return (
    <div className="relative h-[60vh] overflow-hidden rounded-2xl shadow-lg bg-white">
      <CustomImage alt={city} src={image} className="object-cover" priority fill/>
      <div className="p-4 absolute bottom-0 flex flex-col justify-end text-white bg-gradient-to-t from-black to-transparent glassmorphism z-10">
        <h2 className="font-bold text-xl mb-2 capitalize">{city}</h2>
        <p className="text-base mb-4 line-clamp-2">{description}</p>

        <Link
          href="#"
          className="flex items-center justify-center gap-6 bg-white border border-gray-300 text-foreground font-bold py-2 px-4 rounded hover:bg-gray-100"
        >
          <span className="bg-teal-500 text-white font-bold py-2 px-4 rounded">
            Payme
          </span>
          {t("button")}
        </Link>
      </div>
    </div>
  );
}
