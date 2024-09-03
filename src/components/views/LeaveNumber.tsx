import { useTranslations } from "next-intl";
import CustomImage from "../CustomImage";
import { Button } from "../ui/button";

export default function LeaveNumber() {
  const t = useTranslations("leave-number");
  return (
    <div className="container md:h-[40vh] mx-auto px-4 md:px-6 py-4">
      <div className="px-4 md:px-6 py-8 flex max-md:flex-col-reverse items-center gap-4 overflow-hidden rounded-2xl shadow-lg bg-white">
        <div className="md:w-1/2 h-64 flex relative overflow-hidden">
          <CustomImage
            alt="map"
            src="/images/leave-number/travel.png"
            width={0}
            height={0}
            className="max-md:flex max-xl:hidden"
          />
          <CustomImage
            alt="travel"
            src="/images/leave-number/map.png"
            width={0}
            height={0}
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 z-10">
          <h1 className="text-3xl font-semibold italic">{t("slug")}</h1>
          <p className="mb-6 md:w-2/3">{t("description")}</p>
          <Button className="max-md:w-fit w-1/2 bg-orange-500 hover:bg-orange-600 text-xl">
            {t("button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
