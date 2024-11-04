import { HTMLAttributes, PropsWithChildren } from "react";

import cn from "@/utils/cn";

type ChipProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export default function Chip({ children, className, ...divProps }: ChipProps) {
  return (
    <div
      {...divProps}
      className={cn(
        "rounded-lg bg-neutral-lightest px-2 py-1 text-sm font-semibold text-primary transition duration-300 ease-in-out",
        !!divProps.onClick && "cursor-pointer hover:bg-neutral-lighter",
        className
      )}
    >
      {children}
    </div>
  );
}
