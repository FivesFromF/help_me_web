import Image from "next/image";

import {
  AmbulanceIcon,
  ArrowUpIcon,
  CaretDownIcon,
  CheckDoubleIcon,
  ClockCountdownIcon,
  ClockIcon,
  ExternalArrowIcon,
  FacebookIcon,
  EyeClosedIcon,
  HeartbeatLine,
  HandshakeIcon,
  IdentificationCardIcon,
  MailIcon,
  MapPinIcon,
  PersonCircleIcon,
  PhoneBreakIcon,
  PhoneCallIcon,
  PlayTriangleIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../homepage-icons";

import {
  featureCards,
  faqs,
  legalLinks,
  navLinks,
  quickLinks,
  steps,
} from "./content";
import {
  HeroInfo,
  HeroPhoneCollage,
  NavPill,
  StepCard,
} from "./shared";
import { BrandMark } from "@/components/ui/brand-mark";
import { LinkList } from "@/components/ui/link-list";
import { StoreButton } from "@/components/ui/store-button";

function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 xl:px-8">
      <div className="mx-auto w-fit rounded-[3rem] border border-[var(--hm-line)] bg-white shadow-[0_8px_24px_rgba(61,61,61,0.08)]">
        <div className="flex flex-col gap-4 px-4 py-4 lg:h-[100px] lg:flex-row lg:items-center lg:justify-start lg:px-10">
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
  );
}

function HeroSection() {
  return (
    <section className="px-4 pb-4 pt-8 sm:px-6 xl:px-8">
      <div className="mx-auto grid max-w-[1792px] gap-8 xl:grid-cols-[minmax(0,1012px)_minmax(0,828px)] xl:items-center xl:justify-between">
        <div className="pt-4 lg:pl-[3.9rem]">
          <h1 className="max-w-[880px] text-[clamp(3.75rem,5.4vw,6rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--hm-ink)]">
            <span className="block">Tai nạn ngỡ ngàng,</span>
            <span className="block">thông tin y tế</span>
            <span className="block italic text-[var(--hm-orange)]">vẫn luôn sẵn sàng.</span>
          </h1>

          <div className="mt-8 grid gap-8 sm:grid-cols-[minmax(0,466px)_1px_minmax(0,346px)] sm:items-start sm:gap-6">
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

          <div className="relative -ml-16 mt-8 overflow-hidden rounded-[100px] bg-[var(--hm-soft)] px-8 py-6 sm:-ml-10 sm:w-[120%] lg:-ml-16 lg:w-[140%] xl:-ml-24 xl:w-[220%] xl:translate-x-8 xl:max-w-none xl:px-16 xl:py-10">
            <HeartbeatLine className="pointer-events-none absolute bottom-[-2.5rem] right-[-0.5rem] hidden w-[39rem] text-[var(--hm-orange)]/15 lg:block" />
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-3">
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

        <div className="relative flex min-h-[26rem] items-center justify-center py-4 xl:min-h-[54rem] xl:justify-end xl:py-0">
          <HeroPhoneCollage />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative isolate min-h-[1158px] px-4 pt-40 pb-56 scroll-mt-20 sm:px-6 xl:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto w-full max-w-[1717px]">
        <PersonCircleIcon className="absolute left-[-12rem] top-40 size-[30rem] text-[var(--hm-soft)] xl:left-[-27.375rem] xl:top-0 xl:size-[62.5rem]" />
        <ClockIcon className="absolute right-[-10rem] top-80 size-[28rem] text-[rgba(0,189,132,0.08)] xl:right-[-24.5rem] xl:top-48 xl:size-[62.5rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1717px]">
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
  );
}

function RecognitionSection() {
  return (
    <section className="bg-[rgba(255,240,227,0.5)] px-4 pt-40 pb-56 sm:px-6 xl:px-8">
      <div className="mx-auto max-w-[1635px]">
        <h2 className="text-center text-[clamp(2.7rem,4.5vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.045em]">
          Ba cách nhận diện. Một <span className="text-[var(--hm-orange)]">mục đích</span> duy nhất.
        </h2>

        <div className="mt-11 grid gap-6 lg:grid-cols-[auto_auto] lg:items-start lg:justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 652 24"
            className="hidden h-17 w-[41rem] max-w-full text-[var(--hm-orange)] lg:block"
          >
            <path
              d="M65 12h580m0 0-17-11m17 11-17 11"
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
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-24 scroll-mt-20 sm:px-6 xl:px-8">
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
          className="mt-16 overflow-hidden rounded-[20px] border border-[var(--hm-line)] p-14"
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

        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 text-center text-[1.45rem] font-extrabold text-[var(--hm-ink)]">
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
  );
}

function FaqSection() {
  return (
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
  );
}

