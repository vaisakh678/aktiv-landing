import React, { forwardRef, useId } from "react";
import AKTIVLabelWrapper from "./AKTIVLabelWrapper";
import { Input } from "@/components/ui/input";
import { cn } from "../../lib/utils";

interface AKTIVInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const AKTIVInput = forwardRef<HTMLInputElement, AKTIVInputProps>(
  ({ label, className, helperText, error, ...rest }, ref) => {
    const id = useId();
    return (
      <AKTIVLabelWrapper
        label={label}
        htmlFor={id}
        helperText={helperText}
        error={error}
      >
        <Input
          ref={ref}
          className={cn(
            "min-h-[52px] rounded-xl border border-white",
            className,
          )}
          {...rest}
          id={id}
        />
      </AKTIVLabelWrapper>
    );
  },
);

export default AKTIVInput;
