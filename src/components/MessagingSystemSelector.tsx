'use client'

import { useState } from 'react'
import { CartItem } from '@/lib/types'

interface MessagingSystemSelectorProps {
  items: CartItem[]
  total: number
  onClose: () => void
}
const MessagingSystemSelector = ({ items, total, onClose }: MessagingSystemSelectorProps) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'messenger' | 'instagram' | 'telegram'>('whatsapp')

  const getItemTotal = (item: CartItem) => {
    if (item.menuType === 'Buds' || item.menuType === 'Pre-rolls') {
      if (item.quantity >= 30) {
        return item.price * item.quantity * 0.875
      } else {
        const free = Math.floor(item.quantity / 5)
        const paid = item.quantity - free
        return item.price * paid
      }
    }
    return item.price * item.quantity
  }

  const orderDetails = `Name: ${name}\nLocation: ${location}\n\nOrder Details:\n${items
    .map((item) => {
      const itemTotal = getItemTotal(item);
      return `${item.quantity} x ${item.name} (${item.menuType}) - ${itemTotal}฿`;
    })
    .join('\n')}\n\nTotal: ${total}฿`

  const getMessagingLink = () => {
    const message = encodeURIComponent(orderDetails)

    switch (activeTab) {
      case 'whatsapp':
        return `https://wa.me/66874201144?text=${message}`
      case 'messenger':
        return `https://m.me/your_page_username?text=${message}`
      case 'instagram':
        return `https://www.instagram.com/direct/new/?text=${message}`
      case 'telegram':
        return `https://t.me/your_username?text=${message}`
      default:
        return `https://wa.me/66874201144?text=${message}`
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !location) return
    window.open(getMessagingLink(), '_blank')
    onClose()
  }

  return (
    <div className="fixed text-sm inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="border-4 border-[#13DE00] shadow-xl max-w-lg w-full max-h-[95vh] overflow-hidden flex flex-col bg-black">
        <div className="flex justify-between items-center p-4 bg-[#13DE00] border-b-4 border-[#13DE00]">
          <h2 className="text-base md:text-lg font-bold text-black">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 text-2xl cursor-pointer font-pixel"
            aria-label="Close order messaging selector"
          >
            X
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto bg-black text-white">

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-white mb-1">
                Pinned location (Maps Link) *
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="https://maps.app.goo.gl/..."
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
                required
              />
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-medium text-white mb-2">Send Order Via</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('whatsapp')}
                  className={`p-3 flex items-center justify-center space-x-2 text-white ${activeTab === 'whatsapp' ? 'bg-black border-2 border-[#13DE00]' : 'bg-black border-2 border-gray-600'
                    } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('messenger')}
                  className={`p-3 flex items-center justify-center space-x-2 text-white ${activeTab === 'messenger' ? 'bg-black border-2 border-[#13DE00]' : 'bg-black border-2 border-gray-600'
                    } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>Messenger</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('instagram')}
                  className={`p-3 flex items-center justify-center space-x-2 text-white ${activeTab === 'instagram' ? 'bg-black border-2 border-[#13DE00]' : 'bg-black border-2 border-gray-600'
                    } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>Instagram</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('telegram')}
                  className={`p-3 flex items-center justify-center space-x-2 text-white ${activeTab === 'telegram' ? 'bg-black border-2 border-[#13DE00]' : 'bg-black border-2 border-gray-600'
                    } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>Telegram</span>
                </button>
              </div>
            </div>

            <div className="pt-4 flex space-x-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-black bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!name || !location}
                className="px-4 py-2 text-sm font-medium text-black bg-[#13DE00] hover:bg-white hover:text-[#13DE00] disabled:opacity-50 disabled:cursor-not-allowed border border-[#13DE00] cursor-pointer"
              >
                Send Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MessagingSystemSelector
