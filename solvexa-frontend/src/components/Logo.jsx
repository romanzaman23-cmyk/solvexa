import { handleNavClick } from '../constants/navLinks'

const LOGO_SRC = '/solvexa-logo.png'

const sizes = {
  nav: 'h-14 sm:h-16 md:h-[4.5rem] lg:h-20 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[280px]',
  footer: 'h-28 sm:h-36 md:h-44 w-auto max-w-[220px] sm:max-w-[260px]',
  lg: 'h-60 sm:h-72 w-auto max-w-[340px]',
}

export default function Logo({ variant = 'nav', className = '', linkToHome = false, onClick }) {
  const img = (
    <img
      src={LOGO_SRC}
      alt="Solvexa — Digital Solutions Since 2020"
      className={`object-contain object-left bg-transparent ${sizes[variant] || sizes.nav} ${className}`}
      width={260}
      height={80}
      decoding="async"
      draggable={false}
    />
  )

  if (!linkToHome) return img

  return (
    <a
      href="#home"
      onClick={onClick || ((e) => handleNavClick(e, 'home'))}
      className="inline-flex items-center flex-shrink-0 cursor-pointer bg-transparent"
      aria-label="Solvexa — Home"
    >
      {img}
    </a>
  )
}
