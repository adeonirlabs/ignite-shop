import { Details } from '~/features/details'

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl items-stretch gap-12 px-4">
      <Details id={id} />
    </main>
  )
}
