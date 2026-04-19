import type { ReactNode } from "react";
import Image from "next/image";

import {
  AmbulanceIcon,
  AppleMark,
  ArrowUpIcon,
  CaretDownIcon,
  CheckDoubleIcon,
  ClockCountdownIcon,
  ClockIcon,
  ContactlessIcon,
  DeviceMobileIcon,
  EyeClosedIcon,
  ExternalArrowIcon,
  FacebookIcon,
  FirstAidIcon,
  GooglePlayMark,
  HandshakeIcon,
  HeartbeatIcon,
  HeartbeatLine,
  HomeIcon,
  IdentificationCardIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PersonCircleIcon,
  PhoneBreakIcon,
  PhoneCallIcon,
  PlayTriangleIcon,
  ScanFaceIcon,
  YoutubeIcon,
} from "../homepage-icons";

type NavLink = {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
};

type FeatureCard = {
  title: string;
  description: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type Faq = {
  question: string;
  answer: string;
};

type LinkItem = {
  href: string;
  label: string;
};

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const navLinks: NavLink[] = [
  { href: "#top", label: "Trang chủ", icon: <HomeIcon className="size-7" />, active: true },
  { href: "#how-it-works", label: "Cách sử dụng", icon: <DeviceMobileIcon className="size-7" /> },
  { href: "#about", label: "Về HelpMe", icon: <HeartbeatIcon className="size-7" /> },
];

const featureCards: FeatureCard[] = [
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

const steps: Step[] = [
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

const faqs: Faq[] = [
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

const quickLinks: LinkItem[] = [
  { href: "#top", label: "Trang chủ" },
  { href: "#about", label: "Đối tượng sử dụng" },
  { href: "#how-it-works", label: "Hướng dẫn 3 bước" },
  { href: "#faq", label: "Câu hỏi thường gặp" },
];

const legalLinks: LinkItem[] = [
  { href: "#footer", label: "Điều khoản sử dụng" },
  { href: "#footer", label: "Chính sách bảo mật" },
  { href: "#footer", label: "Cẩm nang sơ cứu" },
  { href: "#footer", label: "Cửa hàng thẻ NFC" },
];

function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cx("relative", className)}>
      <Image
        alt="HelpMe"
        src="/helpme-logo-local.png"
        width={432}
        height={267}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

function NavPill({ href, icon, label, active = false }: NavLink) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[1.55rem] font-extrabold transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2",
        active
          ? "bg-[var(--hm-soft)] text-[var(--hm-orange)]"
          : "text-[var(--hm-ink)] hover:bg-[var(--hm-soft)]/70 hover:text-[var(--hm-orange)]",
      )}
    >
      <span className="text-current">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function StoreButton({
  store,
  href,
  border = false,
}: {
  store: "google" | "apple";
  href: string;
  border?: boolean;
}) {
  const label = store === "google" ? "Google Play" : "App Store";
  const icon =
    store === "google" ? (
      <GooglePlayMark className="size-[1.55rem]" />
    ) : (
      <AppleMark className="size-[1.55rem]" />
    );

  return (
    <a
      href={href}
      className={cx(
        "inline-flex h-[50px] items-center gap-3 rounded-[10px] bg-white px-4 text-[1.5rem] font-extrabold tracking-[-0.03em] text-[var(--hm-ink)] transition-transform duration-200 hover:-translate-y-0.5",
        border && "border border-[var(--hm-line)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2",
      )}
    >
      <span className="flex items-center justify-center text-inherit">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function HeroInfo({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="pt-2">
      <div className="mb-4 flex h-[7.125rem] items-center text-[var(--hm-orange)]">{icon}</div>
      <h3 className="text-[1.5rem] font-extrabold leading-none text-[var(--hm-ink)]">{title}</h3>
      <p className="mt-3 text-[1.25rem] leading-[1.7] text-[var(--hm-muted)]">{description}</p>
    </div>
  );
}

function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cx(
        "relative rounded-[3rem] border-[9px] border-[#cfcfcf] bg-[#f9f9f9] p-3 shadow-[0_28px_60px_-24px_rgba(61,61,61,0.38)]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-b-[1rem] bg-[#1c1c1c]" />
      <div className="relative h-full overflow-hidden rounded-[2.4rem] border border-white/60">
        <Image
          alt={alt}
          src={src}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 42vw, 24vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function StepCard({ number, title, description, icon }: Step) {
  return (
    <article className="flex h-full flex-col items-center rounded-[20px] border border-[var(--hm-line)] bg-white px-7 py-6 text-center">
      <div className="flex h-[104px] items-center justify-center">{icon}</div>
      <p className="mt-2 text-[2rem] font-extrabold text-[var(--hm-line)]">{number}</p>
      <h3 className="mt-3 text-[2rem] font-extrabold leading-none text-[var(--hm-ink)]">{title}</h3>
      <p className="mt-4 max-w-[10rem] text-[1.25rem] leading-[1.55] text-[var(--hm-muted)]">
        {description}
      </p>
    </article>
  );
}

function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="space-y-5">
      <h3 className="text-[2rem] font-extrabold text-white">{title}</h3>
      <ul className="space-y-3 text-[1.25rem] text-white/90">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Homepage() {
  return (
    <main id="top" className="overflow-x-hidden bg-white text-[var(--hm-ink)]">
      <header className="px-4 pt-6 sm:px-6 xl:px-8">
        <div className="mx-auto max-w-[1320px] rounded-[3rem] border border-[var(--hm-line)] bg-white">
          <div className="flex flex-col gap-4 px-4 py-4 lg:h-[100px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <a href="#top" className="block w-[7rem] sm:w-[8rem]">
              <BrandMark />
            </a>

            <nav className="flex flex-wrap items-center gap-2 lg:gap-[6px]">
              {navLinks.map((link) => (
                <NavPill key={link.label} {...link} />
              ))}
            </nav>

            <a
              href="#partner"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--hm-green)] px-6 py-3 text-[1.5rem] font-extrabold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-green)] focus-visible:ring-offset-2"
            >
              <HandshakeIcon className="size-7" />
              <span>Trở thành đối tác</span>
            </a>
          </div>
        </div>
      </header>

      <section className="px-4 pb-4 pt-8 sm:px-6 xl:px-8">
        <div className="mx-auto grid max-w-[1792px] gap-8 xl:grid-cols-[minmax(0,1012px)_minmax(0,828px)] xl:items-center xl:justify-between">
          <div className="pt-4 lg:pl-[3.9rem]">
            <h1 className="max-w-[880px] text-[clamp(3.75rem,5.4vw,6rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--hm-ink)]">
              <span className="block">Tai nạn ngỡ ngàng,</span>
              <span className="block">thông tin y tế</span>
              <span className="block italic text-[var(--hm-orange)]">vẫn luôn sẵn sàng.</span>
            </h1>

            <div className="mt-8 grid gap-8 sm:grid-cols-[minmax(0,466px)_1px_minmax(0,346px)] sm:gap-6 sm:items-start">
              <HeroInfo
                icon={<IdentificationCardIcon className="size-[3.8rem]" />}
                title="Định danh tức thì"
                description="Cung cấp ngay thông tin nhóm máu, dị ứng và bệnh nền qua nhận diện khuôn mặt, QR hoặc thẻ chạm."
              />
              <div className="hidden h-full w-px bg-[var(--hm-line)] sm:block" />
              <HeroInfo
                icon={<AmbulanceIcon className="size-[3.8rem]" />}
                title="Báo tin khẩn cấp"
                description="Tích hợp phím tắt khẩn cấp, thao tác nhanh để gửi tọa độ và tình trạng của bạn đến người thân."
              />
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[100px] bg-[var(--hm-soft)] px-8 py-6">
              <HeartbeatLine className="pointer-events-none absolute bottom-[-2.5rem] right-[-0.5rem] hidden w-[39rem] text-[var(--hm-orange)]/15 lg:block" />
              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                <p className="max-w-[8rem] text-[1.3rem] font-extrabold leading-6 text-[var(--hm-ink)]">
                  Tải HelpMe miễn phí
                </p>
                <div className="flex flex-wrap gap-3">
                  <StoreButton store="google" href="#footer" />
                  <StoreButton store="apple" href="#footer" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[26rem] items-center justify-center xl:min-h-[54rem] xl:justify-end">
            <div className="relative flex w-full max-w-[52rem] items-end justify-center lg:justify-end">
              <PhoneMockup
                src="/iphone-home.png"
                alt="Màn hình ứng dụng HelpMe màu cam"
                priority
                className="relative z-10 aspect-[323/670] w-[14rem] translate-x-6 translate-y-8 rotate-[-12deg] sm:w-[16rem] xl:w-[20rem]"
              />
              <PhoneMockup
                src="/iphone-scan.png"
                alt="Màn hình ứng dụng HelpMe quét nhận diện"
                priority
                className="relative z-20 -ml-4 aspect-[388/803] w-[16rem] rotate-[11deg] sm:w-[19rem] xl:-ml-3 xl:w-[24rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden px-4 py-24 scroll-mt-20 sm:px-6 xl:px-8"
      >
        <PersonCircleIcon className="absolute left-[-12rem] top-8 size-[30rem] text-[var(--hm-soft)] opacity-85" />
        <ClockIcon className="absolute right-[-10rem] top-10 size-[28rem] text-[rgba(0,189,132,0.08)]" />

        <div className="mx-auto max-w-[1717px]">
          <div className="grid gap-16 xl:grid-cols-[minmax(0,962px)_minmax(0,755px)] xl:justify-between">
            <div>
              <h2 className="max-w-[1147px] text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em]">
                Mỗi năm, hàng nghìn chuyện đáng tiếc xảy ra chỉ vì{" "}
                <span className="text-[var(--hm-orange)]">thông tin không đến kịp</span>.
              </h2>

              <div className="mt-16">
                <p className="text-[2rem] font-extrabold text-[var(--hm-orange)]">Vấn đề</p>
                <div className="mt-5 space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-orange)]">
                      <EyeClosedIcon className="size-9" />
                    </div>
                    <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      <span className="font-extrabold">Nạn nhân bất tỉnh</span>, không thể cung cấp nhóm máu hay tiền sử dị ứng.
                    </p>
                  </div>

                  <div className="flex gap-4 border-t border-[var(--hm-line)] pt-6">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-orange)]">
                      <PhoneBreakIcon className="size-9" />
                    </div>
                    <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      Điện thoại vỡ nát hoặc sập nguồn sau va chạm,{" "}
                      <span className="font-extrabold">cắt đứt mọi kênh liên lạc</span>.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-1">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-orange)]">
                      <ClockCountdownIcon className="size-9" />
                    </div>
                    <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      Bác sĩ cấp cứu <span className="font-extrabold">đánh mất &quot;thời gian vàng&quot;</span> để dò hỏi thông tin cơ bản.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 xl:pt-20">
              <h2 className="max-w-[733px] text-left text-[clamp(2.7rem,4.2vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em] xl:ml-auto xl:text-right">
                Và HelpMe ở đây để{" "}
                <span className="text-[var(--hm-green)]">giữ trọn &quot;thời gian vàng&quot;</span>
              </h2>

              <div className="mt-16">
                <p className="text-[2rem] font-extrabold text-[var(--hm-green)]">Giải pháp</p>
                <div className="mt-5 space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                      <CheckDoubleIcon className="size-9" />
                    </div>
                    <p className="max-w-[40rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      HelpMe &quot;lên tiếng&quot; thay bạn, <span className="font-extrabold">truy xuất hồ sơ y tế</span> chỉ trong vài giây.
                    </p>
                  </div>

                  <div className="flex gap-4 border-t border-[var(--hm-line)] pt-6">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                      <CheckDoubleIcon className="size-9" />
                    </div>
                    <p className="max-w-[40rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      Quét thẻ hoặc tem QR để liên hệ ngay số điện thoại khẩn cấp, giúp người thân{" "}
                      <span className="font-extrabold">nhận được tin tức nhanh nhất</span>.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-1">
                    <div className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                      <CheckDoubleIcon className="size-9" />
                    </div>
                    <p className="max-w-[40rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                      Cung cấp ngay <span className="font-extrabold">dữ liệu chuẩn xác</span>, giúp y bác sĩ tập trung 100% vào việc cứu người.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,240,227,0.5)] px-4 py-24 sm:px-6 xl:px-8">
        <div className="mx-auto max-w-[1635px]">
          <h2 className="text-center text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em]">
            Ba cách nhận diện. Một <span className="text-[var(--hm-orange)]">mục đích</span> duy nhất.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
            <svg
              aria-hidden="true"
              viewBox="0 0 652 24"
              className="hidden h-6 w-[41rem] max-w-full text-[var(--hm-orange)] lg:block"
            >
              <path
                d="M0 12h624m0 0-17-11m17 11-17 11"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
            <p className="max-w-[38rem] text-[1.4rem] leading-[1.5] text-[var(--hm-muted)]">
              Tạo điều kiện để <span className="font-extrabold text-[var(--hm-ink)]">bất cứ ai</span> cũng có thể hỗ trợ bạn, giúp thông tin y tế luôn được truyền đi{" "}
              <span className="font-extrabold text-[var(--hm-ink)]">kịp thời</span> nhất.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="rounded-[20px] bg-white px-7 pb-8 pt-[17rem]">
                <h3 className="text-[2rem] font-extrabold leading-tight text-[var(--hm-ink)]">{card.title}</h3>
                <p className="mt-3 text-[1.25rem] leading-[1.55] text-[var(--hm-muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="px-4 py-24 scroll-mt-20 sm:px-6 xl:px-8"
      >
        <div className="mx-auto max-w-[1468px]">
          <h2 className="text-center text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em]">
            Bảo vệ bạn chỉ với <span className="text-[var(--hm-green)]">5 bước</span>.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>

          <div
            className="mt-10 overflow-hidden rounded-[20px] border border-[var(--hm-line)] p-8"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(217,217,217,0.55) 25%, transparent 25%), linear-gradient(-45deg, rgba(217,217,217,0.55) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(217,217,217,0.55) 75%), linear-gradient(-45deg, transparent 75%, rgba(217,217,217,0.55) 75%)",
              backgroundPosition: "0 0, 0 48px, 48px -48px, -48px 0px",
              backgroundSize: "96px 96px",
              backgroundColor: "#ffffff",
            }}
          >
            <div className="flex min-h-[11rem] items-center justify-center">
              <a
                href="#about"
                className="inline-flex h-[62px] items-center gap-3 rounded-full border border-[var(--hm-line)] bg-white px-8 text-[1.45rem] font-extrabold text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2"
              >
                <PlayTriangleIcon className="size-6" />
                <span>Xem cách HelpMe hoạt động</span>
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-2 text-center text-[1.45rem] font-extrabold text-[var(--hm-ink)]">
            <span>Bạn vẫn còn thắc mắc?</span>
            <a
              href="#faq"
              className="inline-flex items-center gap-1 text-[var(--hm-green)] underline decoration-[10%] underline-offset-[0.18em] transition-colors duration-200 hover:text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2"
            >
              <span>Xem hướng dẫn chi tiết</span>
              <ExternalArrowIcon className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24 scroll-mt-20 sm:px-6 xl:px-8">
        <div className="mx-auto grid max-w-[1698px] gap-12 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1fr)] lg:items-start">
          <div className="flex justify-center lg:justify-start">
            <Image
              alt="Minh hoạ FAQ HelpMe"
              src="/faq-frame.png"
              width={832}
              height={716}
              className="h-auto w-full max-w-[34rem] object-contain"
            />
          </div>

          <div className="pt-2">
            <h2 className="text-center text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em]">
              Câu hỏi thường gặp
            </h2>

            <div className="mt-10 divide-y divide-[var(--hm-line)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <span className="max-w-[57rem] text-left text-[1.55rem] font-extrabold leading-[1.55] text-[var(--hm-ink)]">
                      {faq.question}
                    </span>
                    <CaretDownIcon className="faq-chevron mt-1 size-6 shrink-0 text-[var(--hm-ink)] transition-transform duration-200" />
                  </summary>
                  <p className="mt-4 max-w-[54rem] pr-4 text-[1.25rem] leading-8 text-[var(--hm-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="px-4 pb-0 pt-3 scroll-mt-20 sm:px-6 xl:px-8">
        <div className="mx-auto overflow-hidden rounded-[20px] border border-[var(--hm-line)] bg-white">
          <div className="grid xl:grid-cols-[minmax(0,913px)_minmax(0,879px)]">
            <div className="px-8 py-12 sm:px-12 lg:px-14 lg:py-[4.6rem]">
              <h2 className="max-w-[743px] text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.15] tracking-[-0.045em]">
                Đừng phó mặc cho <span className="text-[var(--hm-orange)]">rủi ro</span>.
              </h2>
              <p className="mt-5 max-w-[38rem] text-[1.45rem] leading-[1.55] text-[var(--hm-muted)]">
                Chuẩn bị hồ sơ y tế khẩn cấp ngay hôm nay để tự bảo vệ chính mình và những người thân yêu.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <p className="text-[1.75rem] font-extrabold text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
                <StoreButton store="google" href="#footer" border />
                <StoreButton store="apple" href="#footer" border />
              </div>
            </div>

            <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[27rem]">
              <div className="absolute left-[-5rem] top-[-6rem] size-[23rem] rounded-full bg-[rgba(255,240,227,0.75)]" />
              <div className="absolute left-[0.5rem] top-[-6rem] size-[23rem] rounded-full bg-[rgba(255,240,227,0.48)]" />
              <Image
                alt="Gia đình quây quần bên nhau"
                src="/family-photo.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="px-4 pb-0 pt-6 sm:px-6 xl:px-8">
        <div className="mx-auto max-w-[1792px] rounded-t-[6.25rem] bg-[var(--hm-green)] px-8 py-12 text-white lg:px-12 lg:py-14">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div>
              <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                <BrandMark className="w-[9rem] sm:w-[10rem]" />
                <div className="lg:border-l lg:border-white/35 lg:pl-6">
                  <p className="max-w-[26rem] text-[1.2rem] font-extrabold leading-[1.5] text-white">
                    Hơn cả một ứng dụng, HelpMe là nỗ lực vì một cộng đồng an toàn. Nơi công nghệ rút ngắn &quot;thời gian vàng&quot; cấp cứu, giúp mọi người dễ dàng dang tay hỗ trợ nhau trong những khoảnh khắc sinh tử.
                  </p>
                </div>
              </div>

              <div className="mt-8 max-w-[42.6rem] rounded-[20px] bg-white px-6 py-6 text-[var(--hm-ink)]">
                <h3 className="text-[2rem] font-extrabold text-[var(--hm-green)]">Thông tin liên lạc</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex size-12 items-center justify-center text-[var(--hm-green)]">
                      <MapPinIcon className="size-10" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#8d8d8d]">Địa chỉ</p>
                      <p className="text-[1.35rem] leading-8 text-[var(--hm-ink)]">
                        Khu Công Nghệ Cao, TP. Thủ Đức, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex size-12 items-center justify-center text-[var(--hm-green)]">
                      <PhoneCallIcon className="size-10" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#8d8d8d]">Hotline</p>
                      <p className="text-[1.35rem] text-[var(--hm-ink)]">1900 xxxx</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex size-12 items-center justify-center text-[var(--hm-green)]">
                      <MailIcon className="size-10" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#8d8d8d]">Email</p>
                      <p className="text-[1.35rem] text-[var(--hm-ink)]">support@helpme.vn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-5 md:border-r md:border-white/35 md:pr-8">
                  <h3 className="text-[2rem] font-extrabold text-white">Giới thiệu</h3>
                  <a
                    href="#about"
                    className="block text-[1.25rem] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                  >
                    Về HelpMe
                  </a>
                </div>

                <div className="space-y-5">
                  <h3 className="text-[2rem] font-extrabold text-white">Dành cho đối tác</h3>
                  <a
                    href="#partner"
                    className="block text-[1.25rem] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                  >
                    Hợp tác với HelpMe
                  </a>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-[1fr_1fr_auto]">
                <div className="lg:border-r lg:border-white/35 lg:pr-8">
                  <FooterColumn title="Liên kết nhanh" links={quickLinks} />
                </div>

                <div className="lg:border-r lg:border-white/35 lg:pr-8">
                  <FooterColumn title="Hỗ trợ & Pháp lý" links={legalLinks} />
                </div>

                <div className="space-y-5">
                  <h3 className="text-[2rem] font-extrabold text-white">Tải xuống</h3>
                  <div className="flex flex-col gap-4">
                    <StoreButton store="google" href="#footer" />
                    <StoreButton store="apple" href="#footer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/30 pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <a
                  href="#footer"
                  aria-label="Facebook"
                  className="flex size-[50px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  <FacebookIcon className="size-7" />
                </a>
                <a
                  href="#footer"
                  aria-label="LinkedIn"
                  className="flex size-[50px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  <LinkedinIcon className="size-7" />
                </a>
                <a
                  href="#footer"
                  aria-label="YouTube"
                  className="flex size-[50px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  <YoutubeIcon className="h-6 w-7" />
                </a>
              </div>

              <p className="text-[1.75rem] font-extrabold text-white">© 2026 HelpMe. All rights reserved.</p>

              <a
                href="#top"
                className="inline-flex items-center gap-3 text-[1.5rem] font-extrabold text-white transition-colors duration-200 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
              >
                <span>Cuộn lên đầu trang</span>
                <ArrowUpIcon className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
