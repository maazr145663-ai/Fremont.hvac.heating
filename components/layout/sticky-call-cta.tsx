import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/** Mobile-first sticky call bar; hidden from lg where header shows phone. */
export function StickyCallCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 p-[var(--space-3)] pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <Button href={SITE.phoneTel} variant="primary" className="w-full text-base">
        Call {SITE.phoneDisplay}
      </Button>
    </div>
  );
}
