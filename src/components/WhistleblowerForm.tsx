"use client";

import { useState, type FormEvent } from "react";

export function WhistleblowerForm() {
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/hinweisgeber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, contact: contact || undefined }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Meldung konnte nicht gesendet werden.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Meldung konnte nicht gesendet werden.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="border border-hp-border bg-white p-8">
        <p className="font-semibold text-hp-text">Vielen Dank. Ihre Meldung wurde übermittelt.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-hp-border bg-white p-6 sm:p-8">
      <label className="block">
        <span className="meta-label mb-2 block text-hp-muted">Ihre Meldung *</span>
        <textarea
          required
          minLength={10}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
        />
      </label>
      <label className="block">
        <span className="meta-label mb-2 block text-hp-muted">
          Kontaktmöglichkeit für Rückfragen (optional – für anonyme Meldung freilassen)
        </span>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full border border-hp-border bg-white px-4 py-3 text-sm text-hp-text outline-none focus:border-hp-text"
        />
      </label>
      {error ? <p className="text-sm text-hp-primary">{error}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="bg-hp-dark px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-hp-primary disabled:opacity-60"
      >
        {submitting ? "Wird gesendet …" : "Meldung senden"}
      </button>
    </form>
  );
}
