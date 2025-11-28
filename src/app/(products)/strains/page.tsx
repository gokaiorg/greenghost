import { Metadata } from 'next'
import StrainsClient from './StrainsClient'

export const metadata: Metadata = {
  title: 'Buy Premium Cannabis Strains Online - Green Ghost 🌿👻',
  description: 'Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain\'s unique characteristics and shop online now.',
  openGraph: {
    title: 'Buy Premium Cannabis Strains Online - Green Ghost 🌿👻',
    description: 'Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain\'s unique characteristics and shop online now.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Premium Cannabis Strains Online - Green Ghost 🌿👻',
    description: 'Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain\'s unique characteristics and shop online now.',
  },
  alternates: {
    canonical: '/strains',
  },
}

export default function StrainsPage() {
  return <StrainsClient />
}
