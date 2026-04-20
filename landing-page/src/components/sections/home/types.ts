import type { ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export type Faq = {
  question: string;
  answer: string;
};

export type LinkItem = {
  href: string;
  label: string;
};
