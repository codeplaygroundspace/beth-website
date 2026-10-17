"use client";

import { Dialog } from "@base-ui/react/dialog";

export default function CookieSettings() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="footer-link cursor-pointer">Manage Cookies</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-header/70" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%_-_3rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 text-foreground shadow-xl focus:outline-none">
          <Dialog.Title className="text-balance text-2xl font-semibold">Cookie settings</Dialog.Title>
          <Dialog.Description className="mt-4 text-pretty leading-relaxed text-zinc-600">BETHFIT currently uses no optional analytics or advertising cookies. There are no optional cookies to enable or disable.</Dialog.Description>
          <Dialog.Close className="section-button mt-8 cursor-pointer">Done</Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
