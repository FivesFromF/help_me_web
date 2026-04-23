import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelpMe Admin Dashboard",
  description:
    "Bảng điều khiển quản trị HelpMe để theo dõi người dùng, hồ sơ và nhật ký truy cập dữ liệu y tế.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
