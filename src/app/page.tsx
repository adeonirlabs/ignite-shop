import { Carousel } from '~/features/carousel'
import { cn } from '~/utils/classNames'

export default function Home() {
  return (
    <main
      className={cn(
        'ml-auto flex w-full items-center justify-start px-4',
        'min-h-[656px] max-w-[calc(100vw-((100vw-1152px)/2))]',
      )}
    >
      <Carousel />
    </main>
  )
}
