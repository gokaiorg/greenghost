import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticUrls = [
    '/',
    '/about',
    '/best-weed-shops-thailand',
    '/cannabis-club',
    '/contact',
    '/crypto-weed-shop-cashback',
    '/crypto-weed-shop-partners',
    '/crypto-weed-shop-relax-and-earn',
    '/install-xportal-app',
    '/jobs',
    '/locations',
    '/menu',
    '/menu/buds',
    '/menu/concentrates',
    '/menu/edibles',
    '/menu/gadgets',
    '/menu/pre-rolls',
    '/nft',
    '/phuket-cannabis-cup',
    '/profile',
    '/sitemap',
    '/strains',
    '/weed',
    '/weed-delivery-phuket',
    '/weed-drive-thru-phuket',
    '/weed-grower',
    '/wholesale',
  ];
  res.status(200).json(staticUrls);
}
