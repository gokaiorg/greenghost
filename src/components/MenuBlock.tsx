import Link from 'next/link'
import Image from 'next/image'

export default function MenuBlock() {
  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/icons/shop-our-weed-menu-green-ghost.avif"
            alt="Shop Our Weed Menu"
            width={420}
            height={105}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            <Link
              href="/menu"
              className="text-[#13DE00] hover:text-[#13DE00]/80 transition-colors duration-300"
              aria-label="Shop our cannabis menu"
              title="Shop Our Weed Menu"
            >
              Shop Our Weed Menu
            </Link>
          </h2>
          <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">Find the rarest strains, from top-tier selections to the cheapest weed in Phuket. Whether you seek premium quality or great value, we have something for everyone in our cannabis menu.</p>
        </div>
      </div>
    </div>
  )
}