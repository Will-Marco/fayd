import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";
import { Button } from "../ui/button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      <section
        id="#"
        className="relative w-full h-[90vh] md:h-[50vh] flex items-center justify-center text-white"
      >
        <CustomImage
          src="/images/hero-bg/hero-bg-w_1400.png"
          alt="Beautiful lake and mountains"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 430px) 100vw, (max-width: 768px) 50vw, 1400px"
          srcSet={`
            /hero-bg-w_200.png 200w,
            /hero-bg-w_351.png 351w,
            /hero-bg-w_462.png 462w,
            /hero-bg-w_557.png 557w,
            /hero-bg-w_646.png 646w,
            /hero-bg-w_720.png 720w,
            /hero-bg-w_790.png 790w,
            /hero-bg-w_858.png 858w,
            /hero-bg-w_920.png 920w,
            /hero-bg-w_976.png 976w,
            /hero-bg-w_1023.png 1023w,
            /hero-bg-w_1084.png 1084w,
            /hero-bg-w_1138.png 1138w,
            /hero-bg-w_1186.png 1186w,
            /hero-bg-w_1235.png 1235w,
            /hero-bg-w_1277.png 1277w,
            /hero-bg-w_1328.png 1328w,
            /hero-bg-w_1371.png 1371w,
            /hero-bg-w_1390.png 1390w,
            /hero-bg-w_1400.png 1400w
          `}
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
    </>
  );
}
