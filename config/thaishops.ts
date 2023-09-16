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
    name: 'Green Ghost',
    city: 'Phuket Town',
    logo: '/media/green-ghost-weed-shop-logo-g.webp',
    map: 'https://maps.app.goo.gl/VPwHCD9Wxj8ucXKG6',
  },
  {
    name: 'Le Versace',
    city: 'Patong',
    logo: '/media/green-ghost-weed-shop-le-versace.webp',
    map: 'https://maps.app.goo.gl/XDGUZ97YmG1SiUws5',
  },
  {
    name: 'Cafe de Paris',
    city: 'Patong',
    logo: '/media/green-ghost-weed-shop-cafe-de-paris.webp',
    map: 'https://maps.app.goo.gl/Ny2d86LjVVjyFoCr6',
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
];

export function getThaiShops(): ThaiShop[] {
  return thaishops;
}
