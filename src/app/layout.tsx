import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="vi" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
