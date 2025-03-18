import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: [
      'dry-sift-hash',
      'bubble-hash',
      'pollen-hash',
      'pure-kief',
      'super-dry-hash',
    ],
  });
}
