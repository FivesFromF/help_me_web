import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Ambulance as PhAmbulance,
  ArrowSquareOut as PhArrowSquareOut,
  ArrowUp as PhArrowUp,
  CaretDown as PhCaretDown,
  Checks as PhChecks,
  Clock as PhClock,
  ClockCountdown as PhClockCountdown,
  ContactlessPayment as PhContactlessPayment,
  DeviceMobile as PhDeviceMobile,
  Envelope as PhEnvelope,
  EyeClosed as PhEyeClosed,
  FirstAidKit as PhFirstAidKit,
  Handshake as PhHandshake,
  Heartbeat as PhHeartbeat,
  House as PhHouse,
  IdentificationCard as PhIdentificationCard,
  MapPin as PhMapPin,
  PersonSimpleCircle as PhPersonSimpleCircle,
  PhoneCall as PhPhoneCall,
  PhoneX as PhPhoneX,
  Play as PhPlay,
  ScanSmiley as PhScanSmiley,
} from "@phosphor-icons/react/dist/ssr";

type IconProps = ComponentPropsWithoutRef<"svg">;

type BaseIconProps = IconProps & {
  children: ReactNode;
  viewBox?: string;
};

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function BaseIcon({
  children,
  className,
  viewBox = "0 0 32 32",
  ...props
}: BaseIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox={viewBox}
      className={cx("shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return <PhHouse aria-hidden="true" weight="regular" {...props} />;
}

export function DeviceMobileIcon(props: IconProps) {
  return <PhDeviceMobile aria-hidden="true" weight="regular" {...props} />;
}

export function HeartbeatIcon(props: IconProps) {
  return <PhHeartbeat aria-hidden="true" weight="regular" {...props} />;
}

export function HandshakeIcon(props: IconProps) {
  return <PhHandshake aria-hidden="true" weight="regular" {...props} />;
}

export function IdentificationCardIcon(props: IconProps) {
  return <PhIdentificationCard aria-hidden="true" weight="regular" {...props} />;
}

export function AmbulanceIcon(props: IconProps) {
  return <PhAmbulance aria-hidden="true" weight="regular" {...props} />;
}

export function EyeClosedIcon(props: IconProps) {
  return <PhEyeClosed aria-hidden="true" weight="regular" {...props} />;
}

export function PhoneBreakIcon(props: IconProps) {
  return <PhPhoneX aria-hidden="true" weight="regular" {...props} />;
}

export function ClockCountdownIcon(props: IconProps) {
  return <PhClockCountdown aria-hidden="true" weight="regular" {...props} />;
}

export function CheckDoubleIcon(props: IconProps) {
  return <PhChecks aria-hidden="true" weight="regular" {...props} />;
}

export function ScanFaceIcon(props: IconProps) {
  return <PhScanSmiley aria-hidden="true" weight="regular" {...props} />;
}

export function ContactlessIcon(props: IconProps) {
  return <PhContactlessPayment aria-hidden="true" weight="regular" {...props} />;
}

export function FirstAidIcon(props: IconProps) {
  return <PhFirstAidKit aria-hidden="true" weight="regular" {...props} />;
}

export function PlayTriangleIcon(props: IconProps) {
  return <PhPlay aria-hidden="true" weight="fill" {...props} />;
}

export function ExternalArrowIcon(props: IconProps) {
  return <PhArrowSquareOut aria-hidden="true" weight="regular" {...props} />;
}

export function CaretDownIcon(props: IconProps) {
  return <PhCaretDown aria-hidden="true" weight="regular" {...props} />;
}

export function MapPinIcon(props: IconProps) {
  return <PhMapPin aria-hidden="true" weight="regular" {...props} />;
}

export function PersonCircleIcon(props: IconProps) {
  return <PhPersonSimpleCircle aria-hidden="true" weight="fill" {...props} />;
}

export function ClockIcon(props: IconProps) {
  return <PhClock aria-hidden="true" weight="fill" {...props} />;
}

export function PhoneCallIcon(props: IconProps) {
  return <PhPhoneCall aria-hidden="true" weight="regular" {...props} />;
}

export function MailIcon(props: IconProps) {
  return <PhEnvelope aria-hidden="true" weight="regular" {...props} />;
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <path
        d="M18.2 10.2h2.5V6.6h-2.5c-3.2 0-5.2 1.8-5.2 5v2h-2.3v3.7H13v8.1h4v-8.1h3.1l.6-3.7H17V12c0-1 .6-1.8 1.2-1.8Z"
        fill="white"
      />
    </BaseIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <rect x="9" y="12" width="3.4" height="10" rx="1" fill="white" />
      <circle cx="10.7" cy="9.4" r="1.7" fill="white" />
      <path
        d="M15.4 12h3.3v1.4c.7-1 1.8-1.7 3.4-1.7 3 0 4.9 2 4.9 5.6V22h-3.5v-4.4c0-1.5-.6-2.4-1.9-2.4-1.4 0-2.2 1-2.2 2.4V22h-4V12Z"
        fill="white"
      />
    </BaseIcon>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 40 32">
      <rect width="40" height="32" rx="16" fill="currentColor" />
      <path d="m16.2 11.3 9 4.8-9 4.7v-9.5Z" fill="white" />
    </BaseIcon>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return <PhArrowUp aria-hidden="true" weight="regular" {...props} />;
}

export function GooglePlayMark(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 26 30">
      <path d="M2 1.8 16.4 16 2 28.2V1.8Z" fill="#34A853" />
      <path d="m16.4 16 3.9-3.9 4.7 2.6c.9.5.9 1.8 0 2.3L20.3 19.8 16.4 16Z" fill="#FBBC04" />
      <path d="M2 1.8 20.3 12.1 16.4 16 2 1.8Z" fill="#4285F4" />
      <path d="M2 28.2 16.4 16l3.9 3.8L2 28.2Z" fill="#EA4335" />
    </BaseIcon>
  );
}

export function AppleMark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M20.7 16.9c0-2.4 1.8-3.5 1.9-3.6a4.2 4.2 0 0 0-3.4-1.8c-1.4-.2-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.6 2.4 2.8 2.3 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.1-.8-2.1-3.4Z"
        fill="currentColor"
      />
      <path
        d="M18.2 9.9c.6-.8 1-1.9.9-2.9-.9 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1 0 2.2-.5 2.9-1.4Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function FeatureFaceIllustration(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 220 160">
      <circle cx="110" cy="78" r="54" fill="rgba(255,119,0,0.08)" />
      <rect
        x="49"
        y="17"
        width="122"
        height="122"
        rx="28"
        stroke="currentColor"
        strokeDasharray="9 8"
        strokeOpacity="0.3"
        strokeWidth="2.6"
      />
      <path
        d="M80 61v-8h8M140 61v-8h-8M80 95v8h8M140 95v8h-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle cx="110" cy="78" r="24" stroke="currentColor" strokeWidth="4" />
      <path
        d="M98.5 84.5c6.3 5.3 16.8 5.3 23 0M102.5 71h.2M117.3 71h.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </BaseIcon>
  );
}

