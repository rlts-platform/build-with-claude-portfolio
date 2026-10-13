/**
 * Build with Claude portfolio sample — adapted learning-progress card.
 * Uses simple local types and presentation props; no course content or services included.
 */
type LearningStatus = "not-started" | "in-progress" | "submitted" | "reviewed";

type WeekCardProps = {
  weekNumber: number;
  title: string;
  summary: string;
  status: LearningStatus;
  onOpen?: () => void;
};

const statusLabel: Record<LearningStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  submitted: "Submitted",
  reviewed: "Reviewed",
};

export default function WeekCard({
  weekNumber,
  title,
  summary,
  status,
  onOpen,
}: WeekCardProps) {
  return (
    <article className="rounded-xl border border-neutral-700 bg-neutral-950 p-5 text-neutral-100">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
          Week {String(weekNumber).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-neutral-700 px-2 py-1 text-xs">
          {statusLabel[status]}
        </span>
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-neutral-400">{summary}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-4 text-sm font-medium underline underline-offset-4"
      >
        Open workspace
      </button>
    </article>
  );
}
