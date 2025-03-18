import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: [
      'thaigreenlab',
      'cosmic-temple-vibes',
      'greenlabunicorn',
      'ohigho',
      'growland',
      'sweed-dreams',
      'cbd-cannabiz-farm',
      'buddy-bud-weed',
      'my-weed',
    ],
  });
}
