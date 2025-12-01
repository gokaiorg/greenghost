'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import CartPopup from '@/components/CartPopup'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const { getItemCount } = useCart()
  const itemCount = getItemCount()
  const pathname = usePathname()
  const [isHydrated, setIsHydrated] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsHydrated(true)
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    // Close menu when scrolling
    const handleScroll = () => {
      setIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 text-white py-2 px-4 bg-black/80 backdrop-blur-sm border-b border-[#13DE00]/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex-shrink-0" title="Green Ghost Home">
            <Image
              src="/images/green-ghost-degen-weed-shop.avif"
              alt="Green Ghost"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto max-h-[69px]"
              priority
              style={{ height: 'auto' }}
            />
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-[#13DE00] transition-colors p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <ul
                className="fixed left-0 right-0 top-22 bg-black border-t border-b border-[#13DE00] shadow-lg py-1 z-50 md:absolute md:left-0 md:right-auto md:top-full md:mt-2 md:w-content md:border list-none m-0 p-0"
                aria-label="Mobile navigation menu"
              >
                <li>
                  <Link
                    href="/menu"
                    title="Explore our menu"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/menu' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Explore our menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delivery"
                    title="Get delivered"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/delivery' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get delivered
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wholesale"
                    title="Bulk ordering"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/wholesale' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bulk ordering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/payment"
                    title="Make a payment"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/payment' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Make a payment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/strains"
                    title="All the strains"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/strains' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All the strains
                  </Link>
                </li>
                <li>
                  <Link
                    href="/weed"
                    title="Learn about weed"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/weed' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learn about weed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    title="Cannabis culture"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname.startsWith('/about') ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cannabis culture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    title="We are hiring"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/jobs' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cannabis-club"
                    title="Join the club"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/cannabis-club' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join the club
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nft"
                    title="Mint your NFT"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/nft' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mint your NFT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations"
                    title="Visit our locations"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/locations' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Visit our locations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    title="Contact us now"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/10 hover:text-[#13DE00] whitespace-nowrap ${pathname === '/contact' ? 'bg-[#13DE00]/10 text-[#13DE00]' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us now
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <ul
            className="hidden md:flex items-center space-x-7 mr-5 list-none m-0 p-0"
            aria-label="Desktop navigation menu"
          >
            <li>
              <Link
                href="/menu"
                title="Menu"
                className={`hover:text-[#13DE00] transition-colors whitespace-nowrap font-medium ${pathname === '/menu' ? 'text-[#13DE00]' : ''}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/delivery"
                title="Delivery"
                className={`hover:text-[#13DE00] transition-colors whitespace-nowrap font-medium ${pathname === '/delivery' ? 'text-[#13DE00]' : ''}`}
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                title="Contact"
                className={`hover:text-[#13DE00] transition-colors whitespace-nowrap font-medium ${pathname === '/contact' ? 'text-[#13DE00]' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-[#13DE00] transition-colors relative cursor-pointer p-2"
              aria-label="Shopping cart"
            >
              Bag
              {isHydrated && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 !bg-[#13DE00] !text-black text-xs font-bold w-6 h-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
