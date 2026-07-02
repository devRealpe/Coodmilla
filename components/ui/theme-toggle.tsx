"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

export function ThemeToggle({ className, isScrolled = true }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn("w-10 h-10 rounded-full bg-white/10 animate-pulse", className)} />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-105 overflow-hidden",
        "border backdrop-blur-md shadow-sm",
        isDark || !isScrolled
          ? "bg-white/5 border-white/10 hover:bg-white/20 text-white" 
          : "bg-black/5 border-black/10 hover:bg-black/10 text-black",
        className
      )}
      aria-label="Alternar tema"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0.5 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute flex items-center justify-center"
      >
        <Sun className={cn("w-5 h-5 drop-shadow-sm", !isDark && isScrolled ? "text-amber-600" : "text-amber-400")} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0.5,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-indigo-300 drop-shadow-sm" />
      </motion.div>
    </button>
  )
}
