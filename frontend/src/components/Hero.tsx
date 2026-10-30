import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  bodyLang?: string;
  variant?: "home" | "page";
  children?: ReactNode;
};

function Hero({ eyebrow, title, body, bodyLang, variant = "page", children }: HeroProps) {
  return (
    <section className={variant === "home" ? "hero home-hero" : "page-hero"}>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {body ? <p lang={bodyLang}>{body}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export default Hero;
