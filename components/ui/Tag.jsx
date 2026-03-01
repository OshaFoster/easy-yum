export default function Tag({ label }) {
  return (
    <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 tracking-wide">
      {label}
    </span>
  );
}
