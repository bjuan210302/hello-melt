'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavBar = (props: { className?: string }) => {
  const pathname = usePathname()
  return (
    <div
      className={`${props.className} flex absolute gap-8
      flex-row rounded-full px-6 bottom-10
      left-6 py-2 shadow-lg
      2xl:left-1/2 2xl:-translate-x-1/2
      drop-shadow-2xl
      text-[#101828] font-normal
      border-2 border-indigo-300`}
    >
      <Link className={`${pathname === '/' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`} href="/">Home</Link>

      <Link className={`${pathname === '/tasks' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`} href="tasks">
        <span className="tracking-widest opacity-40">/</span>
        tasks
      </Link>
      <Link className={`${pathname === '/route3' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`} href="route3">
        <span className="tracking-widest opacity-40">/</span>
        route3
      </Link>
      <Link className={`${pathname === '/route4' ? 'text-indigo-300' : ''} hover:text-indigo-300 transition-all`} href="route4">
        <span className="tracking-widest opacity-40">/</span>
        route4
      </Link>
    </div>
  )
}