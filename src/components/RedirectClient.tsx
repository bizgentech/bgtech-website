'use client'

import { useEffect } from 'react'
import Link from 'next/link'

// Client-side redirect for renamed routes. Next.js redirects() in next.config
// do NOT apply to `output: export`, so we prerender a minimal notice and move
// the visitor to the new URL on load. A visible link is the no-JS fallback.
export default function RedirectClient({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-6 max-w-md">
        <p className="text-text-gray text-base mb-5">
          This service page has moved. Continue to the updated service page.
        </p>
        <Link href={to} className="btn-primary px-6 py-3 rounded-xl text-sm inline-block">
          Continue to the updated service page
        </Link>
      </div>
    </section>
  )
}
