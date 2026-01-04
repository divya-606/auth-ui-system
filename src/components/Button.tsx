type ButtonProps = {
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
