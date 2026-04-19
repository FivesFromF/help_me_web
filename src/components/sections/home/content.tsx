import {
  ContactlessIcon,
  DeviceMobileIcon,
  FirstAidIcon,
  HeartbeatIcon,
  HomeIcon,
  IdentificationCardIcon,
  ScanFaceIcon,
} from "../../homepage-icons";

import type { FeatureCard, Faq, LinkItem, NavLink, Step } from "./types";

export const navLinks: NavLink[] = [
  { href: "#top", label: "Trang chủ", icon: <HomeIcon className="size-7" />, active: true },
  { href: "#how-it-works", label: "Cách sử dụng", icon: <DeviceMobileIcon className="size-7" /> },
  { href: "#about", label: "Về HelpMe", icon: <HeartbeatIcon className="size-7" /> },
];

export const featureCards: FeatureCard[] = [
  {
    title: "AI Nhận diện khuôn mặt",
    description:
      "Chỉ cần hướng camera vào nạn nhân. AI tự động nhận diện và truy xuất thông tin y tế ngay lập tức, không cần chạm hay thao tác phức tạp.",
  },
  {
    title: "Thẻ NFC",
    description:
      "Tích hợp chip NFC vào phụ kiện như thẻ, vòng tay hoặc móc khóa. Chỉ cần một chạm từ điện thoại của người hỗ trợ để hiển thị hồ sơ y tế.",
  },
  {
    title: "Mã QR",
    description:
      "Tích hợp mã QR lên màn hình khóa, mũ bảo hiểm hoặc thẻ cá nhân để thông tin sinh tồn của bạn luôn sẵn sàng được quét.",
  },
];

export const steps: Step[] = [
  {
    number: "1",
    title: "Đăng ký",
    description: "Nhập nhóm máu, bệnh nền và số liên lạc khẩn cấp.",
    icon: <DeviceMobileIcon className="size-16 text-[var(--hm-orange)]" />,
  },
  {
    number: "2",
    title: "Quét mặt",
    description: "Cài đặt Face ID để AI có thể nhận diện bạn.",
    icon: <ScanFaceIcon className="size-16 text-[var(--hm-orange)]" />,
  },
  {
    number: "3",
    title: "Kết nối",
    description: "Đồng bộ tài khoản với thẻ chạm NFC hoặc mã QR.",
    icon: <ContactlessIcon className="size-16 text-[var(--hm-orange)]" />,
  },
  {
    number: "4",
    title: "Nhận diện",
    description: "Người hỗ trợ quét nhanh bằng camera điện thoại.",
    icon: <IdentificationCardIcon className="size-16 text-[var(--hm-orange)]" />,
  },
  {
    number: "5",
    title: "Ứng cứu",
    description: "Nhấn nút gọi 115 hoặc báo tin ngay cho gia đình bạn.",
    icon: <FirstAidIcon className="size-16 text-[var(--hm-orange)]" />,
  },
];

export const faqs: Faq[] = [
  {
    question: "Dữ liệu cá nhân và hồ sơ y tế của tôi có được bảo mật không?",
    answer:
      "Có. HelpMe chỉ hiển thị đúng lớp thông tin cần thiết cho tình huống khẩn cấp, còn dữ liệu nhạy cảm được quản lý bằng phân quyền và nhật ký truy cập.",
  },
  {
    question: "Nếu tôi thay đổi ngoại hình như đeo kính hoặc đổi kiểu tóc, AI có nhận diện được không?",
    answer:
      "Có thể. Hệ thống được thiết kế để ưu tiên các đặc trưng khuôn mặt ổn định, đồng thời bạn vẫn có thêm NFC và mã QR như những phương án dự phòng.",
  },
  {
    question: "Tôi có thể tạo hồ sơ HelpMe cho người thân lớn tuổi được không?",
    answer:
      "Có. Đây là một trong những tình huống HelpMe đặc biệt phù hợp vì hồ sơ có thể được chuẩn bị sẵn trước khi khẩn cấp thật sự xảy ra.",
  },
  {
    question: "Mã QR và thẻ NFC sẽ hiển thị toàn bộ bệnh án riêng tư của tôi?",
    answer:
      "Không. Chúng được dùng để xác định đúng hồ sơ và mở luồng truy xuất phù hợp. Mục tiêu là giúp lực lượng hỗ trợ thấy thông tin sống còn thật nhanh, không phải công khai mọi dữ liệu riêng tư.",
  },
];

export const quickLinks: LinkItem[] = [
  { href: "#top", label: "Trang chủ" },
  { href: "#about", label: "Đối tượng sử dụng" },
  { href: "#how-it-works", label: "Hướng dẫn 3 bước" },
  { href: "#faq", label: "Câu hỏi thường gặp" },
];

export const legalLinks: LinkItem[] = [
  { href: "#footer", label: "Điều khoản sử dụng" },
  { href: "#footer", label: "Chính sách bảo mật" },
  { href: "#footer", label: "Cẩm nang sơ cứu" },
  { href: "#footer", label: "Cửa hàng thẻ NFC" },
];