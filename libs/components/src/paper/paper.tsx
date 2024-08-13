import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from './paper.module.css';

export type PaperCorners = "rounded" | "square";
export type PaperElevation = "0" | "1" | "2" | "3" | "4" | "6" | "8" | "12" | "16" | "24";
export type PaperVariant = "default" | "outlined";

export type PaperProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  corners?: PaperCorners;
  elevation?: PaperElevation;
  variant?: PaperVariant;
}

export function Paper(props: PaperProps) {
  const { corners = "rounded", elevation = "4", variant = "default", children, ...rest } = props;

  function getStyles(): string {
    const styleStrings = [
      styles.base,
      styles[corners],
      variant === "default" ? styles[`elevation-${elevation}`] : styles.outlined
    ];

    return styleStrings.join(' ');
  }
  
  return (
    <div className={getStyles()} {...rest}>
      {children}
    </div>
  )
}
