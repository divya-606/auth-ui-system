import { useState } from "react";

type InputProps = {
  label: string;
  error?: string;
  showToggle?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  showToggle,
  type,
  ...props
}: InputProps) {
  const [show, setShow] = useState(false);

  const inputType =
    showToggle && type === "password"
      ? show
        ? "text"
        : "password"
      : type;

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          type={inputType}
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />

        {showToggle && type === "password" && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-2 text-sm text-blue-600"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
