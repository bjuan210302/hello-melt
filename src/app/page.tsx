'use client'

import { Poppins } from "next/font/google";
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
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="font-semibold text-[70px] text-[#101828]">
        Hello,
        <span className={`font-light text-[#717BBC] ml-4`}>
          {meltNodes}
        </span>
      </div>
      <Image className="hover:drop-shadow-[10px_0px_60px_rgba(113,123,188,0.80)] transition-all"
        src={"/Black-500.webp"} alt={"Melt Studio Logo"} width={144 * 1.2} height={144 * 1.2} />
    </main>
  );
}
