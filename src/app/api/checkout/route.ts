import { stripe } from '~/utils/stripe'

export async function POST(request: Request) {
  const body: { cartItems: { priceId: string }[] } = await request.json()
  const { cartItems } = body

  if (!cartItems) {
    return new Response('Invalid request', { status: 400 })
  }

  const products = cartItems.map((item) => ({
    price: item.priceId,
    quantity: 1,
  }))

  const successUrl = `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.BASE_URL}/`

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: products,
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return new Response(JSON.stringify(session.url), {
    status: 201,
  })
}
