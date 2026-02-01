import Link from "next/link";
import { getContactsData } from "@/lib/bigquery";
import { sanitizeUrl } from "@/lib/utils/url";
import {
  Phone,
  Mail,
  Instagram,
  Send,
  MessageCircle,
  ExternalLink,
} from "lucide-react";


const getIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("whatsapp"))
    return <MessageCircle className="w-6 h-6" />;
  if (lowerName.includes("messenger"))
    return <MessageCircle className="w-6 h-6" />;
  if (lowerName.includes("instagram")) return <Instagram className="w-6 h-6" />;
  if (lowerName.includes("telegram")) return <Send className="w-6 h-6" />;
  if (lowerName.includes("mail")) return <Mail className="w-6 h-6" />;
  if (lowerName.includes("phone") || lowerName.match(/^\+?\d/))
    return <Phone className="w-6 h-6" />;
  return <ExternalLink className="w-6 h-6" />;
};

export default async function ContactList() {
  const contacts = await getContactsData();

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto"
      aria-label="Contact Methods List"
    >
      {contacts.map((contact) => (
        <li key={contact.name} className="list-none">
          <Link
            href={sanitizeUrl(contact.link)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-black border-2 border-[#13DE00]/30 hover:border-[#13DE00] hover:bg-[#13DE00]/13 transition-all duration-300"
            title={`Contact us via ${contact.name}`}
          >
            <div className="text-[#13DE00] group-hover:scale-110 transition-transform duration-300">
              {getIcon(contact.name)}
            </div>
            <span className="text-lg font-bold text-white group-hover:text-[#13DE00] transition-colors font-pixel">
              {contact.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
