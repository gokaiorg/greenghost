import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: [
      'thc-honey-stick',
      'cbd-honey-stick',
      'thc-cookies',
      'thc-cookie',
      'thc-stroopwafel',
      'thc-gummies',
      'thc-nano-gummies',
      'thc-pretzels',
      'thc-brownie',
      'thc-brownies',
      'thc-muffin',
    ],
  });
}
