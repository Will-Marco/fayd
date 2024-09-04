import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fayd - Fly after your dreams",
  icons: "/images/favicon.ico",
  keywords:
    "Uzbekistan, Central Asia, travel, tour, tour to Uzbekistan, travel agency, tour operator, Kazakhstan, Turkmenistan, Kyrgyzstan, Tajikistan, Samarkand, Bukhara, Khiva, Aral sea",
  description:
    "Planning a trip to Uzbekistan and Central Asia? Check the best tours to Uzbekistan both on group and individual basis. Check prices, get advice and explore the various programs for tourists with any interest.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className + " bg-gray-50"}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
