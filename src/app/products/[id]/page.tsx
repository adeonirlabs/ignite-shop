export default function Details({ params }: { params: { id: string } }) {
  return <h1 className="text-3xl font-bold">Product Details: {params.id}</h1>
}
