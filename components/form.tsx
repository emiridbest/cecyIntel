/**
 * Small form primitives shared by the contact and survey forms.
 * Each field wires its own label, error message, and aria attributes.
 */

const inputClass =
  "w-full border border-line bg-ink-raised px-4 py-3 text-sm text-body placeholder:text-muted/60 focus:border-gold";

export function TextField(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${props.id}-error`;
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm text-body">
        {props.label}
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={props.error ? errorId : undefined}
        className={inputClass}
      />
      {props.error && (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-gold-light">
          {props.error}
        </p>
      )}
    </div>
  );
}

export function TextArea(props: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  rows?: number;
}) {
  const errorId = `${props.id}-error`;
  return (
    <div>
      <label htmlFor={props.id} className="mb-2 block text-sm text-body">
        {props.label}
      </label>
      <textarea
        id={props.id}
        name={props.id}
        rows={props.rows ?? 5}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={props.error ? errorId : undefined}
        className={inputClass}
      />
      {props.error && (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-gold-light">
          {props.error}
        </p>
      )}
    </div>
  );
}

/** A fieldset of checkboxes (multi-select) or radios (single-select). */
export function ChoiceGroup(props: {
  legend: string;
  name: string;
  options: readonly string[];
  multiple: boolean;
  selected: string[];
  onChange: (selected: string[]) => void;
  error?: string;
}) {
  const errorId = `${props.name}-error`;
  return (
    <fieldset aria-describedby={props.error ? errorId : undefined}>
      <legend className="mb-3 text-sm text-body">{props.legend}</legend>
      <div className="space-y-2">
        {props.options.map((opt) => {
          const checked = props.selected.includes(opt);
          return (
            <label
              key={opt}
              className={`flex cursor-pointer items-start gap-3 border px-4 py-3 text-sm transition-colors ${
                checked ? "border-gold text-body" : "border-line text-muted hover:border-gold-deep"
              }`}
            >
              <input
                type={props.multiple ? "checkbox" : "radio"}
                name={props.name}
                value={opt}
                checked={checked}
                onChange={() =>
                  props.onChange(
                    props.multiple
                      ? checked
                        ? props.selected.filter((s) => s !== opt)
                        : [...props.selected, opt]
                      : [opt],
                  )
                }
                className="mt-0.5 accent-[#d4a03c]"
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
      {props.error && (
        <p id={errorId} role="alert" className="mt-2 text-sm font-medium text-gold-light">
          {props.error}
        </p>
      )}
    </fieldset>
  );
}

export function SubmitButton(props: { children: React.ReactNode; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={props.loading}
      className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light disabled:cursor-wait disabled:opacity-60"
    >
      {props.loading ? "Sending…" : props.children}
    </button>
  );
}
