import Sendsay from 'sendsay-api'

const sendsay = new Sendsay({ apiKey: process.env.SENDSAY_API_KEY })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    try {
      const response = await sendsay.request({
        action: 'member.set',
        email,
        'newbie.confirm': '1',
        'newbie.letter.confirm': process.env.SENDSAY_CONFIRMATION_LETTER_ID,
        obj: {
          '-group': {
            [process.env.SENDSAY_LIST_ID]: '1',
          },
        },
      })
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
