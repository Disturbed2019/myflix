import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/netflix_logo.svg'
const Navbar = () => {
 return (
  <header>
    <div className={'w-full flex justify-between items-center p-4 z-[100] absolute'}>
      <Link href={'/'}>
        <Image
          src={logo}
          alt={'logo'}
          width={167}
          priority
        />
      </Link>
      <div>
        <button className={'pr-4'}>Sign In</button>
        <button className={'bg-[#e50914] px-[17px] py-[7px] rounded cursor-pointer'}>Sign Up</button>
      </div>
    </div>
  
  </header>
 );
};

export default Navbar;