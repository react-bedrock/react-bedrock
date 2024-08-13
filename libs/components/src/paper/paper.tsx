import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from './paper.module.css';

export type PaperCorners = "rounded" | "square";

export type PaperProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  corners?: PaperCorners;
}

export function Paper(props: PaperProps) {
  const { corners = "rounded", children, ...rest } = props;

  function getStyles(): string {
    const styleStrings = [
      styles[corners]
    ];

    return styleStrings.join(' ');
  }
  
  return (
    <div className={getStyles()} {...rest}>
      {children}
    </div>
  )
}
