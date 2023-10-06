import type { NextRequest } from 'next/server'
import type Stripe from 'stripe'

import { stripe } from '~/utils/stripe'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return new Response('Invalid request', { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const success = {
    customer: session.customer_details?.name,
    product: {
      name: (session.line_items?.data[0].price?.product as Stripe.Product).name,
      image: (session.line_items?.data[0].price?.product as Stripe.Product).images[0],
    },
  }

  return Response.json({ data: success })
}
