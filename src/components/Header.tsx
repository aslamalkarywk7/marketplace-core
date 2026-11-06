/**
 * Header — Amazon-like top bar
 *
 *  🛒 SouqCore   [🔍 ابحث عن منتج، سيارة، عقار...]  👤  🛒(3)
 */

import Link from 'next/link'

interface HeaderProps {
  cartCount?: number
  userName?: string | null
}

export function Header({ cartCount = 0, userName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#131921] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          🛒 <span className="text-[#febd69]">SouqCore</span>
        </Link>

        {/* Search */}
        <form className="flex flex-1 items-center overflow-hidden rounded bg-white" action="/search">
          <select className="bg-gray-100 px-2 py-2 text-sm text-gray-700">
            <option>الكل</option>
            <option>عقارات</option>
            <option>سيارات</option>
            <option>منتجات</option>
          </select>
          <input
            name="q"
            className="flex-1 px-3 py-2 text-sm text-gray-900 focus:outline-none"
            placeholder="ابحث عن منتج، سيارة، عقار..."
          />
          <button className="bg-[#febd69] px-4 py-2 text-lg">🔍</button>
        </form>

        {/* Account */}
        <div className="hidden text-xs md:block">
          <p className="text-gray-300">مرحبا، {userName ?? 'زائر'}</p>
          <p className="font-semibold">حسابك</p>
        </div>

        {/* Cart */}
        <Link href="/cart" className="relative flex items-center gap-1 text-sm">
          <span className="text-2xl">🛒</span>
          <span className="absolute -left-1 top-0 rounded-full bg-[#febd69] px-1.5 text-xs font-bold text-[#131921]">
            {cartCount}
          </span>
        </Link>
      </div>

      {/* Category bar */}
      <nav className="bg-[#232f3e]">
        <ul className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2 text-sm">
          {['الرئيسية', 'عقارات', 'سيارات', 'منتجات', 'إلكترونيات', 'أثاث', 'خدمات', 'عروض اليوم'].map(c => (
            <li key={c} className="cursor-pointer whitespace-nowrap hover:underline"><a href={`/${c}`}>{c}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
