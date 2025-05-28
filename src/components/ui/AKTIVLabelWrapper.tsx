import { cn } from "../../lib/utils";

interface LabelWrapperProps {
  label?: string;
  children: React.ReactNode;
  htmlFor?: string;
  helperText?: string;
  error?: boolean;
}

const AKTIVLabelWrapper: React.FC<LabelWrapperProps> = ({
  label,
  children,
  htmlFor,
  helperText,
  error = false,
}) => {
  return (
    <div>
      {label ? (
        <label htmlFor={htmlFor} className="mb-3 flex text-base font-semibold">
          {label}
        </label>
      ) : null}
      {children}
      <p className={cn("mt-2 flex", cn({ "text-red-500": error }))}>
        {helperText}
      </p>
    </div>
  );
};

export default AKTIVLabelWrapper;
