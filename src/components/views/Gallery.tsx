"use client";

import { useTranslations } from "next-intl";
import GalleryImages from "../Gallery-images";

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section className="container m-auto px-4 md:px-6 py-8 flex flex-col items-center gap-4">
      <h1 className="text-center text-3xl font-semibold italic">
        {t("title")}
      </h1>
      <p className="mb-6 md:w-2/3 text-center">{t("description")}</p>

      <GalleryImages />
    </section>
  );
}
