import Link from "next/link"
import React from "react"
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
      <>
        <Spotlight
        className="-top-40 left-0 md:left-20 md:-top-20px"
        fill="white"
      />
      <div className="h-auto md:h-[40rem] w-full flex rounded-md flex-col items-start justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="text-4xl mt-20 md:mt-[-120px] md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 md:mb-5">MASTER THE ART OF PROGRAMMING</h1>
            <p className="text-wrap text-center w-[50%] m-auto">"Unlock your coding potential with our interactive learning platform. Master the art of programming with our comprehensive curriculum, real-world projects, and expert mentorship."</p>
            <div className="mt-4">
                <Button borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    <Link href={"/courses"}>
                        Explore Courses
                    </Link>
                </Button>
            </div>
        </div>
    </div>
</>
  )
}

export default HeroSection