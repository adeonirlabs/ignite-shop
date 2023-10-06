import type Stripe from 'stripe'

import { stripe } from '~/utils/stripe'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id

  const response = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  const product = {
    id: response.id,
    name: response.name,
    description: response.description,
    image: response.images[0],
    price: (response.default_price as Stripe.Price).unit_amount,
    priceId: (response.default_price as Stripe.Price).id,
  }

  return Response.json({ data: product })
}
