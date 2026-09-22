import StatCard from './StatCard.jsx'

export default function Dashboard({ tasks }) {
  const total = tasks.length
  const pending = tasks.filter((t) => t.status === 'Pending').length
  const inProgress = tasks.filter((t) => t.status === 'In Progress').length
  const completed = tasks.filter((t) => t.status === 'Completed').length

  return (
    <div className="flex flex-wrap gap-3">
      <StatCard label="Total tasks" value={total} />
      <StatCard label="Pending" value={pending} accentClass="text-amber" />
      <StatCard label="In progress" value={inProgress} accentClass="text-blue" />
      <StatCard label="Completed" value={completed} accentClass="text-accent" />
    </div>
  )
}
