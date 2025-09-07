import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles | Cybersecurity Engineer</title>
        <meta name="description" content="Security engineering articles on threat detection, secure development, and incident response." />
      </Head>
      <Layout>
      <div className={styles.experienceHero} style={{background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'}}>
        <h1 className={styles.experienceTitle}>Words Can Change The World!</h1>
        <p className={styles.experienceSubtitle}>Sharing knowledge to build a more secure digital future</p>
      </div>
      
      <main className={styles.page}>
        <div style={{marginBottom:'60px'}}>
          <h2 style={{fontSize:'32px',marginBottom:'32px',textAlign:'center'}}>Featured Articles</h2>
          
          <div className={styles.articlesPageGrid}>
            {/* Article 1 */}
            <Link href="/articles/steganography-detection">
            <div className={styles.cinematicTimelineContent} style={{width:'100%',padding:0,overflow:'hidden',cursor:'pointer',transition:'all 0.3s ease'}}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)',height:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{fontSize:'64px'}}>🔒</div>
              </div>
              <div style={{padding:'24px'}}>
                <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>
                  <span className={styles.chip} style={{background:'rgba(14,165,233,0.12)',color:'var(--accent)',border:'1px solid rgba(14,165,233,0.25)'}}>
                    Steganography
                  </span>
                  <span className={styles.chip} style={{background:'rgba(16,185,129,0.12)',color:'#10b981',border:'1px solid rgba(16,185,129,0.25)'}}>
                    Research
                  </span>
                </div>
                <h3 style={{fontSize:'22px',marginBottom:'12px',background:'linear-gradient(135deg, var(--accent), #a855f7)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                  Hidden In Plain Sight: Advanced Image-Based Steganography Detection
                </h3>
                <p style={{color:'var(--muted)',lineHeight:1.6,marginBottom:'16px'}}>
                  Deep dive into entropy analysis, metadata examination, and cryptographic hash techniques for uncovering 
                  hidden malware in PNG/JPG images. Includes Python implementation and SOC integration strategies.
                </p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{color:'#ec4899',fontWeight:600}}>12 min read</span>
                  <span style={{color:'var(--muted)',fontSize:'14px'}}>Published: Nov 2024</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Article 2 */}
            <Link href="/articles/session-hijacking">
            <div className={styles.cinematicTimelineContent} style={{width:'100%',padding:0,overflow:'hidden',cursor:'pointer',transition:'all 0.3s ease'}}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <div style={{background:'linear-gradient(135deg, #7c3aed, #ec4899)',height:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{fontSize:'64px'}}>🍪</div>
              </div>
              <div style={{padding:'24px'}}>
                <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>
                  <span className={styles.chip} style={{background:'rgba(236,72,153,0.12)',color:'#ec4899',border:'1px solid rgba(236,72,153,0.25)'}}>
                    Web Security
                  </span>
                  <span className={styles.chip} style={{background:'rgba(168,85,247,0.12)',color:'#a855f7',border:'1px solid rgba(168,85,247,0.25)'}}>
                    AppSec
                  </span>
                </div>
                <h3 style={{fontSize:'22px',marginBottom:'12px',background:'linear-gradient(135deg, #ec4899, #f97316)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                  Breaking the Session: Modern Cookie Security Vulnerabilities
                </h3>
                <p style={{color:'var(--muted)',lineHeight:1.6,marginBottom:'16px'}}>
                  Comprehensive guide to session hijacking detection, cookie security analysis, and implementing 
                  secure session management. Features real-world attack scenarios and remediation strategies.
                </p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{color:'#ec4899',fontWeight:600}}>10 min read</span>
                  <span style={{color:'var(--muted)',fontSize:'14px'}}>Published: Oct 2024</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Article 3 */}
            <div className={styles.cinematicTimelineContent} style={{width:'100%',padding:0,overflow:'hidden',cursor:'pointer',transition:'all 0.3s ease'}}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <div style={{background:'linear-gradient(135deg, #0ea5e9, #10b981)',height:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{fontSize:'64px'}}>📊</div>
              </div>
              <div style={{padding:'24px'}}>
                <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>
                  <span className={styles.chip} style={{background:'rgba(14,165,233,0.12)',color:'var(--accent)',border:'1px solid rgba(14,165,233,0.25)'}}>
                    SOC
                  </span>
                  <span className={styles.chip} style={{background:'rgba(249,115,22,0.12)',color:'#f97316',border:'1px solid rgba(249,115,22,0.25)'}}>
                    SIEM
                  </span>
                </div>
                <h3 style={{fontSize:'22px',marginBottom:'12px',background:'linear-gradient(135deg, var(--accent), #10b981)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                  From Alerts to Action: Building Effective SIEM Detection Rules
                </h3>
                <p style={{color:'var(--muted)',lineHeight:1.6,marginBottom:'16px'}}>
                  Learn how to tune SIEM detections, reduce false positives, and create actionable playbooks that 
                  improve mean time to respond (MTTR) in SOC environments.
                </p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{color:'#ec4899',fontWeight:600}}>8 min read</span>
                  <span style={{color:'var(--muted)',fontSize:'14px'}}>Published: Sep 2024</span>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className={styles.cinematicTimelineContent} style={{width:'100%',padding:0,overflow:'hidden',cursor:'pointer',transition:'all 0.3s ease'}}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <div style={{background:'linear-gradient(135deg, #f97316, #ef4444)',height:'200px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{fontSize:'64px'}}>🛡️</div>
              </div>
              <div style={{padding:'24px'}}>
                <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>
                  <span className={styles.chip} style={{background:'rgba(239,68,68,0.12)',color:'#ef4444',border:'1px solid rgba(239,68,68,0.25)'}}>
                    Incident Response
                  </span>
                  <span className={styles.chip} style={{background:'rgba(99,102,241,0.12)',color:'#6366f1',border:'1px solid rgba(99,102,241,0.25)'}}>
                    Blue Team
                  </span>
                </div>
                <h3 style={{fontSize:'22px',marginBottom:'12px',background:'linear-gradient(135deg, #ef4444, #f97316)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
                  The First 48 Hours: Critical Incident Response Procedures
                </h3>
                <p style={{color:'var(--muted)',lineHeight:1.6,marginBottom:'16px'}}>
                  Step-by-step incident response framework covering initial triage, containment strategies, and 
                  evidence preservation techniques for security incidents.
                </p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{color:'#ec4899',fontWeight:600}}>15 min read</span>
                  <span style={{color:'var(--muted)',fontSize:'14px'}}>Published: Aug 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Articles */}
        <div style={{marginTop:'60px',padding:'40px',background:'rgba(99,102,241,0.05)',borderRadius:'20px'}}>
          <h2 style={{fontSize:'28px',marginBottom:'24px',textAlign:'center'}}>Coming Soon</h2>
          <div className={styles.comingSoonGrid}>
            <div style={{background:'var(--surface)',padding:'20px',borderRadius:'12px',border:'1px solid rgba(99,102,241,0.2)'}}>
              <h4 style={{color:'#6366f1',marginBottom:'8px'}}>Cloud Security Posture Management in AWS</h4>
              <p style={{color:'var(--muted)',fontSize:'14px'}}>
                Deep dive into AWS security best practices, IAM policies, and automated compliance checking.
              </p>
            </div>
            <div style={{background:'var(--surface)',padding:'20px',borderRadius:'12px',border:'1px solid rgba(168,85,247,0.2)'}}>
              <h4 style={{color:'#a855f7',marginBottom:'8px'}}>AI/ML Security: Adversarial Attack Detection</h4>
              <p style={{color:'var(--muted)',fontSize:'14px'}}>
                Exploring techniques to identify and mitigate adversarial attacks on machine learning models.
              </p>
            </div>
            <div style={{background:'var(--surface)',padding:'20px',borderRadius:'12px',border:'1px solid rgba(16,185,129,0.2)'}}>
              <h4 style={{color:'#10b981',marginBottom:'8px'}}>Zero Trust Architecture Implementation Guide</h4>
              <p style={{color:'var(--muted)',fontSize:'14px'}}>
                Practical approach to implementing zero trust principles in enterprise environments.
              </p>
            </div>
            <div style={{background:'var(--surface)',padding:'20px',borderRadius:'12px',border:'1px solid rgba(236,72,153,0.2)'}}>
              <h4 style={{color:'#ec4899',marginBottom:'8px'}}>Container Security: Docker & Kubernetes Hardening</h4>
              <p style={{color:'var(--muted)',fontSize:'14px'}}>
                Security best practices for containerized applications and orchestration platforms.
              </p>
            </div>
          </div>
        </div>

        <div style={{display:'flex',gap:'16px',marginTop:'48px',justifyContent:'center'}}>
          <a 
            href="https://medium.com/@adii.utsav" 
            target="_blank" 
            rel="noreferrer"
            style={{
              padding:'14px 24px',
              background:'var(--primary)',
              color:'var(--on-primary)',
              borderRadius:'10px',
              fontWeight:700,
              display:'inline-flex',
              alignItems:'center',
              gap:'8px'
            }}
          >
            Read on Medium
            <span>→</span>
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