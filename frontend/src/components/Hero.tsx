import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  variant?: "home" | "page";
  children?: ReactNode;
};

function Hero({ eyebrow, title, body, variant = "page", children }: HeroProps) {
  return (
    <section className={variant === "home" ? "hero home-hero" : "page-hero"}>
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
        {children}
      </div>
    </section>
  );
}

export default Hero;
