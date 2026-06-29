// Schematic, clearly-labelled project previews used in place of screenshots.
// These are diagrams/wireframes — intentionally free of fake metrics or data.
// Each is decorative + summarised by an aria-label on the wrapper.

type PreviewProps = { slug: string };

const chip =
  "rounded-md border border-border bg-bg/70 text-[10px] font-mono text-muted px-2 py-1 leading-none";
const wire = "rounded bg-surface-alt";

function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative h-full w-full overflow-hidden rounded-[14px] border border-border bg-surface transition-shadow duration-300 hover:shadow-[0_18px_50px_-26px_rgba(30,30,30,0.4)]"
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-alt/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-auto rounded bg-bg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
          Preview
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* MPIA — one database, seven surfaces. The most informative preview. */
function MpiaPreview() {
  const surfaces = [
    "Admin Web",
    "Admin Desktop",
    "Portal Web",
    "Portal Desktop",
    "Portal Mobile",
    "Field Mobile",
    "Website",
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {surfaces.map((s) => (
          <span key={s} className={chip}>
            {s}
          </span>
        ))}
        <span className="rounded-md border border-dashed border-border-strong bg-surface-alt/40 px-2 py-1 text-center font-mono text-[10px] text-muted">
          /api sync
        </span>
      </div>
      {/* converging lines into the shared DB */}
      <div className="flex flex-col items-center gap-1.5 pt-1">
        <div className="flex h-6 w-full items-end justify-around">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="w-px flex-1 bg-gradient-to-b from-transparent to-border-strong"
              style={{ marginInline: "0.35rem" }}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center rounded-lg border border-navy/25 bg-navy/5 py-2.5">
          <span className="font-mono text-[11px] font-medium tracking-wide text-navy">
            Central PostgreSQL · field app syncs from offline SQLite
          </span>
        </div>
      </div>
    </div>
  );
}

/* ElevateTech — PIM table on the left, store grid on the right. */
function ElevatePreview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          PIM
        </span>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`${wire} h-2 w-2 rounded-sm`} />
            <span className={`${wire} h-2 flex-1`} />
            <span className="h-2 w-6 rounded-sm bg-accent/25" />
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Store
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md border border-border bg-bg/60 p-1.5"
            >
              <span className={`${wire} block h-6 w-full rounded`} />
              <span className={`${wire} mt-1 block h-1.5 w-3/4`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* RedHailer — chat thread plus a QR hand-off block. */
function RedhailerPreview() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-3">
      <div className="space-y-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Chat
        </span>
        <span className={`${wire} block h-3 w-3/4 rounded-full`} />
        <span className="ml-auto block h-3 w-2/3 rounded-full bg-accent/20" />
        <span className={`${wire} block h-3 w-1/2 rounded-full`} />
        <span className="ml-auto block h-3 w-3/5 rounded-full bg-accent/20" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1.5 rounded-md border border-border bg-bg/60 px-3">
        <div className="grid grid-cols-3 gap-0.5">
          {[1, 0, 1, 0, 1, 0, 1, 1, 1].map((on, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-[2px] ${
                on ? "bg-navy" : "bg-border"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
          QR job
        </span>
      </div>
    </div>
  );
}

/* Rephina ERP — dashboard skeleton: sidebar, tiles, schematic chart, kanban. */
function ErpPreview() {
  return (
    <div className="flex gap-3">
      <div className="flex w-12 flex-col gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-sm ${i === 1 ? "bg-accent/30" : "bg-surface-alt"}`}
          />
        ))}
      </div>
      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="h-7 rounded-md border border-border bg-bg/60"
            />
          ))}
        </div>
        <div className="flex h-12 items-end gap-1.5 rounded-md border border-border bg-bg/40 p-2">
          {[40, 70, 45, 90, 60, 80].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-navy/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Gwensula — a lightweight marketing-page skeleton. */
function GwensulaPreview() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-16 rounded-sm bg-navy/25" />
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={`${wire} h-2 w-8`} />
          ))}
        </div>
      </div>
      <div className="rounded-md border border-border bg-bg/50 p-3">
        <span className="block h-2.5 w-2/3 rounded-sm bg-surface-alt" />
        <span className="mt-1.5 block h-2 w-1/2 rounded-sm bg-surface-alt" />
        <span className="mt-2.5 inline-block h-4 w-16 rounded bg-accent/25" />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} className={`${wire} h-8 rounded-md`} />
        ))}
      </div>
    </div>
  );
}

const previews: Record<
  string,
  { node: React.ReactNode; label: string }
> = {
  mpia: {
    node: <MpiaPreview />,
    label:
      "Diagram: seven MPIA surfaces — admin web and desktop, portal web, desktop and mobile, field mobile, and the website — converging on one central PostgreSQL database, with the field app syncing from offline SQLite.",
  },
  elevatetech: {
    node: <ElevatePreview />,
    label:
      "Wireframe: ElevateTech product information management table beside an online store product grid.",
  },
  redhailer: {
    node: <RedhailerPreview />,
    label:
      "Wireframe: RedHailer real-time chat thread next to a QR-code job hand-off block.",
  },
  "rephina-erp": {
    node: <ErpPreview />,
    label:
      "Wireframe: Rephina ERP dashboard with navigation sidebar, summary tiles, and a schematic chart.",
  },
  gwensula: {
    node: <GwensulaPreview />,
    label: "Wireframe: Gwensula's Pride marketing website layout.",
  },
};

export default function ProjectPreview({ slug }: PreviewProps) {
  const preview = previews[slug];
  if (!preview) return null;
  return <Frame label={preview.label}>{preview.node}</Frame>;
}
