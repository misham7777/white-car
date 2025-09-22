'use client';

import { useEffect, useState } from "react";

const KEY = "cv_cookie_consent_v1";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  const handleReject = () => {
    localStorage.setItem(KEY, JSON.stringify({ analytics: false, t: Date.now() }));
    setOpen(false);
  };

  const handleAccept = () => {
    localStorage.setItem(KEY, JSON.stringify({ analytics: true, t: Date.now() }));
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-3xl rounded-xl bg-neutral-900 border border-neutral-700 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-200">
          We use essential cookies to run our site and optional analytics with your consent.
        </p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-lg bg-neutral-700 text-neutral-200 hover:bg-neutral-600 transition-colors"
            onClick={handleReject}
          >
            Reject
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
