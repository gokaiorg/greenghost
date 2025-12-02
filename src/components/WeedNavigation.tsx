import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
    {
        title: 'Growers',
        href: '/growers',
        image: '/images/icons/growers-green-ghost.avif',
        description: 'Meet our premium cannabis growers'
    },
    {
        title: 'Seeds',
        href: '/seeds',
        image: '/images/icons/seeds-green-ghost.avif',
        description: 'Start your own growing journey'
    },
    {
        title: 'Strains',
        href: '/strains',
        image: '/images/icons/strains-green-ghost.avif',
        description: 'Explore our curated strain collection'
    }
];

export default function WeedNavigation() {
    return (
        <section className="py-12 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-pixel text-center">
                Explore <span className="text-[#13DE00]">More</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {navigationItems.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="group flex flex-col items-center p-6 bg-[#111] border border-gray-800 hover:border-[#13DE00] transition-all duration-300 hover:bg-[#13DE00]/5"
                    >
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#13DE00] transition-colors font-pixel mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-center text-sm group-hover:text-gray-300 transition-colors">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
