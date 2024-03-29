import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors?: FieldError;
};

export type { FormFieldProps };
