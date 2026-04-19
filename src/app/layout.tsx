import type { Metadata } from "next";
import { Asap, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const asap = Asap({
  subsets: ["latin", "vietnamese"],
  variable: "--font-asap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HelpMe | Sinh mệnh khẩn cấp",
  description:
    "HelpMe giúp truy xuất thông tin y tế khẩn cấp qua nhận diện khuôn mặt, NFC và mã QR để giữ trọn thời gian vàng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${nunito.variable} ${asap.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
