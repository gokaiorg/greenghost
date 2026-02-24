import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/components/NavBurger";

export default function NavFooter({
    locale,
    items,
}: {
    locale: string;
    items: MenuItem[];
}) {
    const pathname = usePathname();
    const prefix = locale === "en" ? "" : `/${locale}`;

    return (
        <nav aria-label="Footer navigation">
            <ul
                className="flex flex-wrap justify-center md:justify-end gap-4 max-w-3xl w-full mx-auto md:mr-0 list-none m-0 p-0"
                aria-label="Footer links"
            >
                {items.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={`${prefix}${item.path}`}
                            className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === item.path || pathname?.startsWith(`${item.path}/`)
                                ? "bg-[#13DE00]/13 text-[#13DE00]"
                                : "text-black"
                                }`}
                            aria-label={locale === 'fr' && item.label_fr ? item.label_fr : (locale === 'en' && item.label_en ? item.label_en : item.label)}
                            title={locale === 'fr' && item.label_fr ? item.label_fr : (locale === 'en' && item.label_en ? item.label_en : item.label)}
                        >
                            {locale === 'fr' && item.label_fr ? item.label_fr : (locale === 'en' && item.label_en ? item.label_en : item.label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
