import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from './paper.module.css';

export type PaperCorners = "rounded" | "squared";
export type PaperShadow = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" ;
export type PaperVariant = "default" | "outlined";

export type PaperProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  corners?: PaperCorners;
  shadow?: PaperShadow;
  variant?: PaperVariant;
}

export function Paper(props: PaperProps) {
  const { corners = "rounded", shadow = "md", variant = "default", children, ...rest } = props;

  function getStyles(): string {
    const styleStrings = [
      styles.base,
      styles[corners],
      variant === "default" ? styles[`shadow-${shadow}`] : styles.outlined
    ];

    return styleStrings.join(' ');
  }
  
  return (
    <div className={getStyles()} {...rest}>
      {children}
    </div>
  )
}
