import Image from 'next/image'
import Link from 'next/link'

import navLogo from '../../../../../public/static/favicon/favicon-32x32.png'

const HeaderLogo = () => {
  return (
    <Link href='/' className='flex items-center justify-center gap-1'>
      <Image src={navLogo} width={50} height={50} alt="navLogo" />
    </Link>
  )
}

export default HeaderLogo
