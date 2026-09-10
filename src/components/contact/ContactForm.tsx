import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = { name: "", email: "", message: "" };

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

function validate(values: FormValues) {
  const errors: Partial<FormValues> = {};
  if (!values.name.trim()) errors.name = "Please share your name.";
  if (!values.email.trim()) {
    errors.email = "Please share an email so I can reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look quite right.";
  }
  if (!values.message.trim()) errors.message = "Say a little about what you have in mind.";
  else if (values.message.trim().length < 10) errors.message = "A few more words would help.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (field: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      setState("error");
      return;
    }

    setState("loading");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setState("success");
      setValues(initialValues);
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-surface p-10 text-center">
        <CheckCircle2 className="text-accent" size={32} />
        <p className="font-display text-lg font-semibold text-text-primary">Message sent.</p>
        <p className="text-sm text-text-secondary">Thanks for reaching out — Saie will get back to you soon.</p>
        <Button variant="secondary" className="mt-2" onClick={() => setState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "w-full rounded-xl border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent",
            errors.name ? "border-red-400/60" : "border-border",
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "w-full rounded-xl border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent",
            errors.email ? "border-red-400/60" : "border-border",
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full resize-none rounded-xl border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent",
            errors.message ? "border-red-400/60" : "border-border",
          )}
          placeholder="What would you like to build or talk about?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {state === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-300">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            {FORM_ENDPOINT
              ? "Something went wrong sending your message — please try again, or email directly."
              : "The contact form isn't connected to an endpoint yet. Please reach out via email instead, or configure VITE_FORM_ENDPOINT."}
          </span>
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={state === "loading"}>
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </Button>
    </form>
  );
}
