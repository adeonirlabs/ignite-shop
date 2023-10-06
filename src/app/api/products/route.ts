import type Stripe from 'stripe'

import { stripe } from '~/utils/stripe'

export async function GET() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.images[0],
    price: (product.default_price as Stripe.Price).unit_amount,
  }))

  return Response.json({ data: products })
}
