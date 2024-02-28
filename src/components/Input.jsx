export default function Input({ label, invalid, ...props }) {
  return (
    <p>
      <label
        className={`${
          invalid
            ? "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400"
            : "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300"
        }`}
      >
        {label}
      </label>
      <input
        className={`${
          invalid
            ? "w-full px-3 py-2 leading-tight border rounded shadow text-red-500 border-red-300 bg-red-100"
            : "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
        }`}
        {...props}
      />
    </p>
  );
}
