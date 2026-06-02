"use client";
import React from "react";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonVariantType = "primary" | "surface_blue" | "soft_blue";

type ButtonStylingType = {
  [key in ButtonVariantType]: {
    default: string;
    hover: string;
    disabled: string;
  };
};

const ButtonStyling: ButtonStylingType = {
  primary: {
    default: "bg-[var(--blue-600)] text-zinc-50",
    hover: "hover:bg-[var(--blue-700)] active:bg-[var(--blue-500)]",
    disabled: "",
  },
  soft_blue: {
    default: "bg-bg-soft-blue text-text-soft-blue ",
    hover: "hover:!bg-bg-soft-blue-hover",
    disabled: "",
  },
  surface_blue: {
    default:
      "bg-bg-surface-blue text-text-surface-blue shadow-[0px_0px_1px_var(--surface-accent-border)]",
    hover:
      "hover:!bg-bg-surface-blue hover:!shadow-[0px_0px_1px_var(--surface-accent-border-hover)]",
    disabled: "",
  },
};

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof ButtonStyling;
  disabled?: boolean;
}

export const DButton = ({
  children,
  className,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const getButtonStyling = (
    variant: keyof typeof ButtonStyling,
    disabled: boolean
  ) => {
    const tempVariant = ButtonStyling[variant];
    return `${tempVariant.default} ${!disabled ? tempVariant.hover : tempVariant.disabled}`;
  };

  const getTempButtonStyling = getButtonStyling(variant, disabled);

  return (
    <button
      className={cn(
        getTempButtonStyling,
        "flex justify-center items-center gap-2 group",
        className
      )}
    >
      {children}
    </button>
  );
};
