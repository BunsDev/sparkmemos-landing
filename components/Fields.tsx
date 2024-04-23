import clsx from "clsx";
import { useId } from "react";

const formClasses =
  "block w-full appearance-none rounded-lg border border-stone-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm";

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-stone-900"
    >
      {children}
    </label>
  );
}

export function TextField({
  label,
  type = "text",
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"input">, "id"> & { label?: string }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"select">, "id"> & { label?: string }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  );
}
