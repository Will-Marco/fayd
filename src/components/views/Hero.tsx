import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";
import { Button } from "../ui/button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
      <section
        id="#"
        className="mt-[5rem] relative w-full h-[90vh] md:h-[70vh] flex items-center justify-center text-white"
      >
        <CustomImage
          src="/images/hero-bg.jpg"
          alt="Beautiful lake and mountains"
          className="object-cover"
          fill
          priority
        />
        <div className="max-w-[95%] md:max-w-[90vw] lg:max-w-[80vw] xl:max-w-[70vw] absolute text-center p-4 md:px-10 md:py-8 lg:py-10 rounded-2xl glassmorphism">
          <h1 className="text-4xl md:text-6xl font-bold">{t("slug")}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-[1rem] font-bold p-6 rounded-lg">
              {t("button")}
            </Button>
            <a
              href="tel:+998998278899"
              className="flex items-center gap-2 bg-white text-blue-600 text-[1rem] font-bold py-3 px-6 rounded-lg"
            >
              <Phone size={16} />
              +998 (99) 827-88-99
            </a>
          </div>
        </div>
      </section>
  );
}
