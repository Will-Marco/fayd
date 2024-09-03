import { CreditCard, FileText, Gem, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import InfoCard from "../Info-card";

export default function Info() {
  const t = useTranslations("info");

  const cards = [
    <Gem key={1} size={40} />,
    <MessageSquare key={2} size={40} />,
    <CreditCard key={3} size={40} />,
    <FileText key={4} size={35} />,
  ];

  return (
    <div className="bg-orange-500 px-4 md:py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
        {cards.map((item: JSX.Element, idx: number) => (
          <InfoCard key={idx} text={t(`card${idx + 1}`)} icon={item} />
        ))}
      </div>
    </div>
  );
}