function PartnerSection() {
  return (
    <section id="partner" className="px-4 pb-0 pt-3 scroll-mt-20 sm:px-6 xl:px-8">
      <div className="mx-auto max-w-[1792px] overflow-hidden rounded-[20px] border border-[var(--hm-line)] bg-white">
        <div className="relative px-8 py-12 sm:px-12 lg:hidden">
          <h2 className="max-w-[48rem] text-[clamp(2.8rem,4.5vw,4rem)] font-extrabold leading-[1.14] tracking-[-0.045em] text-[var(--hm-ink)]">
            Đừng phó mặc cho <span className="text-[var(--hm-orange)]">rủi ro</span>.
          </h2>
          <p className="mt-6 max-w-[44rem] text-[1.5rem] leading-[1.45] text-[var(--hm-ink)]">
            Chuẩn bị hồ sơ y tế khẩn cấp ngay hôm nay để tự bảo vệ chính mình và những người thân yêu.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[1.875rem]">
            <p className="text-[1.5rem] font-extrabold leading-none text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
            <StoreButton store="google" href="#footer" border className="min-w-[14.25rem]" />
            <StoreButton store="apple" href="#footer" border className="min-w-[12rem]" />
          </div>

          <div className="relative mt-10 h-[16rem] overflow-hidden rounded-[24px]">
            <Image
              alt="Gia đình quây quần bên nhau"
              src="/family-photo.jpg"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative hidden h-[441px] overflow-hidden lg:block">
          <div className="pointer-events-none absolute left-[735px] top-[-246px] size-[988px] rounded-full bg-[rgba(255,240,227,0.5)]" />
          <div className="pointer-events-none absolute left-[854px] top-[-246px] size-[988px] rounded-full bg-[var(--hm-soft)]" />

          <div className="pointer-events-none absolute left-[962px] top-[-217px] size-[931px] overflow-hidden rounded-full">
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(195.5deg,rgba(255,119,0,0.1)_0%,rgba(255,255,255,0.15)_99.8747%)]" />
          </div>

          <div className="pointer-events-none absolute left-[950px] top-[-1px] h-[586px] w-[879px] overflow-hidden rounded-[77px]">
            <div
              className="absolute inset-0 overflow-hidden rounded-[77px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle 465.5px at 477.5px 249.5px, #000 99.8%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle 465.5px at 477.5px 249.5px, #000 99.8%, transparent 100%)",
              }}
            >
              <Image
                alt="Gia đình quây quần bên nhau"
                src="/family-photo.jpg"
                fill
                sizes="(max-width: 1280px) 50vw, 879px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute left-[120px] top-[109px] max-w-[48rem]">
            <h2 className="text-[64px] font-extrabold leading-[1.12] tracking-[-0.045em] text-[var(--hm-ink)]">
              Đừng phó mặc cho <span className="text-[var(--hm-orange)]">rủi ro</span>.
            </h2>
            <p className="mt-6 w-[718px] max-w-full text-[1.5rem] leading-[1.45] text-[var(--hm-ink)]">
              Chuẩn bị hồ sơ y tế khẩn cấp ngay hôm nay để tự bảo vệ chính mình và những người thân yêu.
            </p>
          </div>

          <div className="absolute left-[120px] top-[318px] flex items-center gap-[30px]">
            <p className="text-[1.5rem] font-extrabold leading-none text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
            <StoreButton store="google" href="#footer" border className="min-w-[14.25rem]" />
            <StoreButton store="apple" href="#footer" border className="min-w-[12rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer id="footer" className="px-4 pb-0 pt-6 sm:px-6 xl:px-8">
      <div className="mx-auto max-w-[1792px] rounded-t-[6.25rem] bg-[var(--hm-green)] px-8 py-12 text-white lg:px-12 lg:py-14">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <div>
            <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
              <BrandMark className="w-[11rem] sm:w-[12rem]" />
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
                <LinkList title="Liên kết nhanh" links={quickLinks} />
              </div>

              <div className="lg:border-r lg:border-white/35 lg:pr-8">
                <LinkList title="Hỗ trợ & Pháp lý" links={legalLinks} />
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

            <p className="text-[1.75rem] font-medium text-white">© 2026 HelpMe. All rights reserved.</p>

            <a
              href="#top"
              className="inline-flex items-center gap-3 text-[1.5rem] font-medium text-white transition-colors duration-200 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
            >
              <span>Cuộn lên đầu trang</span>
              <ArrowUpIcon className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Homepage() {
  return (
    <main id="top" className="bg-white text-[var(--hm-ink)]">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <RecognitionSection />
      <HowItWorksSection />
      <FaqSection />
      <PartnerSection />
      <FooterSection />
    </main>
  );
}
