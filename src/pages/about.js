import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Cybersecurity Engineer</title>
        <meta name="description" content="Cybersecurity engineer specializing in secure architecture, threat detection, and security automation." />
      </Head>
      <Layout>
      <div className={styles.experienceHero} style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)'}}>
        <h1 className={styles.experienceTitle}>Passion Fuels Purpose!</h1>
        <p className={styles.experienceSubtitle}>Turning security challenges into opportunities</p>
      </div>
      
      <main className={styles.page}>
        <div className={styles.aboutPageGrid} style={{marginBottom:'60px'}}>
          {/* Bio Section */}
          <div className={styles.cinematicTimelineContent} style={{width:'100%',background:'linear-gradient(135deg, rgba(30,58,138,0.05), rgba(124,58,237,0.05))'}}>
            <h2 className={styles.roleTitle} style={{fontSize:'32px',marginBottom:'20px'}}>
              Hi, I&apos;m Aditya Kumar
            </h2>
            <p style={{color:'var(--muted)',fontSize:'18px',lineHeight:1.8,marginBottom:'20px'}}>
              A cybersecurity engineer with 1+ year of hands-on experience in SOC operations, penetration testing, 
              and security automation. Currently pursuing B.Tech in Information Technology at IEM Kolkata with a 
              CGPA of 9.37.
            </p>
            <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:'24px'}}>
              My journey in cybersecurity began with a fascination for how systems can be both vulnerable and 
              resilient. Today, I specialize in building secure-by-default architectures, conducting thorough 
              security assessments, and developing tools that help organizations stay ahead of threats.
            </p>
            
            <p style={{color:'var(--muted)',lineHeight:1.8,marginBottom:'32px'}}>
              Through internships at NOIDA Power Company and NIRVEONX, I&apos;ve gained practical experience in threat 
              detection, incident response, and compliance frameworks. My research on steganographic malware detection 
              was published at ICCAES Conference 2022, demonstrating my commitment to advancing the field.
            </p>
            
            <div style={{marginBottom:'32px'}}>
              <h3 style={{color:'var(--accent)',marginBottom:'16px'}}>🎯 Core Expertise</h3>
              <div className={styles.expertiseGrid}>
                <div style={{padding:'12px',background:'rgba(14,165,233,0.05)',borderRadius:'12px',border:'1px solid rgba(14,165,233,0.2)'}}>
                  <strong style={{color:'var(--accent)'}}>Offensive Security</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>Penetration Testing, Vulnerability Assessment</p>
                </div>
                <div style={{padding:'12px',background:'rgba(168,85,247,0.05)',borderRadius:'12px',border:'1px solid rgba(168,85,247,0.2)'}}>
                  <strong style={{color:'#a855f7'}}>Defensive Security</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>SIEM, EDR, Incident Response</p>
                </div>
                <div style={{padding:'12px',background:'rgba(236,72,153,0.05)',borderRadius:'12px',border:'1px solid rgba(236,72,153,0.2)'}}>
                  <strong style={{color:'#ec4899'}}>Cloud Security</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>AWS, Azure, Infrastructure as Code</p>
                </div>
                <div style={{padding:'12px',background:'rgba(16,185,129,0.05)',borderRadius:'12px',border:'1px solid rgba(16,185,129,0.2)'}}>
                  <strong style={{color:'#10b981'}}>Security Engineering</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>Python Automation, Tool Development</p>
                </div>
                <div style={{padding:'12px',background:'rgba(249,115,22,0.05)',borderRadius:'12px',border:'1px solid rgba(249,115,22,0.2)'}}>
                  <strong style={{color:'#f97316'}}>Security Research</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>Malware Analysis, Threat Intelligence</p>
                </div>
                <div style={{padding:'12px',background:'rgba(99,102,241,0.05)',borderRadius:'12px',border:'1px solid rgba(99,102,241,0.2)'}}>
                  <strong style={{color:'#6366f1'}}>Compliance</strong>
                  <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'4px'}}>ISO 27001, NIST Framework</p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{color:'var(--accent)',marginBottom:'12px'}}>💡 What Drives Me</h3>
              <p style={{color:'var(--muted)',lineHeight:1.8}}>
                I believe cybersecurity is not just about protecting systems—it&apos;s about enabling innovation safely. 
                My goal is to bridge the gap between security and development, making secure practices accessible and 
                practical for teams of all sizes.
              </p>
            </div>

            <div className={styles.techStack} style={{marginTop:'24px'}}>
              <span className={styles.techBadge}>Python</span>
              <span className={styles.techBadge}>Bash</span>
              <span className={styles.techBadge}>C/C++</span>
              <span className={styles.techBadge}>AWS</span>
              <span className={styles.techBadge}>Docker</span>
              <span className={styles.techBadge}>Kubernetes</span>
              <span className={styles.techBadge}>Terraform</span>
              <span className={styles.techBadge}>Git</span>
            </div>
          </div>

          {/* Profile Card */}
          <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
            <div className={styles.cinematicTimelineContent} style={{width:'100%',padding:'16px',textAlign:'center'}}>
              <Image 
                src="/images/profile/Adi.png" 
                alt="Aditya Kumar" 
                width={280} 
                height={350} 
                style={{width:'100%',height:'auto',borderRadius:'12px',marginBottom:'16px'}}
              />
              <h3 style={{fontSize:'24px',marginBottom:'8px'}}>Aditya Kumar</h3>
              <p style={{color:'var(--accent)',fontWeight:600}}>Cybersecurity Engineer</p>
              <div style={{display:'flex',gap:'12px',justifyContent:'center',marginTop:'16px'}}>
                <a href="https://github.com" target="_blank" rel="noreferrer" 
                   style={{padding:'8px 16px',background:'rgba(14,165,233,0.1)',borderRadius:'20px',color:'var(--accent)',fontSize:'14px'}}>
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                   style={{padding:'8px 16px',background:'rgba(14,165,233,0.1)',borderRadius:'20px',color:'var(--accent)',fontSize:'14px'}}>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={styles.statCard}>
              <div className={styles.statNumber}>9.37</div>
              <div className={styles.statLabel}>CGPA</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>3rd</div>
              <div className={styles.statLabel}>Dept. Rank</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>2026</div>
              <div className={styles.statLabel}>Graduation</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{marginBottom:'60px'}}>
          <h2 style={{fontSize:'32px',marginBottom:'32px',textAlign:'center'}}>Technical Arsenal</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'var(--accent)',marginBottom:'16px',fontSize:'20px'}}>🔍 Penetration Testing</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['Nmap', 'Metasploit', 'Burp Suite', 'Hydra', 'SQLi', 'XSS', 'Privilege Escalation'].map(skill => (
                  <span key={skill} className={styles.chip} style={{fontSize:'13px'}}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'#a855f7',marginBottom:'16px',fontSize:'20px'}}>🛡️ Defensive Security</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['Nessus', 'CrowdStrike', 'MDM', 'SIEM', 'EDR', 'Incident Response'].map(skill => (
                  <span key={skill} className={styles.chip} style={{background:'rgba(168,85,247,0.12)',color:'#a855f7',border:'1px solid rgba(168,85,247,0.25)'}}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'#ec4899',marginBottom:'16px',fontSize:'20px'}}>🌐 Network Security</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['Wireshark', 'Ettercap', 'ARP Spoofing', 'Aircrack-ng', 'Traffic Analysis'].map(skill => (
                  <span key={skill} className={styles.chip} style={{background:'rgba(236,72,153,0.12)',color:'#ec4899',border:'1px solid rgba(236,72,153,0.25)'}}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'#10b981',marginBottom:'16px',fontSize:'20px'}}>💻 Digital Forensics</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['Mimikatz', 'Meterpreter', 'Keyloggers', 'Steganalysis', 'Malware Analysis'].map(skill => (
                  <span key={skill} className={styles.chip} style={{background:'rgba(16,185,129,0.12)',color:'#10b981',border:'1px solid rgba(16,185,129,0.25)'}}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'#f97316',marginBottom:'16px',fontSize:'20px'}}>☁️ Cloud Security</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['AWS', 'EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'CloudWatch', 'Azure'].map(skill => (
                  <span key={skill} className={styles.chip} style={{background:'rgba(249,115,22,0.12)',color:'#f97316',border:'1px solid rgba(249,115,22,0.25)'}}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.cinematicTimelineContent} style={{width:'100%'}}>
              <h3 style={{color:'#6366f1',marginBottom:'16px',fontSize:'20px'}}>⚡ Automation</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {['Python', 'Bash', 'PowerShell', 'Git', 'Docker', 'CI/CD', 'Terraform'].map(skill => (
                  <span key={skill} className={styles.chip} style={{background:'rgba(99,102,241,0.12)',color:'#6366f1',border:'1px solid rgba(99,102,241,0.25)'}}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className={styles.eduCertGrid} style={{marginBottom:'48px'}}>
          <div className={styles.cinematicTimelineContent} style={{width:'100%',background:'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.05))'}}>
            <h3 style={{color:'var(--accent)',marginBottom:'20px',fontSize:'24px'}}>🎓 Education</h3>
            <div style={{marginBottom:'16px'}}>
              <h4 style={{fontSize:'18px',marginBottom:'4px'}}>B.Tech in Information Technology</h4>
              <p style={{color:'var(--muted)'}}>IEM Kolkata • 2022-2026</p>
              <p style={{color:'var(--accent)',fontWeight:600,marginTop:'8px'}}>CGPA: 9.37/10 (till 6th Semester)</p>
            </div>
            <div style={{marginBottom:'16px'}}>
              <h4 style={{fontSize:'18px',marginBottom:'4px'}}>Higher Secondary (XII)</h4>
              <p style={{color:'var(--muted)'}}>Trident Public School • 2019-2021</p>
              <p style={{color:'var(--accent)',fontWeight:600,marginTop:'8px'}}>Percentage: 82%</p>
            </div>
          </div>
          
          <div className={styles.cinematicTimelineContent} style={{width:'100%',background:'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(14,165,233,0.05))'}}>
            <h3 style={{color:'#10b981',marginBottom:'20px',fontSize:'24px'}}>🏆 Certifications & Achievements</h3>
            <ul style={{lineHeight:2}}>
              <li><strong>CEH v13</strong> - EC-Council (Planned)</li>
              <li><strong>Udemy</strong> - Ethical Hacking & Cyber Security Masterclass</li>
              <li><strong>Coursera</strong> - Foundations of Cybersecurity</li>
              <li><strong>NPTEL</strong> - Ethical Hacking, Python, OS Fundamentals</li>
              <li><strong>Achievement</strong> - Published at ICCAES Conference 2022</li>
              <li><strong>Rank</strong> - 3rd in IT Department (2022-2023)</li>
            </ul>
          </div>
        </div>

        <div style={{display:'flex',gap:'16px',justifyContent:'center'}}>
          <a className={styles.resumeBtn} href="https://drive.google.com/file/d/19aSLOetSkh9oq--HiKi-Xh97fh7EXS4-/view?usp=drivesdk" target="_blank" rel="noreferrer">
            Download Resume
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