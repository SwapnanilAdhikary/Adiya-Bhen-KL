import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Cybersecurity Engineer</title>
        <meta name="description" content="Professional experience across AppSec, pentesting, and blue team operations." />
      </Head>
      <Layout>
      <div className={styles.experienceHero}>
        <h1 className={styles.experienceTitle}>My Journey</h1>
        <p className={styles.experienceSubtitle}>Building secure systems, one challenge at a time</p>
      </div>
      
      <main className={styles.page}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>2+</div>
            <div className={styles.statLabel}>Companies</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>40+</div>
            <div className={styles.statLabel}>Security Tests</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>1+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
        </div>

        <div className={styles.cinematicTimeline}>
          <div className={`${styles.cinematicTimelineItem} ${styles.left}`}>
            <div className={styles.cinematicDot}></div>
            <div className={styles.cinematicTimelineContent}>
              <h3 className={styles.roleTitle}>SOC Analyst Intern</h3>
              <p className={styles.companyName}>NOIDA POWER COMPANY LIMITED</p>
              <span className={styles.dateRange}>Jun 2025 – Ongoing</span>
              <ul style={{lineHeight:1.8, marginBottom:12}}>
                <li>Orchestrated threat detection workflows using enterprise SIEM platforms</li>
                <li>Validated 40+ MDM use cases for zero-trust security architecture</li>
                <li>Reduced incident response time through automated playbook development</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>SIEM</span>
                <span className={styles.techBadge}>MDM</span>
                <span className={styles.techBadge}>Threat Detection</span>
                <span className={styles.techBadge}>Incident Response</span>
              </div>
            </div>
          </div>

          <div className={`${styles.cinematicTimelineItem} ${styles.right}`}>
            <div className={styles.cinematicDot}></div>
            <div className={styles.cinematicTimelineContent}>
              <h3 className={styles.roleTitle}>AIML & Cybersecurity Intern</h3>
              <p className={styles.companyName}>NIRVEONX</p>
              <span className={styles.dateRange}>May 2025 – Jun 2025</span>
              <ul style={{lineHeight:1.8, marginBottom:12}}>
                <li>Engineered security testing frameworks for AI/ML model validation</li>
                <li>Identified critical compliance gaps aligned with ISO 27001 & NIST</li>
                <li>Improved model security posture through adversarial testing</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>AI Security</span>
                <span className={styles.techBadge}>ISO 27001</span>
                <span className={styles.techBadge}>NIST Framework</span>
                <span className={styles.techBadge}>Model Testing</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'flex',gap:'16px',marginTop:'48px',justifyContent:'center'}}>
          <a className={styles.resumeBtn} href="https://drive.google.com/file/d/19aSLOetSkh9oq--HiKi-Xh97fh7EXS4-/view?usp=drivesdk" target="_blank" rel="noreferrer">
            Download Full Resume
          </a>
          <Link href="/" style={{padding:'14px 24px',borderRadius:'10px',border:'2px solid var(--accent)',color:'var(--accent)',fontWeight:700,display:'inline-block'}}>
            Back to Home
          </Link>
        </div>
      </main>
      </Layout>
    </>
  )
}