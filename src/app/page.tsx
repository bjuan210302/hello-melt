'use client'

import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

const meltLetters = "Melt!".split('')
let currentLetter = 0
const meltRefs = [] as RefObject<HTMLSpanElement>[]

export default function Home() {
  const meltNodes = meltLetters.map(letter => {
    const ref = useRef<HTMLSpanElement>(null)
    meltRefs.push(ref)
    return <span key={letter} ref={ref}
      className={`transition duration-700`}>
      {letter}
    </span>
  })

  const brightLetterInterval2 = setInterval(() => {
    const keepIndex = currentLetter
    meltRefs[keepIndex].current?.classList.add('brightness-150')
    currentLetter = (currentLetter + 1) % meltLetters.length
    setTimeout(() => meltRefs[keepIndex].current?.classList.remove('brightness-150'), 500)
  }, 300)

  useEffect(() => {
    return () => {
      clearInterval(brightLetterInterval2)
    }
  }, [])
  return (
    <>
      <div className="font-semibold text-[70px] text-[#101828]">
        Hello,
        <span className={`font-light text-[#717BBC] ml-4`}>
          {meltNodes}
        </span>
      </div>
      <Image className="hover:scale-110 transition-all"
        src={"/Black-500.webp"} alt={"Melt Studio Logo"} width={144 * 1.2} height={144 * 1.2} />
    </>
  );
}
