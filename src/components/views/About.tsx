import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";

export default function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 flex max-lg:flex-col gap-4"
    >
      <div className="lg:w-1/2">
        <CustomImage
          alt="map"
          src="/images/about.png"
          width={0}
          height={0}
        />
      </div>
      <div className="lg:w-1/2 max-lg:pt-4 flex flex-col justify-center gap-2">
        <h1 className="mb-2 text-3xl font-semibold italic">{t("title")}</h1>
        {t("description")
          .split("\n")
          .map((item: string, idx: number) => (
            <p key={idx} className="mb-6 md:w-2/3">
              {item}
            </p>
          ))}
      </div>
    </section>
  );
}
