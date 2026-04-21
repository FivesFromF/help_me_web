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
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--hm-line)]/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 lg:hidden">
        <div className="mx-auto flex h-[88px] w-full max-w-[390px] items-center justify-between px-4">
          <a href="#top" className="block w-[114px]">
            <BrandMark />
          </a>

          <details className="group relative">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--hm-line)] text-[var(--hm-orange)] transition-colors duration-200 hover:border-[var(--hm-orange)] hover:bg-[var(--hm-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Mở menu điều hướng</span>
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-transform duration-200 group-open:translate-y-[6px] group-open:rotate-45" />
                <span className="absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-opacity duration-200 group-open:opacity-0" />
                <span className="absolute left-0 top-[12px] h-[2px] w-full rounded bg-current transition-transform duration-200 group-open:-translate-y-[6px] group-open:-rotate-45" />
              </span>
            </summary>

            <div className="absolute right-0 top-[calc(100%+12px)] w-[min(22rem,calc(100vw-2rem))] rounded-[24px] border border-[var(--hm-line)] bg-white p-3 shadow-[0_18px_48px_rgba(61,61,61,0.14)]">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 rounded-[18px] px-4 py-3 text-[16px] font-bold text-[var(--hm-ink)] transition-colors duration-200 hover:bg-[var(--hm-soft)]/80 hover:text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2"
                  >
                    <span className="text-[var(--hm-orange)]">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
                <a
                  href="#partner"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--hm-green)] px-5 py-3 text-[16px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-green)] focus-visible:ring-offset-2"
                >
                  <HandshakeIcon className="size-5" />
                  <span>Trở thành đối tác</span>
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <header className="sticky top-0 z-50 hidden px-4 pt-4 sm:px-6 xl:px-8 lg:block">
        <div className="mx-auto w-full max-w-[1792px] rounded-[2.2rem] border border-[var(--hm-line)] bg-white shadow-[0_8px_24px_rgba(61,61,61,0.08)] lg:w-fit lg:rounded-[3rem]">
          <div className="flex items-center justify-between px-4 py-3 lg:h-[100px] lg:gap-4 lg:px-10">
            <a href="#top" className="block w-[7rem] sm:w-[8rem] lg:w-[8rem]">
              <BrandMark />
            </a>

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
    </>
  );
}

