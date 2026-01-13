'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function MenuCategories() {
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  // Scroll active link into view on mount and pathname change
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector('a.text-black') as HTMLElement
      if (activeLink) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          activeLink.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          })
        }, 100)
      }
    }
  }, [pathname])

  return (
    <div className="w-full py-2 mb-2">
      <nav ref={navRef}>
        <ul
          className="flex space-x-4 whitespace-nowrap text-sm overflow-x-auto sm:overflow-visible sm:justify-center list-none m-0 p-0"
          aria-label="Menu categories"
        >
          <li>
            <Link
              href="/menu/buds"
              className={`px-2 py-1 transition-colors  ${pathname === '/menu/buds' ? 'text-black !bg-[#13DE00]' : 'text-[#13DE00] hover:bg-[#13DE00]/13'}`}
              title="Buds"
              aria-current={pathname === '/menu/buds' ? 'page' : undefined}
            >
              Buds
            </Link>
          </li>
          <li>
            <Link
              href="/menu/pre-rolls"
              className={`px-2 py-1 transition-colors  ${pathname === '/menu/pre-rolls' ? 'text-black !bg-[#13DE00]' : 'text-[#13DE00] hover:bg-[#13DE00]/13'}`}
              title="Pre-rolls"
              aria-current={pathname === '/menu/pre-rolls' ? 'page' : undefined}
            >
              Pre-rolls
            </Link>
          </li>
          <li>
            <Link
              href="/menu/concentrates"
              className={`px-2 py-1 transition-colors  ${pathname === '/menu/concentrates' ? 'text-black !bg-[#13DE00]' : 'text-[#13DE00] hover:bg-[#13DE00]/13'}`}
              title="Concentrates"
              aria-current={pathname === '/menu/concentrates' ? 'page' : undefined}
            >
              Concentrates
            </Link>
          </li>
          <li>
            <Link
              href="/menu/edibles"
              className={`px-2 py-1 transition-colors  ${pathname === '/menu/edibles' ? 'text-black !bg-[#13DE00]' : 'text-[#13DE00] hover:bg-[#13DE00]/13'}`}
              title="Edibles"
              aria-current={pathname === '/menu/edibles' ? 'page' : undefined}
            >
              Edibles
            </Link>
          </li>
          <li>
            <Link
              href="/menu/gadgets"
              className={`px-2 py-1 transition-colors  ${pathname === '/menu/gadgets' ? 'text-black !bg-[#13DE00]' : 'text-[#13DE00] hover:bg-[#13DE00]/13'}`}
              title="Gadgets"
              aria-current={pathname === '/menu/gadgets' ? 'page' : undefined}
            >
              Gadgets
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
