import { tours } from "@/constants";
import { useTranslations } from "next-intl";
import ToursCard from "../Tours-card";

export default function Tours() {
  const t = useTranslations("tours");

  return (
    <section
      id="tours"
      className="container m-auto px-4 md:px-6 py-8 flex flex-col items-center gap-4"
    >
      <h1 className="text-center text-3xl font-semibold italic">{t("slug")}</h1>
      <p className="mb-6 md:w-2/3 text-center">{t("description")}</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {tours.map((item: string, idx: number) => (
          <ToursCard
            key={idx}
            city={t(item)}
            image={`/images/tours/${item}.jpg`}
            description={t(`${item}-description`)}
          />
        ))}
      </div>
    </section>
  );
}
