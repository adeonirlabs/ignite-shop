export default function Product() {
  return (
    <main className="mx-auto flex w-full max-w-6xl items-stretch gap-12 px-4">
      <div className="grid h-[656px] w-[656px] shrink-0 content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
        {/* <Image src={product.image} alt="" width={520} height={520} className="object-cover" /> */}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Camiseta</h1>
        <span className="text-2xl font-bold text-emerald-500">R$ 79,00</span>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, rem.</span>
        <button className="mt-auto rounded-lg bg-emerald-600 p-4 transition hover:bg-emerald-500">Comprar agora</button>
      </div>
    </main>
  )
}
