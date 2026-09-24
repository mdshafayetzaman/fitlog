
'use client'

import Image from 'next/image'
import logo from '@/app/assets/logo.png'

export default function Footer() {
  return (
    <footer className="mt-16  ">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Image
              src={logo}
              alt="FitLog logo"
              width={28}
              height={28}
              className="object-contain"
            />

            <span className="font-display text-lg font-bold tracking-wider text-[var(--text)]">
              FITLOG
            </span>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] sm:text-right sm:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  )
}

