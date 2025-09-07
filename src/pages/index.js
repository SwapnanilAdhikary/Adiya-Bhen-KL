import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  // Initialize from localStorage and keep body class in sync
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

  const toggleTheme = () => setIsDark((v) => !v)
  return (
    <>
      <Head>
        <title>Cybersecurity Engineer Portfolio</title>
        <meta name="description" content="Portfolio of a cybersecurity engineer focusing on application, cloud, and network security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

      <main className={styles.hero}>
        <section className={styles.heroLeft}>
          <div className={styles.profileWrap}>
            <Image
              src="/images/profile/Adi.png"
              alt="Profile picture"
              className={styles.profile}
              width={580}
              height={650}
              priority
            />
          </div>

          {/* <div className={styles.hireWrap}>
            <Image
              //src="/images/svgs/CircularText.svg"
              //alt="Circular text"
              width={130}
              height={130}
              className={styles.circularText}
              priority
            />
            <a className={styles.hireButton} href="mailto:adii.utsav@gmail.com" aria-label="Hire me">
              Hire Me
            </a>
          </div> */}
        </section>

        <section className={styles.heroRight}>
          <h1 className={`${styles.title} ${inter.className}`}>Defending Systems With Cybersecurity Engineering.</h1>
          <p className={`${styles.subtitle} ${inter.className}`}>I design secure-by-default systems and help teams protect applications, networks, and cloud workloads. Explore projects and articles on threat modeling, penetration testing, secure development, and incident response.</p>
          <div className={styles.cta}>
            <a className={styles.resumeBtn} href="https://drive.google.com/file/d/19aSLOetSkh9oq--HiKi-Xh97fh7EXS4-/view?usp=drivesdk" target="_blank" rel="noreferrer">
              Resume
              <span className={styles.externalIcon}>
                <Image src="/images/svgs/external-link.svg" alt="Open" width={16} height={16} />
              </span>
            </a>
            <a className={styles.contactLink} href="mailto:adii.utsav@gmail.com">Contact</a>
          </div>
        </section>
      </main>
      </Layout>
    </>
  )
}
