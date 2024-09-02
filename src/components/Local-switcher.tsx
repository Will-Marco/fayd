"use client";

import { EnFlag, RuFlag, UzFlag } from "@/assets/Icons";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Option {
  value: string;
  label: string;
  image: FC;
}

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <Select defaultValue={localActive} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px] text-foreground focus:ring-transparent">
        <SelectValue
          placeholder={
            <div className="px-2 flex items-center gap-2">
              <Languages /> Lang
            </div>
          }
        ></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item: Option) => (
            <SelectItem key={item.value} value={item.value}>
              <div className="flex items-center gap-2">
                <item.image />
                {item.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const options = [
  { value: "en", label: "Eng", image: EnFlag },
  { value: "ru", label: "Рус", image: RuFlag },
  {
    value: "uz",
    label: "O'zb",
    image: UzFlag,
  },
];
