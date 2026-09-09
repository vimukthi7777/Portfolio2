"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, ArrowRight } from "lucide-react";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent";

const initialValues: Values = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: Field, value: string): string | undefined {
  switch (field) {
    case "name":
      return value.trim().length >= 2
        ? undefined
        : "Please enter your name.";
    case "email":
      if (!value.trim()) return "Please enter your email.";
      return emailPattern.test(value.trim()) ? undefined : "Please enter a valid email address.";
    case "subject":
      return value.trim().length >= 3
        ? undefined
        : "Please add a short subject.";
    case "message":
      return value.trim().length >= 10
        ? undefined
        : "Message should be at least 10 characters.";
  }
}

const inputClasses = (hasError: boolean) =>
  [
    "focus-ring w-full border-0 border-b bg-transparent px-0 py-3 text-sm text-paper placeholder:text-paper/35",
    "transition-colors duration-200 rounded-none",
    hasError
      ? "border-red-400 text-red-300 focus:border-red-400"
      : "border-paper/30 focus:border-accent",
  ].join(" ");

interface FieldProps {
  id: Field;
  label: string;
  required?: boolean;
  type?: "text" | "email";
  values: Values;
  errors: Errors;
  onChange: (field: Field, value: string) => void;
  onBlur: (field: Field) => void;
}

function TextField({
  id,
  label,
  required,
  type = "text",
  values,
  errors,
  onChange,
  onBlur,
}: FieldProps) {
  const error = errors[id];
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 flex items-baseline justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/60"
      >
        <span>
          {label}
          {required ? (
            <span className="ml-1 text-accent" aria-hidden="true">
              ✱
            </span>
          ) : null}
        </span>
        <span className="text-[0.6rem] tracking-widest text-paper/30">
          {id.toUpperCase()}
        </span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={values[id]}
        onChange={(e) => onChange(id, e.target.value)}
        onBlur={() => onBlur(id)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClasses(Boolean(error))}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: Field) => {
    const error = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: Errors = {};
    (Object.keys(values) as Field[]).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) nextErrors[field] = error;
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    // Placeholder submit handler — wire this to your backend/email service.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setValues(initialValues);
  };

  if (status === "sent") {
    return (
      <div
        className="flex min-h-80 flex-col items-center justify-center border border-accent/40 p-10 text-center"
        role="status"
      >
        <span
          className="flex size-12 items-center justify-center border border-accent bg-accent font-mono text-2xl text-ink"
          aria-hidden="true"
        >
          ✓
        </span>
        <h3 className="text-display mt-6 text-3xl uppercase text-paper">
          Message sent
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-ring mt-7 inline-flex items-center gap-2 border border-paper/30 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Send another message
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          id="name"
          label="Name"
          required
          values={values}
          errors={errors}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="email"
          label="Email"
          required
          type="email"
          values={values}
          errors={errors}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="mt-6">
        <TextField
          id="subject"
          label="Subject"
          required
          values={values}
          errors={errors}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-1 flex items-baseline justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/60"
        >
          <span>
            Message
            <span className="ml-1 text-accent" aria-hidden="true">
              ✱
            </span>
          </span>
          <span className="text-[0.6rem] tracking-widest text-paper/30">
            DETAILS
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses(Boolean(errors.message))} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-red-300" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring group mt-8 inline-flex w-full items-center justify-between gap-4 bg-paper px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <span>Sending</span>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            <span>Send message</span>
            <Send
              className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.18em] text-paper/40">
        ✱ No newsletters. No spam. Just a reply.
      </p>
    </form>
  );
}