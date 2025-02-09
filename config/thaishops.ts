export type ThaiShop = {
  name: string;
  city: string;
  logo: string;
  map: string;
};

export const thaishops: ThaiShop[] = [
  {
    name: 'Green Ghost',
    city: 'Karon',
    logo: '/media/green-ghost-weed-shop-logo-g.webp',
    map: 'https://maps.app.goo.gl/S3PCi6LXSB3JJ9pKA',
  },
  {
    name: 'Green Ghost',
    city: 'Rawai',
    logo: '/media/green-ghost-weed-shop-logo-g.webp',
    map: 'https://maps.app.goo.gl/MwdJHK2UwfWCiSrS6',
  },
  {
    name: 'Le Versace',
    city: 'Patong',
    logo: '/media/green-ghost-weed-shop-le-versace.webp',
    map: 'https://maps.app.goo.gl/XDGUZ97YmG1SiUws5',
  },
  {
    name: 'Cosmic Temple Vibes',
    city: 'Rawai',
    logo: '/media/green-ghost-weed-shop-cosmic-temple-vibes.webp',
    map: 'https://maps.app.goo.gl/ybS9or9jDNjQPHjp8',
  },
  {
    name: 'Cosmic Temple Vibes HQ',
    city: 'Rawai',
    logo: '/media/green-ghost-weed-shop-cosmic-temple-vibes.webp',
    map: 'https://maps.app.goo.gl/Ng4iqGCrUkZZPyrz5',
  },
  {
    name: 'Sweed Dreams',
    city: 'Rawai',
    logo: '/media/green-ghost-weed-shop-sweed-dreams.webp',
    map: 'https://maps.app.goo.gl/Rf7NzFBecD2eH65E9',
  },
  {
    name: 'High Roller Club Thailand',
    city: 'Koh Kaeo',
    logo: '/media/best-weed-shops-thailand-high-roller-club-thailand.webp',
    map: 'https://maps.app.goo.gl/SGN4KU1XpPi5f9bs6',
  },
  {
    name: 'Green Lab Unicorn',
    city: 'Ratsada',
    logo: '/media/best-weed-shops-thailand-green-lab-unicorn.webp',
    map: 'https://maps.app.goo.gl/D7PBitdHFRbqp5ga8',
  },
  {
    name: 'Growland',
    city: 'Rawai',
    logo: '/media/best-weed-shops-thailand-growland.webp',
    map: 'https://maps.app.goo.gl/K9EnuAR5DJw4T3hh6',
  },
  {
    name: 'Green Lab',
    city: 'Patong',
    logo: '/media/best-weed-shops-thailand-greenlab.webp',
    map: 'https://maps.app.goo.gl/Cg9hp2Tfg6BwUFQv7',
  },
  {
    name: 'Green House Thailand',
    city: 'Bangkok',
    logo: '/media/best-weed-shops-thailand-green-house-thailand.webp',
    map: 'https://maps.app.goo.gl/nZXCLM2sL6zzNSb77',
  },
  {
    name: 'Phuket High',
    city: 'Rawai',
    logo: '/media/best-weed-shops-thailand-phuket-high.webp',
    map: 'https://maps.app.goo.gl/Q3b8K4Z5hW83rxfNA',
  },
];

export function getThaiShops(): ThaiShop[] {
  return thaishops;
}
