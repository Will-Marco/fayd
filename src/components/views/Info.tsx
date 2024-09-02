import { CreditCard, FileText, Gem, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import InfoCard from "../Info-card";

export default function Info() {
  const t = useTranslations("info");

  const cards = [
    <Gem size={30} />,
    <MessageSquare size={30} />,
    <CreditCard size={30} />,
    <FileText size={30} />,
  ];

  return (
    <div className="bg-orange-500 px-4 md:py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
        {cards.map((item: JSX.Element, idx: number) => (
          <InfoCard text={t(`card${idx + 1}`)} icon={item} />
        ))}
      </div>
    </div>
  );
}
