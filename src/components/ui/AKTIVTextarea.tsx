import React, { useId } from "react";
import AKTIVLabelWrapper from "./AKTIVLabelWrapper";
import { cn } from "../../lib/utils";

interface AKIVTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const AKIVTextarea: React.FC<AKIVTextareaProps> = ({
  label,
  className,
  helperText,
  error,
  ...rest
}) => {
  const id = useId();
  return (
    <AKTIVLabelWrapper
      label={label}
      htmlFor={id}
      helperText={helperText}
      error={error}
    >
      <textarea
        id={id}
        className={cn(
          "min-h-[100px] rounded-xl border border-white bg-transparent px-4 py-3 text-white",
          className,
        )}
        {...rest}
      />
    </AKTIVLabelWrapper>
  );
};
export default AKIVTextarea;
