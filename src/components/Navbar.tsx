'use client'

import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { OuterContainer, InnerContainer } from './Container'

const NavLinks = [
  { label: 'About', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Projects', href: '/projects' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Uses', href: '/uses' },
]

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const headerRef = useRef<HTMLElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const isInitial = useRef(true)

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0
    const upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) return

      const { top, height } = headerRef.current.getBoundingClientRect()
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + upDelay}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        const offset = Math.max(upDelay, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${upDelay - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + upDelay}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) return

      const fromScale = 1
      const toScale = 36 / 64
      const fromX = 0
      const toX = 2 / 16

      const scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      const borderScale = 1 / (toScale / scale)
      const borderX = (-toX + x) * borderScale
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <header ref={headerRef} className='pointer-events-none relative z-50 flex flex-none flex-col' style={{
      height: 'var(--header-height)',
      marginBottom: 'var(--header-mb)',
    }}>
      {isHomePage && (
        <>
          <div ref={avatarRef} className='order-last mt-[calc(--spacing(16)-(--spacing(3)))]' />
          <OuterContainer className='top-0 order-last -mb-3 pt-3' style={{
            position: 'var(--header-position)' as React.CSSProperties['position']
          }}>
            <InnerContainer>
              <div className='top-(--avatar-top,--spacing(3)) w-full' style={{
                position: 'var(--header-inner-position)' as React.CSSProperties['position']
              }}>
                <div className='relative'>
                  <div className='absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10 ' style={{
                    opacity: 'var(--avatar-border-opacity, 0)',
                    transform:'var(--avatar-border-transform)'
                  }} />
                  <Link aria-label='home' href="/" className='block h-16 w-16 origin-left pointer-events-auto' style={{
                    transform:'var(--avatar-image-transform)'
                  }}>
                    <Image loading="eager" src="/avatar.webp" width="512" height="512" sizes='4rem' alt="avatar" className='rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16' style={{
                      color:'transparent'
                    }} />
                  </Link>
                </div>
              </div>
            </InnerContainer>
          </OuterContainer>
        </>
      )}
      <div className='top-0 z-10 h-16 pt-6' style={{
        position: 'var(--header-position)' as React.CSSProperties['position']
      }}>
        <OuterContainer className='top-(--header-top,--spacing(6)) w-full' style={{
          position: 'var(--header-inner-position)' as React.CSSProperties['position']
        }}>
          <InnerContainer>
            <div className='relative flex gap-4'>
              <div className='flex flex-1'>
                {!isHomePage && (
                  <div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10'>
                    <Link aria-label='home' href='/' className='pointer-events-auto'>
                      <Image
                        src='/avatar.webp'
                        width={512}
                        height={512}
                        sizes='2.25rem'
                        alt=''
                        className='h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
                      />
                    </Link>
                  </div>
                )}
              </div>
              <div className='flex flex-1 justify-end md:justify-center'>
                <Popover className='pointer-events-auto md:hidden'>
                  <PopoverButton className='group flex items-center rounded-full bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
                    Menu
                    <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                  </PopoverButton>
                  <PopoverBackdrop
                    transition
                    className='fixed inset-0 z-50 bg-zinc-800/40 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80'
                  />
                  <PopoverPanel
                    focus
                    transition
                    className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800'
                  >
                    <div className='flex flex-row-reverse items-center justify-between'>
                      <PopoverButton aria-label='Close menu' className='-m-1 p-1'>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          aria-hidden='true'
                          className='h-6 w-6 stroke-zinc-500 dark:stroke-zinc-400'
                        >
                          <path
                            d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </PopoverButton>
                      <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                        Navigation
                      </h2>
                    </div>
                    <nav className='mt-6'>
                      <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                        {NavLinks.map((item) => (
                          <li key={item.href}>
                            <PopoverButton as={Link} href={item.href} className='block py-2'>
                              {item.label}
                            </PopoverButton>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </PopoverPanel>
                </Popover>
                <nav className='pointer-events-auto hidden md:block'>
                  <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                    {
                      NavLinks.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <li key={item.href}>
                            <Link
                              className={`relative block px-3 py-2.5 transition hover:text-teal-500 dark:hover:text-teal-400 ${isActive ? 'text-teal-500 dark:text-teal-400' : ''}`}
                              href={item.href}
                            >
                              {item.label}
                              {isActive && (
                                <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
                              )}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </nav>
              </div>

              <div className='flex justify-end md:flex-1'>
                <div className='pointer-events-auto'>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </InnerContainer>
        </OuterContainer>
      </div>
    </header>
  )
}

export default Navbar
