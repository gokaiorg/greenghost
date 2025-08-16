import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: ['rawai', 'karon', 'phuket', 'paris'], // Replace with real slugs
  });
}
