import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Cybersecurity Engineer</title>
        <meta name="description" content="Security tools and frameworks: steganalysis, session hijacking detection, and more." />
      </Head>
      <Layout>
      <div className={styles.experienceHero} style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>
        <h1 className={styles.experienceTitle}>Imagination Trumps Knowledge!</h1>
        <p className={styles.experienceSubtitle}>Building security tools that make a difference</p>
      </div>
      
      <main className={styles.page}>
        <div style={{marginBottom:'60px'}}>
          <h2 style={{fontSize:'32px',marginBottom:'24px',textAlign:'center'}}>Featured Projects</h2>
          
          <div style={{display:'grid',gap:'32px'}}>
            {/* Steganalysis Project */}
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px',background:'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(168,85,247,0.05))'}}>
              <div className={styles.projectCardGrid}>
                <div>
                  <span className={styles.dateRange} style={{background:'linear-gradient(135deg, #10b981, #3b82f6)',color:'white'}}>
                    🔒 Security Research
                  </span>
                  <h3 className={styles.roleTitle} style={{fontSize:'28px',marginTop:'12px'}}>
                    Steganalysis-Based Malware Detection
                  </h3>
                  <p style={{color:'var(--muted)',lineHeight:1.8,marginTop:'12px'}}>
                    Developed an advanced Python-based detection system that uncovers hidden malware in PNG/JPG images through sophisticated file structure analysis, entropy calculations, and cryptographic hashing. The tool preserves original files while performing deep analysis.
                  </p>
                  <div style={{marginTop:'16px'}}>
                    <h4 style={{fontSize:'14px',marginBottom:'8px',color:'var(--accent)'}}>Key Features:</h4>
                    <ul style={{lineHeight:1.8,paddingLeft:'20px'}}>
                      <li>Non-destructive analysis preserving file integrity</li>
                      <li>Automated threat scoring and payload extraction</li>
                      <li>VirusTotal API integration for threat intelligence</li>
                      <li>Scalable architecture for SOC environments</li>
                      <li>Compatible with SIEM/EDR systems</li>
                    </ul>
                  </div>
                  <div className={styles.techStack} style={{marginTop:'20px'}}>
                    <span className={styles.techBadge}>Python</span>
                    <span className={styles.techBadge}>VirusTotal API</span>
                    <span className={styles.techBadge}>Cryptographic Hashing</span>
                    <span className={styles.techBadge}>Entropy Analysis</span>
                    <span className={styles.techBadge}>Steganography</span>
                  </div>
                </div>
                <div style={{background:'linear-gradient(135deg, #1e293b, #0f172a)',borderRadius:'12px',padding:'24px',textAlign:'center'}}>
                  <div style={{fontSize:'48px',marginBottom:'12px'}}>🔍</div>
                  <div className={styles.statNumber} style={{fontSize:'36px'}}>Hidden Threats</div>
                  <div className={styles.statLabel}>Detection System</div>
                </div>
              </div>
            </div>

            {/* Session Hijacking Project */}
            <div className={styles.cinematicTimelineContent} style={{width:'100%',background:'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(236,72,153,0.05))'}}>
              <div className={styles.projectCardGrid}>
                <div>
                  <span className={styles.dateRange} style={{background:'linear-gradient(135deg, #ec4899, #a855f7)',color:'white'}}>
                    🌐 Web Security
                  </span>
                  <h3 className={styles.roleTitle} style={{fontSize:'28px',marginTop:'12px'}}>
                    Web Application Session Hijacking Detector
                  </h3>
                  <p style={{color:'var(--muted)',lineHeight:1.8,marginTop:'12px'}}>
                    Engineered a Flask-based security tool that proactively identifies session vulnerabilities in web applications. The system performs real-time analysis of cookie configurations, detects session fixation risks, and provides actionable remediation guidance.
                  </p>
                  <div style={{marginTop:'16px'}}>
                    <h4 style={{fontSize:'14px',marginBottom:'8px',color:'var(--accent)'}}>Key Features:</h4>
                    <ul style={{lineHeight:1.8,paddingLeft:'20px'}}>
                      <li>Real-time cookie security analysis</li>
                      <li>Session fixation vulnerability detection</li>
                      <li>User-friendly interface with detailed reporting</li>
                      <li>Automated remediation recommendations</li>
                      <li>Security-first development approach</li>
                    </ul>
                  </div>
                  <div className={styles.techStack} style={{marginTop:'20px'}}>
                    <span className={styles.techBadge}>Python</span>
                    <span className={styles.techBadge}>Flask</span>
                    <span className={styles.techBadge}>HTML/CSS</span>
                    <span className={styles.techBadge}>Tabulate</span>
                    <span className={styles.techBadge}>Cookie Analysis</span>
                  </div>
                </div>
                <div style={{background:'linear-gradient(135deg, #1e293b, #0f172a)',borderRadius:'12px',padding:'24px',textAlign:'center'}}>
                  <div style={{fontSize:'48px',marginBottom:'12px'}}>🛡️</div>
                  <div className={styles.statNumber} style={{fontSize:'36px'}}>Session Security</div>
                  <div className={styles.statLabel}>Protection Tool</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div style={{marginTop:'60px',padding:'40px',background:'rgba(14,165,233,0.05)',borderRadius:'20px'}}>
          <h2 style={{fontSize:'28px',marginBottom:'20px',textAlign:'center'}}>Ongoing Research</h2>
          <div style={{background:'var(--surface)',padding:'24px',borderRadius:'16px',border:'1px solid rgba(14,165,233,0.2)'}}>
            <h3 style={{color:'var(--accent)',marginBottom:'12px'}}>
              Hybrid Malware Detection Using Non-Destructive Steganalysis
            </h3>
            <p style={{color:'var(--muted)',lineHeight:1.8}}>
              Currently developing an advanced detection framework that combines traditional signature-based methods with 
              AI-powered behavioral analysis to identify sophisticated steganographic malware. This research aims to 
              improve detection rates while minimizing false positives in enterprise environments.
            </p>
            <div style={{marginTop:'16px',display:'flex',gap:'12px',flexWrap:'wrap'}}>
              <span className={styles.chip} style={{background:'rgba(16,185,129,0.1)',color:'#10b981',border:'1px solid rgba(16,185,129,0.3)'}}>
                Machine Learning
              </span>
              <span className={styles.chip} style={{background:'rgba(16,185,129,0.1)',color:'#10b981',border:'1px solid rgba(16,185,129,0.3)'}}>
                Behavioral Analysis
              </span>
              <span className={styles.chip} style={{background:'rgba(16,185,129,0.1)',color:'#10b981',border:'1px solid rgba(16,185,129,0.3)'}}>
                Enterprise Security
              </span>
            </div>
          </div>
        </div>

        <div style={{display:'flex',gap:'16px',marginTop:'48px',justifyContent:'center'}}>
          <a 
            href="https://github.com/Rememberful" 
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
            View on GitHub
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