"use client"
import Image from "next/image"
import imglogo from '../../../public/assets/ui/logo-black.png'
import { HeaderIcon } from "./header-icon"
import Link from "next/link"
import { useState } from "react"
import { HeaderSearch } from "./header-search"

type MenuItem = {
  label: string;
  href: string;
}

export function Header() {
  const menu = [
    { label: 'Camisa', href: '/categories/camisa' },
    { label: 'Kits', href: '/categories/kits' }
  ];

  // event to open menu mobile
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="bg-black text-white text-center p-4">
        <strong>FRETE GRÁTIS</strong> para todo o Nordeste nas compras acima de  8999,00 MZN.  <strong>APROVEITA!</strong>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6">

        <div className="flex items-center">
          <div className="w-32">
            <Link href={'/'}>
              <Image
                src="/assets/ui/logo-black.png"
                alt="B7store"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex-1 ">
            <div className="w-full hidden md:flex items-center px-6 gap-6">
              <div className="w-full hidden md:block">
                <ul className="flex gap-10 font-medium text-gray-500">
                  {menu.map(item => (
                    <li key={item.label}>
                      <Link key={item.label} href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={'/my-orders'}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="Perfil" />
            </Link>
            <Link href={'/cart'}>
              <HeaderIcon src="/assets/ui/shopping-bag-4-line.png" alt="Carrinho" />
            </Link>
            {/* click event to open menu mobile */}
            <div className="md:hidden" onClick={() => setMenuOpened(!menuOpened)}>
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="menu"
                selected={menuOpened}
                srcSelected='/assets/ui/menu-line-white.png'
              />
            </div>
          </div>
        </div>
      </div>
      {
        menuOpened &&
        <div className="md:hidden pb-6">
          {menu.map(item => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div className="font-medium text-lg text-gray-500">{item.label}</div>
                <Image
                  src={'/assets/ui/arrow-up-right.png'}
                  alt="ir para categoria"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      }
      <div className="md:hidden p-6 pt-0">
        <HeaderSearch />
      </div>
    </header>
  )
}