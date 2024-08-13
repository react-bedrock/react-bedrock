import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from './paper.module.css';

type PaperProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  corners?: "rounded" | "square";
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
