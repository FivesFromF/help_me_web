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
      <div className="mx-auto w-full max-w-[1792px] rounded-[2.2rem] border border-[var(--hm-line)] bg-white shadow-[0_8px_24px_rgba(61,61,61,0.08)] lg:w-fit lg:rounded-[3rem]">
        <div className="flex items-center justify-between px-4 py-3 lg:h-[100px] lg:gap-4 lg:px-10">
          <a href="#top" className="block w-[7rem] sm:w-[8rem] lg:w-[8rem]">
            <BrandMark />
          </a>

          <button
            type="button"
            aria-label="Mở menu điều hướng"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--hm-line)] text-[var(--hm-ink)] lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-0 h-[2px] w-full rounded bg-current" />
              <span className="absolute left-0 top-[6px] h-[2px] w-full rounded bg-current" />
              <span className="absolute left-0 top-[12px] h-[2px] w-full rounded bg-current" />
            </span>
          </button>

          <nav className="hidden flex-wrap items-center gap-2 lg:flex lg:gap-[6px]">
            {navLinks.map((link) => (
              <NavPill key={link.label} {...link} />
            ))}
          </nav>

          <a
            href="#partner"
            className="hidden items-center gap-2 rounded-full bg-[var(--hm-green)] px-6 py-3 text-[1.5rem] font-extrabold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-green)] focus-visible:ring-offset-2 lg:inline-flex"
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
    <section className="px-4 pb-4 pt-12 sm:px-6 xl:px-8">
      <div className="mx-auto grid max-w-[1792px] gap-10 xl:grid-cols-[minmax(0,1012px)_minmax(0,828px)] xl:items-center xl:justify-between">
        <div className="pt-4 lg:pl-[3.9rem] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="max-w-[880px] text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--hm-ink)] sm:leading-[1.08] sm:tracking-[-0.05em]">
            <span className="block">Tai nạn ngỡ ngàng,</span>
            <span className="block">thông tin y tế</span>
            <span className="block italic text-[var(--hm-orange)]">vẫn luôn sẵn sàng.</span>
          </h1>

          <div className="mt-8 grid w-full max-w-[466px] gap-6 text-left sm:mt-10 sm:max-w-none sm:grid-cols-[minmax(0,466px)_1px_minmax(0,346px)] sm:items-start xl:gap-8">
            <HeroInfo
              icon={<IdentificationCardIcon className="size-[2.8rem] sm:size-[3.8rem]" />}
              title="Định danh tức thì"
              description="Cung cấp ngay thông tin nhóm máu, dị ứng và bệnh nền qua nhận diện khuôn mặt, QR hoặc thẻ chạm."
            />
            <div className="h-px w-full bg-[var(--hm-line)] sm:h-full sm:w-px" />
            <HeroInfo
              icon={<AmbulanceIcon className="size-[2.8rem] sm:size-[3.8rem]" />}
              title="Báo tin khẩn cấp"
              description="Tích hợp phím tắt khẩn cấp, thao tác nhanh để gửi tọa độ và tình trạng của bạn đến người thân."
            />
          </div>

          <div className="relative mt-10 hidden w-full overflow-hidden rounded-[28px] bg-[var(--hm-soft)] px-5 py-5 sm:rounded-[100px] sm:px-8 sm:py-6 lg:block lg:-ml-16 lg:w-[140%] xl:-ml-24 xl:w-[220%] xl:translate-x-8 xl:max-w-none xl:px-16 xl:py-10">
            <HeartbeatLine className="pointer-events-none absolute bottom-[-2.5rem] right-[-0.5rem] hidden w-[39rem] text-[var(--hm-orange)]/15 lg:block" />
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-3">
              <p className="max-w-none text-[1.15rem] font-extrabold leading-6 text-[var(--hm-ink)] sm:max-w-[8rem] sm:text-[1.3rem]">
                Tải HelpMe miễn phí
              </p>
              <div className="flex flex-wrap gap-3">
                <StoreButton store="google" href="#footer" />
                <StoreButton store="apple" href="#footer" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[26rem] flex-col items-center justify-center py-4 xl:min-h-[54rem] xl:justify-end xl:py-0">
          <div className="relative flex w-full justify-center">
            <HeartbeatLine className="pointer-events-none absolute bottom-[2.2rem] left-1/2 w-[128%] -translate-x-1/2 text-[var(--hm-orange)]/10 lg:hidden" />
            <HeroPhoneCollage className="relative z-10" />
          </div>

          <div className="mt-9 flex w-full flex-col items-center gap-3 lg:hidden">
            <p className="text-center text-[1.65rem] font-extrabold leading-none text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <StoreButton store="google" href="#footer" border className="h-[44px] min-w-[10.5rem] px-3 text-[1.2rem] font-bold tracking-[-0.02em]" />
              <StoreButton store="apple" href="#footer" border className="h-[44px] min-w-[10.5rem] px-3 text-[1.2rem] font-bold tracking-[-0.02em]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative isolate min-h-[1158px] px-4 pt-20 pb-20 scroll-mt-20 sm:px-6 sm:pt-32 sm:pb-32 xl:px-8 xl:pt-40 xl:pb-56">
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto w-full max-w-[1717px]">
        <PersonCircleIcon className="absolute left-[-6rem] top-20 size-[18rem] text-[var(--hm-soft)] sm:left-[-12rem] sm:top-40 sm:size-[30rem] xl:left-[-27.375rem] xl:top-0 xl:size-[62.5rem]" />
        <ClockIcon className="absolute right-[-4rem] top-60 size-[16rem] text-[rgba(0,189,132,0.08)] sm:right-[-10rem] sm:top-80 sm:size-[28rem] xl:right-[-24.5rem] xl:top-48 xl:size-[62.5rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1717px]">
        <div className="grid gap-12 sm:gap-16 xl:grid-cols-[minmax(0,962px)_minmax(0,755px)] xl:justify-between">
          <div>
            <h2 className="max-w-[1147px] text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.04em] text-center xl:text-left">
              Mỗi năm, hàng nghìn chuyện đáng tiếc xảy ra chỉ vì{" "}
              <span className="text-[var(--hm-orange)] block sm:inline">thông tin không đến kịp</span>.
            </h2>

            <div className="mt-12 sm:mt-16 bg-white/60 p-6 rounded-2xl shadow-sm backdrop-blur-sm xl:bg-transparent xl:p-0 xl:shadow-none xl:backdrop-blur-none">
              <p className="text-[1.75rem] font-extrabold text-[var(--hm-orange)] text-center xl:text-left sm:text-[2rem]">Vấn đề</p>
              <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <EyeClosedIcon className="size-8 sm:size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.15rem] leading-[1.5] text-[var(--hm-ink)] sm:text-[1.45rem] sm:leading-[1.6]">
                    <span className="font-extrabold">Nạn nhân bất tỉnh</span>, không thể cung cấp nhóm máu hay tiền sử dị ứng.
                  </p>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start border-t border-[var(--hm-line)]/50 pt-6 sm:pt-8">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <PhoneBreakIcon className="size-8 sm:size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.15rem] leading-[1.5] text-[var(--hm-ink)] sm:text-[1.45rem] sm:leading-[1.6]">
                    Điện thoại vỡ nát hoặc sập nguồn sau va chạm,{" "}
                    <span className="font-extrabold">cắt đứt mọi kênh liên lạc</span>.
                  </p>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start border-t border-[var(--hm-line)]/50 pt-6 sm:pt-8">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <ClockCountdownIcon className="size-8 sm:size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.15rem] leading-[1.5] text-[var(--hm-ink)] sm:text-[1.45rem] sm:leading-[1.6]">
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
    <section className="bg-[rgba(255,240,227,0.5)] px-4 pt-24 pb-32 sm:px-6 sm:pt-40 sm:pb-56 xl:px-8">
      <div className="mx-auto max-w-[1635px]">
        <h2 className="text-center text-[clamp(2.2rem,8vw,4rem)] font-extrabold leading-[1.15] tracking-[-0.04em]">
          Ba cách nhận diện. <span className="block sm:inline">Một <span className="text-[var(--hm-orange)]">mục đích</span> duy nhất.</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:mt-11 lg:grid-cols-[auto_auto] lg:items-start lg:justify-center">
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
          <p className="max-w-none text-center text-[1.25rem] leading-[1.6] text-[var(--hm-muted)] sm:max-w-[38rem] sm:text-left sm:text-[1.4rem] lg:leading-[1.5]">
            Tạo điều kiện để <span className="font-extrabold text-[var(--hm-ink)]">bất cứ ai</span> cũng có thể hỗ trợ bạn, giúp thông tin y tế luôn được truyền đi{" "}
            <span className="font-extrabold text-[var(--hm-ink)]">kịp thời</span> nhất.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 lg:mt-12 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article key={card.title} className="rounded-[20px] bg-white px-6 pb-8 pt-[12rem] sm:px-7 sm:pt-[17rem] shadow-sm">
              <h3 className="text-[1.75rem] font-extrabold leading-[1.2] text-[var(--hm-ink)] sm:text-[2rem] sm:leading-tight">{card.title}</h3>
              <p className="mt-3 text-[1.15rem] leading-[1.6] text-[var(--hm-muted)] sm:text-[1.25rem] sm:leading-[1.55]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 scroll-mt-20 sm:px-6 sm:py-24 xl:px-8">
      <div className="mx-auto max-w-[1468px]">
        <h2 className="text-center text-[clamp(2.2rem,8vw,4rem)] font-extrabold leading-[1.15] tracking-[-0.04em]">
          Bảo vệ bạn <span className="block sm:inline">chỉ với <span className="text-[var(--hm-green)]">5 bước</span>.</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5 xl:grid-cols-5">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[20px] border border-[var(--hm-line)] p-4 sm:mt-16 sm:p-14 [background-position:0_0,0_28px,28px_-28px,-28px_0] [background-size:56px_56px] sm:[background-position:0_0,0_48px,48px_-48px,-48px_0] sm:[background-size:96px_96px]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(217,217,217,0.55) 25%, transparent 25%), linear-gradient(-45deg, rgba(217,217,217,0.55) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(217,217,217,0.55) 75%), linear-gradient(-45deg, transparent 75%, rgba(217,217,217,0.55) 75%)",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="flex min-h-[8.5rem] items-center justify-center sm:min-h-[11rem]">
            <a
              href="#about"
              className="inline-flex h-[54px] w-full max-w-[22rem] items-center justify-center gap-2 rounded-full border border-[var(--hm-line)] bg-white px-5 text-[1.25rem] font-extrabold text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2 sm:h-[62px] sm:max-w-[25rem] sm:gap-3 sm:px-8 sm:text-[1.45rem]"
            >
              <PlayTriangleIcon className="size-5 sm:size-6 shrink-0" />
              <span className="whitespace-nowrap truncate">Xem cách HelpMe hoạt động</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-2 text-center text-[1.25rem] font-extrabold text-[var(--hm-ink)] sm:mt-16 sm:flex-row sm:flex-wrap sm:text-[1.45rem]">
          <span>Bạn vẫn còn thắc mắc?</span>
          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--hm-green)] underline decoration-[10%] underline-offset-[0.18em] transition-colors duration-200 hover:text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2 sm:gap-2"
          >
            <span>Xem hướng dẫn chi tiết</span>
            <ExternalArrowIcon className="size-5 sm:size-6 shrink-0" />
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
        <div className="relative px-5 pb-8 pt-8 sm:px-10 lg:hidden flex flex-col items-center text-center">
          <h2 className="max-w-[27rem] text-[clamp(2.2rem,8vw,3.8rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-[var(--hm-ink)]">
            Đừng phó mặc cho <span className="text-[var(--hm-orange)] block">rủi ro</span>.
          </h2>

          <p className="mt-5 max-w-[28rem] text-[1.35rem] leading-[1.5] text-[var(--hm-ink)] sm:text-[1.6rem]">
            Chuẩn bị hồ sơ y tế khẩn cấp ngay hôm nay để tự bảo vệ chính mình và những người thân yêu.
          </p>

          <div className="mt-8 flex flex-col items-center w-full">
            <p className="text-[1.65rem] font-extrabold leading-none text-[var(--hm-ink)] mb-4">Tải HelpMe miễn phí</p>
            <div className="flex flex-wrap justify-center gap-3 w-full sm:max-w-md">
              <StoreButton
                store="google"
                href="#footer"
                border
                className="h-[50px] flex-1 min-w-[140px] px-4 text-[1.2rem] font-bold"
              />
              <StoreButton
                store="apple"
                href="#footer"
                border
                className="h-[50px] flex-1 min-w-[140px] px-4 text-[1.2rem] font-bold"
              />
            </div>
          </div>

          <div className="relative w-full mt-10 h-[22rem] sm:h-[30rem] overflow-hidden rounded-[24px]">
            <div className="pointer-events-none absolute left-1/2 top-4 h-full w-[150%] -translate-x-1/2 rounded-[50%] bg-[var(--hm-soft)] opacity-80" />
            <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden rounded-[24px]">
              <Image
                alt="Gia đình quây quần bên nhau"
                src="/family-photo.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
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

          <div className="grid gap-6 lg:gap-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_minmax(18rem,1fr)_auto] lg:gap-10">
              <div className="space-y-5 md:border-r md:border-white/35 md:pr-8 lg:w-[234.766px]">
                <h3 className="text-[2rem] font-extrabold text-white">Giới thiệu</h3>
                <a
                  href="#about"
                  className="block text-[1.25rem] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  Về HelpMe
                </a>
              </div>

              <div className="space-y-5 lg:w-[287.766px] lg:-translate-x-[129px]">
                <h3 className="text-[2rem] font-extrabold text-white">Dành cho đối tác</h3>
                <a
                  href="#partner"
                  className="block text-[1.25rem] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  Hợp tác với HelpMe
                </a>
              </div>

              <div aria-hidden="true" className="hidden lg:block" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_minmax(18rem,1fr)_auto]">
              <div className="lg:border-r lg:border-white/35 lg:pr-8">
                <LinkList title="Liên kết nhanh" links={quickLinks} />
              </div>

              <div className="lg:border-r lg:border-white/35 lg:pr-8">
                <LinkList title="Hỗ trợ & Pháp lý" links={legalLinks} titleClassName="lg:whitespace-nowrap" />
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
    <main id="top" className="overflow-x-clip bg-white text-[var(--hm-ink)]">
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
