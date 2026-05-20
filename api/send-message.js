export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }
  
    try {
      const { message } = req.body
  
      if (!message) {
        return res.status(400).json({ error: 'Message is required' })
      }
  
      const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN
      const TG_CHAT_ID = process.env.TG_CHAT_ID
  
      if (!TG_BOT_TOKEN || !TG_CHAT_ID) {
        return res.status(500).json({ error: 'Telegram is not configured' })
      }
  
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TG_CHAT_ID,
            text: message,
            parse_mode: 'HTML',
          }),
        }
      )
  
      if (!telegramResponse.ok) {
        const errorData = await telegramResponse.json()
        return res.status(500).json({
          error: 'Telegram API error',
          details: errorData,
        })
      }
  
      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Send message error:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }