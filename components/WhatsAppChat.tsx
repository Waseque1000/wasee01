'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppChat() {
  return (
    <FloatingWhatsApp
      phoneNumber="8801634847511"
      accountName="Waseque Arafat"
      chatMessage="👋 Hi! Feel free to message me anytime."
      placeholder="Write your message..."
      
      // UI Customization
      avatar="/okk.png" // put an image in /public
      statusMessage="Typically replies within minutes"
      darkMode={false}
      
      // Behavior
      allowEsc
      allowClickAway
      notification
      notificationSound
      
      // Style
      buttonStyle={{
        backgroundColor: '#25D366',
      }}
      chatBoxStyle={{
        borderRadius: '16px',
      }}
    />
  )
}
