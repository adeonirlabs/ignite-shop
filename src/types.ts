export interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
  priceId: string
}

export interface Success {
  customer: string
  product: Product
}

export interface Product {
  name: string
  image: string
}
