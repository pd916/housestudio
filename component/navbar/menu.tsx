'use client'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MENU } from "@/content"
  import { MenuIcon } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = () => {
    const pathname = usePathname()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <MenuIcon className='text-white h-6 w-6'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black">
        <DropdownMenuLabel>
            <h2 className='rus text-white text-lg leading-none'>AbdullZZ/Studio</h2> 
            </DropdownMenuLabel>
        <DropdownMenuSeparator />
          <div className="flex flex-col items-center justify-start gap-2">

            {MENU.map((item) => (
              <Link href={item.href} key={item.label} className={`px-2 py-1 hover:bg-gray-700 w-full rounded transition-colors ${
                pathname === item.href ? 'bg-gray-800 w-full' : ''
              }`}>
                <h2 className="mono text-white ">
                {item.label}
                </h2>
                {/* {pathname === item.href && (
                <span
                  className="absolute left-0 bottom-1 h-[3px] bg-yellow-500 rounded-full transition-all duration-300"
                  style={{ width: `${item.label.length * 0.6}em` }}
                />
              )} */}
                </Link>
            ))}
                  </div>
        {/* <DropdownMenuCheckboxItem
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu
