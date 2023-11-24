import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input {...props} className="text-gray-900 py-3 px-4 rounded-2xl border-none outline-0 max-w-xs md:max-w-sm w-full shadow-lg font-normal" />
  );
}