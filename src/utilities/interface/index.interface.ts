import { ButtonHTMLAttributes } from "react";

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type: "submit" | "button" | "reset";
}
