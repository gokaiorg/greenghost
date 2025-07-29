import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: [
      'thaigreenlab',
      'greenlabunicorn',
      'growland',
      'sweed-dreams',
      'cbd-cannabiz-farm',
    ],
  });
}