function HeroSection() {
  return (
    <section className="px-4 pb-8 pt-8 sm:px-6 xl:px-8 xl:pb-4 xl:pt-12">
      <div className="mx-auto grid max-w-[390px] gap-8 xl:max-w-[1792px] xl:grid-cols-[minmax(0,1012px)_minmax(0,828px)] xl:items-center xl:justify-between xl:gap-10">
        <div className="mx-auto w-full max-w-[390px] text-center xl:mx-0 xl:max-w-none xl:pt-4 xl:pl-[3.9rem] xl:text-left">
          <h1 className="text-[36px] font-extrabold leading-[1.2] tracking-[-0.04em] text-[var(--hm-ink)] sm:text-[42px] xl:max-w-[880px] xl:text-[clamp(2.5rem,8vw,6rem)] xl:leading-[1.1] xl:tracking-[-0.04em]">
            <span className="block">Tai nạn ngỡ ngàng,</span>
            <span className="block">thông tin y tế</span>
            <span className="block italic text-[var(--hm-orange)]">vẫn luôn sẵn sàng.</span>
          </h1>

          <div className="mx-auto mt-7 flex w-full max-w-[390px] flex-col gap-4 text-left xl:mx-0 xl:mt-8 xl:grid xl:w-full xl:max-w-[466px] xl:grid-cols-[minmax(0,466px)_1px_minmax(0,346px)] xl:items-start xl:gap-8">
            <HeroInfo
              icon={<IdentificationCardIcon className="size-[40px] xl:size-[56px]" />}
              title="Định danh tức thì"
              description="Cung cấp ngay thông tin nhóm máu, dị ứng và bệnh nền qua nhận diện khuôn mặt, QR hoặc thẻ chạm."
            />
            <div className="h-px w-[296px] bg-[var(--hm-line)] xl:h-full xl:w-px" />
            <HeroInfo
              icon={<AmbulanceIcon className="size-[40px] xl:size-[56px]" />}
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
            <div className="pointer-events-none absolute bottom-[4.25rem] left-1/2 h-[72px] w-[71%] -translate-x-1/2 rounded-full bg-[var(--hm-soft)] lg:hidden" />
            <HeartbeatLine className="pointer-events-none absolute bottom-[2.2rem] left-1/2 w-[128%] -translate-x-1/2 text-[var(--hm-orange)]/10 lg:hidden" />
            <HeroPhoneCollage className="relative z-10" />
          </div>

          <div className="mt-5 flex w-full flex-col items-center gap-3 lg:hidden">
            <p className="text-center text-[14px] font-bold leading-none text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <StoreButton store="google" href="#footer" border compact />
              <StoreButton store="apple" href="#footer" border compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative isolate px-4 pb-16 pt-14 scroll-mt-20 sm:px-6 sm:pb-24 sm:pt-24 xl:min-h-[1158px] xl:px-8 xl:pt-40 xl:pb-56">
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto w-full max-w-[1717px]">
        <PersonCircleIcon className="absolute left-[-1.8rem] top-[1.5rem] size-[10.75rem] text-[var(--hm-soft)]/75 xl:hidden" />
        <ClockIcon className="absolute right-[-2.5rem] top-[4.25rem] size-[12.5rem] text-[rgba(0,189,132,0.09)] xl:hidden" />
        <PersonCircleIcon className="absolute left-[-27.375rem] top-0 hidden size-[62.5rem] text-[var(--hm-soft)] xl:block" />
        <ClockIcon className="absolute right-[-24.5rem] top-48 hidden size-[62.5rem] text-[rgba(0,189,132,0.08)] xl:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1717px]">
        <div className="xl:hidden">
          <div className="mx-auto max-w-[356px]">
            <h2 className="max-w-[340px] text-left text-[24px] font-bold leading-[1.35] tracking-[-0.03em] text-[var(--hm-ink)]">
              Mỗi năm, hàng nghìn chuyện đáng tiếc xảy ra chỉ vì{" "}
              <span className="text-[var(--hm-orange)]">thông tin không đến kịp.</span>
            </h2>

            <h2 className="ml-auto mt-3 max-w-[290px] text-right text-[24px] font-bold leading-[1.35] tracking-[-0.03em] text-[var(--hm-ink)]">
              Và HelpMe ở đây để{" "}
              <span className="text-[var(--hm-green)]">giữ trọn &quot;thời gian vàng&quot;</span>
            </h2>

            <div className="mt-8">
              <p className="text-[24px] font-bold text-[var(--hm-orange)]">Vấn đề</p>
              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <EyeClosedIcon className="size-8" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    <span className="font-extrabold">Nạn nhân bất tỉnh</span>, không thể cung cấp nhóm máu hay tiền sử dị ứng.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <PhoneBreakIcon className="size-8" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    Điện thoại vỡ nát hoặc sập nguồn sau va chạm, <span className="font-extrabold">cắt đứt mọi kênh liên lạc</span>.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <ClockCountdownIcon className="size-8" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    Bác sĩ cấp cứu <span className="font-extrabold">đánh mất &quot;thời gian vàng&quot;</span> để dò hỏi thông tin cơ bản.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[24px] font-bold text-[var(--hm-green)]">Giải pháp</p>
              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-green)]">
                    <CheckDoubleIcon className="size-9" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    HelpMe &quot;lên tiếng&quot; thay bạn, <span className="font-extrabold">truy xuất hồ sơ y tế</span> chỉ trong vài giây.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-green)]">
                    <CheckDoubleIcon className="size-9" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    Quét thẻ hoặc tem QR để liên hệ ngay số điện thoại khẩn cấp, giúp người thân <span className="font-extrabold">nhận được tin tức nhanh nhất</span>.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-green)]">
                    <CheckDoubleIcon className="size-9" />
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[var(--hm-ink)]">
                    Cung cấp ngay <span className="font-extrabold">dữ liệu chuẩn xác</span>, giúp y bác sĩ tập trung 100% vào việc cứu người.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden gap-12 sm:gap-16 xl:grid xl:grid-cols-[minmax(0,962px)_minmax(0,755px)] xl:justify-between">
          <div>
            <h2 className="max-w-[1147px] text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.04em] text-center xl:text-left">
              Mỗi năm, hàng nghìn chuyện đáng tiếc xảy ra chỉ vì{" "}
              <span className="text-[var(--hm-orange)] block sm:inline">thông tin không đến kịp</span>.
            </h2>

            <div className="mt-12 bg-white/60 p-6 rounded-2xl shadow-sm backdrop-blur-sm xl:bg-transparent xl:p-0 xl:shadow-none xl:backdrop-blur-none">
              <p className="text-center text-[2rem] font-extrabold text-[var(--hm-orange)] xl:text-left">Vấn đề</p>
              <div className="mt-8 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <EyeClosedIcon className="size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                    <span className="font-extrabold">Nạn nhân bất tỉnh</span>, không thể cung cấp nhóm máu hay tiền sử dị ứng.
                  </p>
                </div>

                <div className="flex items-start gap-6 border-t border-[var(--hm-line)]/50 pt-8">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <PhoneBreakIcon className="size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                    Điện thoại vỡ nát hoặc sập nguồn sau va chạm,{" "}
                    <span className="font-extrabold">cắt đứt mọi kênh liên lạc</span>.
                  </p>
                </div>

                <div className="flex items-start gap-6 border-t border-[var(--hm-line)]/50 pt-8">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center text-[var(--hm-orange)]">
                    <ClockCountdownIcon className="size-9" />
                  </div>
                  <p className="max-w-[42rem] text-[1.45rem] leading-[1.6] text-[var(--hm-ink)]">
                    Bác sĩ cấp cứu <span className="font-extrabold">đánh mất &quot;thời gian vàng&quot;</span> để dò hỏi thông tin cơ bản.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20">
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
    <section className="bg-[rgba(255,244,236,0.78)] px-4 py-10 sm:px-6 xl:bg-[rgba(255,240,227,0.5)] xl:px-8 xl:pt-24 xl:pb-32">
      <div className="mx-auto w-full max-w-[390px] xl:max-w-[1635px]">
        <h2 className="text-[24px] font-bold leading-[1.35] text-[var(--hm-ink)] xl:text-center xl:text-[clamp(2.2rem,8vw,4rem)] xl:font-extrabold xl:leading-[1.15] xl:tracking-[-0.04em]">
          Ba cách nhận diện.
          <span className="mt-1 block xl:mt-0 xl:inline">Một <span className="text-[var(--hm-orange)]">mục đích</span> duy nhất.</span>
        </h2>

        <div className="mt-4 flex items-start gap-3 xl:mt-10 xl:grid xl:items-start xl:justify-center xl:gap-6 xl:grid-cols-[auto_auto]">
          <svg aria-hidden="true" viewBox="0 0 70 22" className="mt-1 h-[18px] w-[69px] shrink-0 text-[var(--hm-orange)] xl:hidden">
            <path d="M1 11h55m0 0-9-8m9 8-9 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 652 24"
            className="hidden h-17 w-[41rem] max-w-full text-[var(--hm-orange)] xl:block"
          >
            <path
              d="M65 12h580m0 0-17-11m17 11-17 11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
          <p className="text-[16px] leading-[1.45] text-[var(--hm-muted)] xl:max-w-none xl:text-left xl:text-[1.4rem] xl:leading-[1.5]">
            Tạo điều kiện để <span className="font-bold text-[var(--hm-ink)]">bất cứ ai</span> cũng có thể hỗ trợ bạn, giúp thông tin y tế luôn được truyền đi <span className="font-bold text-[var(--hm-ink)]">kịp thời</span> nhất.
          </p>
        </div>

        <div className="mt-8 grid gap-3 xl:mt-12 xl:grid-cols-3 xl:gap-6">
          {featureCards.map((card) => (
            <article key={card.title} className="min-h-[300px] rounded-[16px] border border-white/70 bg-white px-5 pb-5 pt-[188px] shadow-[0_10px_24px_rgba(61,61,61,0.04)] xl:rounded-[20px] xl:border-0 xl:px-6 xl:pb-8 xl:pt-[12rem] xl:shadow-sm">
              <h3 className="text-[18px] font-bold leading-[1.3] text-[var(--hm-ink)] xl:text-[1.75rem] xl:font-extrabold xl:leading-[1.2]">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[var(--hm-muted)] xl:mt-3 xl:text-[1.15rem] xl:leading-[1.6]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-12 scroll-mt-20 sm:px-6 xl:px-8 xl:py-16">
      <div className="mx-auto w-full max-w-[390px] xl:max-w-[1468px]">
        <h2 className="text-center text-[24px] font-bold leading-[1.35] text-[var(--hm-ink)] xl:text-[clamp(2.2rem,8vw,4rem)] xl:font-extrabold xl:leading-[1.15] xl:tracking-[-0.04em]">
          Bảo vệ bạn chỉ với <span className="text-[var(--hm-green)]">5 bước</span>.
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3 xl:mt-10 xl:grid xl:grid-cols-5 xl:gap-5">
          {steps.map((step) => (
            <div key={step.number} className="w-[152px] xl:w-auto">
              <StepCard {...step} />
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-[14px] border border-[var(--hm-line)] bg-white p-3 xl:mt-10 xl:overflow-hidden xl:rounded-[20px] xl:p-4"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(229,229,229,0.75) 25%, transparent 25%), linear-gradient(-45deg, rgba(229,229,229,0.75) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(229,229,229,0.75) 75%), linear-gradient(-45deg, transparent 75%, rgba(229,229,229,0.75) 75%)",
            backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="flex min-h-[84px] items-center justify-center xl:min-h-[11rem]">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hm-line)] bg-white px-4 py-2 text-[16px] font-bold text-[var(--hm-orange)] shadow-[0_2px_8px_rgba(61,61,61,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2 xl:h-[54px] xl:w-full xl:max-w-[22rem] xl:justify-center xl:gap-2 xl:px-5 xl:text-[1.25rem] xl:font-extrabold xl:shadow-none"
            >
              <PlayTriangleIcon className="size-5 shrink-0" />
              <span>Xem cách HelpMe hoạt động</span>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-1 text-center text-[16px] font-bold text-[var(--hm-ink)] xl:mt-12 xl:flex-row xl:flex-wrap xl:gap-2 xl:text-[1.45rem] xl:font-extrabold">
          <span>Bạn vẫn còn thắc mắc?</span>
          <a
            href="#faq"
            className="inline-flex items-center gap-1 whitespace-nowrap text-[var(--hm-green)] underline decoration-[10%] underline-offset-[0.18em] transition-colors duration-200 hover:text-[var(--hm-orange)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2 xl:gap-2"
          >
            <span>Xem hướng dẫn chi tiết</span>
            <ExternalArrowIcon className="size-5 shrink-0 xl:size-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="px-4 py-12 scroll-mt-20 sm:px-6 xl:px-8 xl:py-24">
      <div className="mx-auto grid max-w-[390px] gap-8 xl:max-w-[1698px] xl:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1fr)] xl:items-start xl:gap-12">
        <div className="mx-auto flex w-full max-w-[278px] justify-center xl:max-w-none xl:justify-start">
          <Image
            alt="Minh hoạ FAQ HelpMe"
            src="/faq-frame.png"
            width={832}
            height={716}
            className="h-auto w-full max-w-[278px] object-contain xl:max-w-[34rem]"
          />
        </div>

        <div className="mx-auto w-full max-w-[390px] pt-1 xl:mx-0 xl:max-w-none xl:pt-2">
          <h2 className="text-center text-[24px] font-bold leading-[1.35] text-[var(--hm-ink)] xl:text-[clamp(2.7rem,4.5vw,4rem)] xl:font-extrabold xl:leading-[1.18] xl:tracking-[-0.045em]">
            Câu hỏi thường gặp
          </h2>

          <div className="mt-4 divide-y divide-[var(--hm-line)] xl:mt-10">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item py-4 xl:py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 xl:gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="max-w-[57rem] text-left text-[16px] font-bold leading-[1.45] text-[var(--hm-ink)] xl:text-[1.55rem] xl:font-extrabold xl:leading-[1.55]">
                    {faq.question}
                  </span>
                  <CaretDownIcon className="faq-chevron mt-0.5 size-5 shrink-0 text-[var(--hm-ink)] transition-transform duration-200 xl:mt-1 xl:size-6" />
                </summary>
                <p className="mt-2 max-w-[54rem] pr-1 text-[14px] leading-[1.45] text-[var(--hm-muted)] xl:mt-4 xl:pr-4 xl:text-[1.25rem] xl:leading-8">
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
      <div className="mx-auto max-w-[390px] lg:hidden">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--hm-line)] bg-white px-5 pb-0 pt-8 text-center shadow-[0_18px_40px_rgba(61,61,61,0.08)]">
          <h2 className="mx-auto max-w-[312px] text-[36px] font-extrabold leading-[1.14] tracking-[-0.04em] text-[var(--hm-ink)]">
            Đừng phó mặc cho <span className="text-[var(--hm-orange)]">rủi ro</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-[310px] text-[16px] leading-[1.5] text-[var(--hm-ink)]">
            Chuẩn bị hồ sơ y tế khẩn cấp ngay hôm nay để tự bảo vệ chính mình và những người thân yêu.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-[18px] font-bold leading-none text-[var(--hm-ink)]">Tải HelpMe miễn phí</p>
            <div className="flex flex-wrap justify-center gap-3">
              <StoreButton store="google" href="#footer" border compact />
              <StoreButton store="apple" href="#footer" border compact />
            </div>
          </div>

          <div className="relative mt-8 h-[292px] overflow-hidden">
            <div className="pointer-events-none absolute inset-x-[-10%] bottom-[-76px] h-[248px] rounded-[50%] border border-[rgba(255,119,0,0.08)] bg-[rgba(255,240,227,0.6)]" />
            <div className="pointer-events-none absolute inset-x-[4%] bottom-[-92px] h-[220px] rounded-[50%] border border-[rgba(255,119,0,0.08)] bg-[rgba(255,248,242,0.82)]" />
            <div className="absolute inset-x-0 bottom-0 mx-auto h-[220px] w-full max-w-[326px] overflow-hidden rounded-[30px]">
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
      </div>

      <div className="mx-auto hidden max-w-[1792px] overflow-hidden rounded-[20px] border border-[var(--hm-line)] bg-white lg:block">
        <div className="relative h-[441px] overflow-hidden">
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
      <div className="mx-auto max-w-[390px] rounded-t-[52px] bg-[var(--hm-green)] px-4 pb-8 pt-7 text-white lg:hidden">
        <div className="mx-auto w-full max-w-[326px]">
          <BrandMark className="w-[112px]" />

          <div className="mt-5 h-px bg-white/30" />

          <p className="mt-5 text-[14px] font-bold leading-[1.6] text-white">
            Hơn cả một ứng dụng, HelpMe là nỗ lực vì một cộng đồng an toàn. Nơi công nghệ rút ngắn &quot;thời gian vàng&quot; cấp cứu, giúp mọi người dễ dàng dang tay hỗ trợ nhau trong những khoảnh khắc sinh tử.
          </p>

          <div className="mt-6 rounded-[20px] bg-white px-4 py-5 text-[var(--hm-ink)]">
            <h3 className="text-[18px] font-bold text-[var(--hm-green)]">Thông tin liên lạc</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                  <MapPinIcon className="size-8" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#8d8d8d]">Địa chỉ</p>
                  <p className="text-[14px] leading-6 text-[var(--hm-ink)]">
                    Khu Công Nghệ Cao, TP. Thủ Đức, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                  <PhoneCallIcon className="size-8" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#8d8d8d]">Hotline</p>
                  <p className="text-[14px] text-[var(--hm-ink)]">1900 xxxx</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-10 items-center justify-center text-[var(--hm-green)]">
                  <MailIcon className="size-8" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#8d8d8d]">Email</p>
                  <p className="text-[14px] text-[var(--hm-ink)]">support@helpme.vn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[1fr_1px_1fr] gap-4 border-t border-white/30 pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-[18px] font-bold text-white">Giới thiệu</h3>
                <a
                  href="#about"
                  className="mt-3 block text-[14px] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  Về HelpMe
                </a>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-white">Liên kết nhanh</h3>
                <div className="mt-3 space-y-2">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-[14px] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/30" />

            <div className="space-y-4">
              <div>
                <h3 className="text-[18px] font-bold text-white">Dành cho đối tác</h3>
                <a
                  href="#partner"
                  className="mt-3 block text-[14px] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                >
                  Hợp tác với HelpMe
                </a>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-white">Hỗ trợ &amp; Pháp lý</h3>
                <div className="mt-3 space-y-2">
                  {legalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block text-[14px] text-white/90 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-[14px] font-bold text-white">Tải HelpMe miễn phí</p>
            <div className="flex flex-wrap justify-center gap-3">
              <StoreButton store="google" href="#footer" border compact />
              <StoreButton store="apple" href="#footer" border compact />
            </div>
          </div>

          <div className="mt-6 border-t border-white/30 pt-5">
            <div className="flex items-center justify-center gap-[18px]">
              <a
                href="#footer"
                aria-label="Facebook"
                className="flex size-[38px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href="#footer"
                aria-label="LinkedIn"
                className="flex size-[38px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="#footer"
                aria-label="YouTube"
                className="flex size-[38px] items-center justify-center rounded-full bg-white text-[var(--hm-green)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
              >
                <YoutubeIcon className="h-4 w-5" />
              </a>
            </div>

            <p className="mt-4 text-center text-[16px] font-bold text-white">© 2026 HelpMe. All rights reserved.</p>

            <div className="mt-4 flex justify-center">
              <a
                href="#top"
                className="inline-flex items-center gap-2 text-[16px] font-bold text-white transition-colors duration-200 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
              >
                <span>Cuộn lên đầu trang</span>
                <ArrowUpIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1792px] rounded-t-[6.25rem] bg-[var(--hm-green)] px-8 py-12 text-white lg:block lg:px-12 lg:py-14">
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