export function FeatureNfcIllustration(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 220 160">
      <circle cx="110" cy="78" r="54" fill="rgba(0,189,132,0.08)" />
      <rect
        x="58"
        y="28"
        width="104"
        height="104"
        rx="24"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.4"
      />
      <rect
        x="81"
        y="41"
        width="58"
        height="78"
        rx="11"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M109.8 54a22.5 22.5 0 0 1 0 52M121.7 45a36.8 36.8 0 0 1 0 70"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="95" cy="80" r="8" fill="currentColor" />
    </BaseIcon>
  );
}

export function FeatureQrIllustration(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 220 160">
      <circle cx="110" cy="78" r="54" fill="rgba(255,119,0,0.08)" />
      <rect
        x="47"
        y="17"
        width="126"
        height="126"
        rx="28"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.4"
      />
      <rect x="71" y="41" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="4" />
      <rect x="120" y="41" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="4" />
      <rect x="71" y="90" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="4" />
      <path
        d="M122 91h10v10M142 91h6v6M122 107h6v11M133 108h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </BaseIcon>
  );
}

export function FaqIllustration(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 340 280">
      <path
        d="M60 34c0-10 7.7-18.4 17.7-19.1l120.7-8.7c11.3-.8 20.9 8.1 20.9 19.4v158.8c0 10.7-8.7 19.4-19.4 19.4H79.4c-10.7 0-19.4-8.7-19.4-19.4V34Z"
        fill="white"
        stroke="var(--hm-green)"
        strokeWidth="4"
      />
      <path
        d="M93 40.5c28.2-3.3 48.6-5.2 61.4-5.7"
        stroke="var(--hm-green)"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <text
        x="88"
        y="71"
        fill="var(--hm-ink)"
        fontFamily="var(--font-sans)"
        fontSize="34"
        fontWeight="800"
        transform="rotate(-7 88 71)"
      >
        FAQ
      </text>
      <path d="M104 98h74" stroke="#d9d9d9" strokeLinecap="round" strokeWidth="7" />
      <path d="M104 124h74" stroke="#d9d9d9" strokeLinecap="round" strokeWidth="7" />
      <path d="M104 150h74" stroke="#d9d9d9" strokeLinecap="round" strokeWidth="7" />
      <path d="M104 176h74" stroke="#d9d9d9" strokeLinecap="round" strokeWidth="7" />
      <g>
        <circle cx="83" cy="115" r="20" fill="var(--hm-green)" />
        <circle cx="83" cy="147" r="20" fill="var(--hm-green)" />
        <circle cx="83" cy="179" r="20" fill="var(--hm-green)" />
        <path
          d="M82.5 106.7c4.4 0 7.2 2.2 7.2 5.8 0 3.4-2.5 4.6-4.4 5.4-1.3.6-2.2 1.2-2.2 2.7v1.2M82.9 127.2h.2"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M82.5 138.7c4.4 0 7.2 2.2 7.2 5.8 0 3.4-2.5 4.6-4.4 5.4-1.3.6-2.2 1.2-2.2 2.7v1.2M82.9 159.2h.2"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M82.5 170.7c4.4 0 7.2 2.2 7.2 5.8 0 3.4-2.5 4.6-4.4 5.4-1.3.6-2.2 1.2-2.2 2.7v1.2M82.9 191.2h.2"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
      <g transform="translate(176 70)">
        <path
          d="M61.5 13.5c15.1 0 27.5 12.4 27.5 27.5 0 12.7-8.8 23.9-21.1 26.9 4.5 8.2 10.5 15.8 18.3 22.8 5.8 5.2 6.2 14.2.9 19.9-5.2 5.8-14.2 6.2-19.9.9-7.1-6.5-12.9-13.3-17.6-20.5-5.4 7.3-12.2 14.3-20.6 20.9-6 4.8-14.8 3.8-19.6-2.2-4.8-6-3.8-14.8 2.2-19.6 10.7-8.5 18.3-17 23.1-25.5C21 62.2 10 52.7 10 39.7 10 25.2 21.8 13.5 36.3 13.5c5.9 0 11.5 1.9 16.1 5.3a27.4 27.4 0 0 1 9.1-5.3Z"
          fill="white"
          stroke="var(--hm-green)"
          strokeWidth="4"
        />
        <circle cx="49.5" cy="40" r="25" fill="var(--hm-green)" />
        <path
          d="M28 81c15.3-10.6 28.3-15.7 38.9-15.2M33 114c5-9.7 10.5-17.3 16.4-22.7M68.7 88.7c-4.2 9.7-8.5 17.2-13 22.7"
          stroke="var(--hm-green)"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </g>
      <text
        x="248"
        y="40"
        fill="var(--hm-orange)"
        fontFamily="var(--font-sans)"
        fontSize="72"
        fontWeight="700"
      >
        ?
      </text>
      <text
        x="286"
        y="92"
        fill="var(--hm-orange)"
        fontFamily="var(--font-sans)"
        fontSize="72"
        fontWeight="700"
      >
        ?
      </text>
    </BaseIcon>
  );
}

export function HeartbeatLine(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 620 160">
      <path
        d="M16 84h180l26-1 17-1 24-39 26 78 31-1h77l21-36 25 .5h141"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </BaseIcon>
  );
}
