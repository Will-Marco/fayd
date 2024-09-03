import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";

export default function About() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="container md:h-[80vh] mx-auto px-4 md:py-8 flex max-md:flex-col gap-4"
    >
      <div className="md:w-1/2">
        <CustomImage
          alt="map"
          src="/images/about.png"
          width={0}
          height={0}
          className="max-md:flex max-xl:hidden"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center gap-2">
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
