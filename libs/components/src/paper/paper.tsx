import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import styles from './paper.module.css';

type PaperProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren & {
  corners?: "rounded" | "square";
}

export function Paper(props: PaperProps) {
  const { corners = "rounded", children } = props;
  
  return (
    <div>{children}</div>
  )
}
