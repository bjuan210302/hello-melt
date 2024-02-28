'use client'
import { usePathname } from 'next/navigation'

export const NavBar = (props: {className?: string}) => {
  const pathname = usePathname()
  return (
    <div
      className={`${props.className} flex absolute gap-8
      font-normal
      flex-row rounded-full px-6 bottom-6
      left-6 py-2 shadow-lg
      2xl:left-1/2 2xl:-translate-x-1/2
      drop-shadow-2xl
      text-white
      bg-[#FF575A]`}
    >
      <a
        href="route1">
        <span className="tracking-widest text-indigo-200">/</span>route1</a>
      <a
        href="route2"
      ><span className="tracking-widest text-indigo-200">/</span>route2</a>
      <a
        href="route3"
      ><span className="tracking-widest text-indigo-200">/</span>route3</a>
      <a
        href="route4"
      ><span className="tracking-widest text-indigo-200">/</span>route4</a>
    </div>
  )
}