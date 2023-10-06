import { stripe } from '~/utils/stripe'

export async function POST(request: Request) {
  const body = await request.json()
  const { id, priceId } = body

  if (!id || !priceId) {
    return new Response('Invalid request', { status: 400 })
  }

  const successUrl = `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.BASE_URL}/products/${id}`

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price: priceId,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return new Response(JSON.stringify(session.url), {
    status: 201,
  })
}
