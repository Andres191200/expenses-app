"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";

export enum EVariant {
  primary = "primary",
  secondary = "secondary",
}

export enum ETheme {
  default = "default",
  success = "success",
  danger = "danger",
  info = "info",
}

type TButton = {
  label: string;
  variant?: EVariant;
  small?: boolean;
  theme?: ETheme;
  onClick: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export default function Button({
  label,
  variant,
  onClick,
  theme,
  small,
  ...rest
}: TButton) {
  return (
    <div className={styles.buttonComponent}>
      <button
        onClick={onClick}
        className={`${styles[variant || EVariant.primary]} ${
          styles[theme || ETheme.default]
        } ${small ? styles.small : styles.normal}`}
        {...rest}
      >
        {label}
      </button>
    </div>
  );
}
