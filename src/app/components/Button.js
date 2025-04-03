export default function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "w-full py-4 px-6 text-lg font-semibold rounded-xl transform transition-all duration-200 flex items-center justify-center";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
    secondary:
      "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 hover:scale-[1.02]",
    outline:
      "bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
