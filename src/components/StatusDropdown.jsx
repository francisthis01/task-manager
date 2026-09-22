import { useEffect, useRef, useState } from 'react'
import { STATUSES } from '../data/mockTasks.js'

const STATUS_DOT = {
  Pending: 'bg-amber',
  'In Progress': 'bg-blue',
  Completed: 'bg-accent',
}

const STATUS_TEXT = {
  Pending: 'text-amber',
  'In Progress': 'text-blue',
  Completed: 'text-accent',
}

export default function StatusDropdown({ value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(status) {
    onChange(status)
    setIsOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label}
        className="flex items-center gap-2 border border-line bg-white pl-2.5 pr-2 py-1.5 text-xs font-medium hover:border-ink/30 focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
      >
        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[value]}`} />
        <span className={STATUS_TEXT[value]}>{value}</span>
        <svg
          className={`h-3 w-3 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-1 w-36 border border-line bg-white shadow-sm"
        >
          {STATUSES.map((status) => (
            <li key={status} role="option" aria-selected={status === value}>
              <button
                type="button"
                onClick={() => handleSelect(status)}
                className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs text-left hover:bg-paper transition-colors ${
                  status === value ? 'bg-paper' : ''
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} />
                <span className={STATUS_TEXT[status]}>{status}</span>
                {status === value && (
                  <svg className="h-3 w-3 ml-auto text-ink" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}