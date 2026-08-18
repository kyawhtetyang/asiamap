"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Unable to send inquiry.");

      form.reset();
      setStatus("success");
      setMessage("Your transport inquiry has been sent. AsiaMap will follow up with you.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send inquiry. Please call AsiaMap directly.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="inquiry-grid">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Phone <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" required maxLength={40} />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" maxLength={120} />
        </label>
        <label>
          Cargo type
          <input name="cargoType" maxLength={120} placeholder="e.g. cement, steel, container" />
        </label>
        <label>
          Pickup location <span aria-hidden="true">*</span>
          <input name="pickup" required maxLength={160} />
        </label>
        <label>
          Destination <span aria-hidden="true">*</span>
          <input name="destination" required maxLength={160} />
        </label>
      </div>
      <label>
        Transport details
        <textarea
          name="details"
          rows={5}
          maxLength={1500}
          placeholder="Container size, cargo quantity, preferred date, or anything else we should know."
        />
      </label>
      <div className="inquiry-submit-row">
        <button className="button primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Transport Inquiry"}
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}
