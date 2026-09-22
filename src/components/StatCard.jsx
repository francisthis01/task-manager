export default function StatCard({ label, value, accentClass }) {
  return (
    <div className="flex-1 min-w-[130px] border border-line bg-white px-5 py-4">
      <p className="text-sm text-muted">{label}</p>
      <p className={`font-display text-3xl font-semibold mt-1 ${accentClass || 'text-ink'}`}>
        {value}
      </p>
    </div>
  )
}
