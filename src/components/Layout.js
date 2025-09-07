import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    setIsDark(shouldDark)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.body
      if (isDark) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [isDark])

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/articles" className={styles.navLink}>Articles</Link>
            <Link href="/experience" className={styles.navLink}>Experience</Link>
          </div>
          <div className={styles.brand}>AK</div>
          <div className={styles.navRight}>
            <a href="https://github.com/Rememberful" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.iconLink}>
              <Image src="/images/svgs/logo-github.svg" alt="GitHub" width={22} height={22} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-3241b6286/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.iconLink}>
              <Image src="/images/svgs/linkedin.svg" alt="LinkedIn" width={22} height={22} />
            </a>
            <button aria-label="Toggle dark mode" onClick={() => setIsDark(v => !v)} className={styles.themeToggle}>
              {isDark ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>
      {children}
    </>
  )
}


