/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import ReasonCard from "../Reason-card ";

export default function Reasons() {
  const t = useTranslations("reasons");

  const cards = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <section className="container md:h-[40vh] mx-auto px-4 md:px-6 py-4">
      <div className="px-4 md:px-6 py-8 flex flex-col items-center gap-4 overflow-hidden rounded-2xl shadow-lg bg-white">
        <h1 className="text-center text-3xl font-semibold italic">
          {t("title")}
        </h1>
        <p className="mb-6 md:w-1/2 text-center">{t("description")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card: number) => (
            <ReasonCard
              key={card}
              icon={
                <img
                  src={`/images/reasons/${card}.png`}
                  width={90}
                  loading="lazy"
                  alt="reasons-icon"
                />
              }
              title={t(`card-${card}`)}
              description={t(`card-description-${card}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
