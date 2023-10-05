import Image from 'next/image'

import logo from '~/assets/logo.svg'

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-6xl p-4">
      <Image src={logo} alt="" width={130} height={52} />
    </header>
  )
}
