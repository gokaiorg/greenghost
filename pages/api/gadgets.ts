import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    slugs: [
      'weed-th-rolling-papers-tips',
      'slimjim-rolling-papers-tips',
      'slimjim-rolling-papers',
      'wizman-rolling-papers',
      'wood-grinder-68mm-2-layer',
      'clipper-lighter',
      'classic-ice-bong',
      'metal-grinder-50mm-2-layer',
    ],
  });
}
