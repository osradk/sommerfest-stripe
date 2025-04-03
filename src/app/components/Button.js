export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        px-6 py-3 
        bg-gradient-to-r from-indigo-600 to-purple-600 
        text-white font-semibold rounded-xl 
        hover:from-indigo-700 hover:to-purple-700 
        transition-all duration-200 
        shadow-md hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}
