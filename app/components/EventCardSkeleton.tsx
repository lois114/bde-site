export default function EventCardSkeleton() {
  return (
    <div className="group relative block overflow-hidden rounded-3xl border-[3px] border-black/5 bg-white animate-pulse dark:border-white/10 dark:bg-white/5">
      <div className="relative aspect-[16/10] w-full bg-black/10 dark:bg-white/10" />

      <div className="p-5 space-y-3">
        <div className="h-3 w-2/3 rounded bg-black/10 dark:bg-white/10" />
        <div className="h-5 w-5/6 rounded bg-black/10 dark:bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-black/10 dark:bg-white/10" />

        <div className="mt-4 flex gap-3">
          <div className="h-10 flex-1 rounded-xl bg-black/10 dark:bg-white/10" />
          <div className="h-10 flex-1 rounded-xl bg-black/10 dark:bg-white/10" />
        </div>
      </div>
    </div>
  )
}