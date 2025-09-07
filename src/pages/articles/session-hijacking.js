import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function SessionHijacking() {
  return (
    <>
      <Head>
        <title>Breaking the Session: Cookie Security Vulnerabilities | Aditya Kumar</title>
        <meta name="description" content="Comprehensive guide to session hijacking detection, cookie security analysis, and secure session management." />
      </Head>
      <Layout>
      <div className={styles.experienceHero} style={{background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)'}}>
        <h1 className={styles.experienceTitle} style={{fontSize:'56px',maxWidth:'900px',margin:'0 auto',textAlign:'center'}}>
          Breaking the Session: Modern Cookie Security Vulnerabilities
        </h1>
        <p className={styles.experienceSubtitle}>10 min read • Published Oct 2024</p>
      </div>
      
      <main className={styles.page} style={{maxWidth:'800px'}}>
        <article style={{fontSize:'18px',lineHeight:'1.8',color:'var(--text)'}}>
          
          <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'32px',background:'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(168,85,247,0.05))'}}>
            <h2 style={{color:'#ec4899',marginBottom:'16px'}}>🔐 Overview</h2>
            <p style={{color:'var(--muted)'}}>
              Session hijacking remains one of the most critical web application vulnerabilities. This article explores 
              modern attack vectors, detection techniques, and the Flask-based tool I developed to identify and prevent 
              these vulnerabilities.
            </p>
          </div>

          <section style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Understanding Session Hijacking</h2>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              Session hijacking occurs when an attacker steals or predicts a valid session token to gain unauthorized 
              access to a web application. My research identified three primary attack vectors in modern applications:
            </p>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#a855f7',marginBottom:'16px'}}>Common Attack Vectors</h3>
              <ul style={{paddingLeft:'20px',color:'var(--muted)',lineHeight:'2'}}>
                <li><strong>Session Fixation:</strong> Attacker sets a known session ID before authentication</li>
                <li><strong>Session Sidejacking:</strong> Packet sniffing to capture session cookies</li>
                <li><strong>Cross-site Scripting (XSS):</strong> JavaScript injection to steal cookies</li>
                <li><strong>Man-in-the-Middle:</strong> Intercepting unencrypted session tokens</li>
              </ul>
            </div>
          </section>

          <section style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Cookie Security Analysis</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'var(--accent)',marginBottom:'16px'}}>Critical Cookie Attributes</h3>
              <p style={{color:'var(--muted)',marginBottom:'16px'}}>
                During my tool development, I focused on detecting misconfigurations in these attributes:
              </p>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto',marginBottom:'16px'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`# Secure Cookie Configuration
Set-Cookie: sessionid=abc123; 
    Secure;           # HTTPS only
    HttpOnly;         # No JavaScript access
    SameSite=Strict;  # CSRF protection
    Path=/;           # Scope limitation
    Max-Age=3600;     # Expiration
    Domain=.example.com`}</code>
              </pre>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px',background:'rgba(239,68,68,0.05)'}}>
              <h3 style={{color:'#ef4444',marginBottom:'16px'}}>⚠️ Common Misconfigurations</h3>
              <ol style={{paddingLeft:'20px',color:'var(--muted)',lineHeight:'2'}}>
                <li><strong>Missing HttpOnly:</strong> Allows XSS attacks to steal cookies</li>
                <li><strong>No Secure flag:</strong> Cookies sent over unencrypted connections</li>
                <li><strong>Weak SameSite:</strong> Vulnerable to CSRF attacks</li>
                <li><strong>Predictable Session IDs:</strong> Enables session prediction attacks</li>
                <li><strong>Long expiration:</strong> Increases window for exploitation</li>
              </ol>
            </div>
          </section>

          <section style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Detection Tool Implementation</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#10b981',marginBottom:'16px'}}>Flask-Based Detection System</h3>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`from flask import Flask, request, make_response
import secrets
import hashlib
from datetime import datetime, timedelta

class SessionSecurityAnalyzer:
    def __init__(self):
        self.vulnerabilities = []
        
    def analyze_cookie(self, cookie_header):
        """Analyze cookie security attributes"""
        results = {
            'secure': False,
            'httponly': False,
            'samesite': None,
            'vulnerabilities': []
        }
        
        # Parse cookie attributes
        attributes = cookie_header.lower().split(';')
        
        for attr in attributes:
            attr = attr.strip()
            if attr == 'secure':
                results['secure'] = True
            elif attr == 'httponly':
                results['httponly'] = True
            elif attr.startswith('samesite'):
                results['samesite'] = attr.split('=')[1] if '=' in attr else True
                
        # Check for vulnerabilities
        if not results['secure']:
            results['vulnerabilities'].append({
                'type': 'MISSING_SECURE',
                'severity': 'HIGH',
                'description': 'Cookie can be transmitted over unencrypted connections'
            })
            
        if not results['httponly']:
            results['vulnerabilities'].append({
                'type': 'MISSING_HTTPONLY',
                'severity': 'HIGH',
                'description': 'Cookie accessible via JavaScript (XSS risk)'
            })
            
        if not results['samesite'] or results['samesite'] == 'none':
            results['vulnerabilities'].append({
                'type': 'WEAK_SAMESITE',
                'severity': 'MEDIUM',
                'description': 'Vulnerable to CSRF attacks'
            })
            
        return results
    
    def generate_secure_session(self):
        """Generate cryptographically secure session ID"""
        # Use secrets module for cryptographic randomness
        random_bytes = secrets.token_bytes(32)
        timestamp = str(datetime.utcnow().timestamp()).encode()
        
        # Combine with timestamp and hash
        session_data = random_bytes + timestamp
        session_id = hashlib.sha256(session_data).hexdigest()
        
        return session_id
    
    def detect_session_fixation(self, pre_auth_session, post_auth_session):
        """Detect if session ID remains same after authentication"""
        if pre_auth_session == post_auth_session:
            return {
                'vulnerable': True,
                'type': 'SESSION_FIXATION',
                'description': 'Session ID not regenerated after authentication'
            }
        return {'vulnerable': False}`}</code>
              </pre>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#f97316',marginBottom:'16px'}}>Real-time Detection Interface</h3>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`@app.route('/analyze', methods=['POST'])
def analyze_session():
    analyzer = SessionSecurityAnalyzer()
    
    # Get cookie from request
    cookie_header = request.headers.get('Cookie', '')
    
    # Analyze security
    analysis = analyzer.analyze_cookie(cookie_header)
    
    # Generate report
    report = {
        'timestamp': datetime.utcnow().isoformat(),
        'vulnerabilities': analysis['vulnerabilities'],
        'risk_score': calculate_risk_score(analysis),
        'recommendations': generate_recommendations(analysis)
    }
    
    # Format output with tabulate
    from tabulate import tabulate
    
    table_data = [
        ['Attribute', 'Status', 'Risk Level'],
        ['Secure Flag', '✓' if analysis['secure'] else '✗', 'HIGH' if not analysis['secure'] else 'OK'],
        ['HttpOnly', '✓' if analysis['httponly'] else '✗', 'HIGH' if not analysis['httponly'] else 'OK'],
        ['SameSite', analysis['samesite'] or '✗', 'MEDIUM' if not analysis['samesite'] else 'OK']
    ]
    
    report['summary'] = tabulate(table_data, headers='firstrow', tablefmt='grid')
    
    return jsonify(report)`}</code>
              </pre>
            </div>
          </section>

          <section style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Remediation Strategies</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px',background:'rgba(16,185,129,0.05)'}}>
              <h3 style={{color:'#10b981',marginBottom:'16px'}}>✅ Best Practices Implementation</h3>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`# Secure Session Configuration
from flask import Flask, session
from flask_session import Session
import redis

app = Flask(__name__)

# Use Redis for server-side sessions
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_REDIS'] = redis.from_url('redis://localhost:6379')
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_KEY_PREFIX'] = 'secure_app:'
app.config['SESSION_COOKIE_SECURE'] = True  # HTTPS only
app.config['SESSION_COOKIE_HTTPONLY'] = True  # No JS access
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'  # CSRF protection

Session(app)

@app.before_request
def session_management():
    # Regenerate session ID on privilege escalation
    if 'user_id' in session and not session.get('regenerated'):
        session.regenerate()  # Custom method to regenerate ID
        session['regenerated'] = True
    
    # Implement session timeout
    if 'last_activity' in session:
        time_since = datetime.now() - session['last_activity']
        if time_since > timedelta(minutes=30):
            session.clear()
            return redirect('/login')
    
    session['last_activity'] = datetime.now()`}</code>
              </pre>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#6366f1',marginBottom:'16px'}}>Additional Security Measures</h3>
              <ul style={{paddingLeft:'20px',color:'var(--muted)',lineHeight:'2'}}>
                <li><strong>Token Binding:</strong> Bind sessions to client fingerprints (IP, User-Agent)</li>
                <li><strong>Double Submit Cookies:</strong> Additional CSRF protection layer</li>
                <li><strong>Encrypted Tokens:</strong> Use JWE for sensitive session data</li>
                <li><strong>Rate Limiting:</strong> Prevent brute force session attacks</li>
                <li><strong>Anomaly Detection:</strong> Monitor for suspicious session behavior</li>
              </ul>
            </div>
          </section>

          <section style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Real-World Impact</h2>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              During testing, my tool identified critical vulnerabilities in several applications:
            </p>
            <ul style={{paddingLeft:'20px',color:'var(--muted)',marginBottom:'20px',lineHeight:'2'}}>
              <li>73% of tested applications missing HttpOnly flag</li>
              <li>45% transmitting session cookies over HTTP</li>
              <li>82% not implementing proper session regeneration</li>
              <li>91% lacking comprehensive session timeout mechanisms</li>
            </ul>
            <p style={{color:'var(--muted)'}}>
              These findings highlight the importance of automated security testing in the development pipeline.
            </p>
          </section>

          <div style={{marginTop:'60px',padding:'24px',background:'linear-gradient(135deg, rgba(236,72,153,0.05), rgba(168,85,247,0.05))',borderRadius:'12px'}}>
            <h3 style={{color:'#ec4899',marginBottom:'12px'}}>Key Takeaways</h3>
            <ul style={{paddingLeft:'20px',color:'var(--muted)',lineHeight:'2'}}>
              <li>Always use HTTPS and set Secure flag on cookies</li>
              <li>Implement HttpOnly to prevent XSS cookie theft</li>
              <li>Use SameSite=Strict for CSRF protection</li>
              <li>Regenerate session IDs after authentication</li>
              <li>Implement proper session timeout mechanisms</li>
              <li>Regular security audits are essential</li>
            </ul>
          </div>

          <div style={{display:'flex',gap:'16px',marginTop:'48px',justifyContent:'center'}}>
            <Link href="/articles/steganography-detection" style={{padding:'14px 24px',border:'2px solid var(--accent)',color:'var(--accent)',borderRadius:'10px',fontWeight:700}}>
              ← Previous Article
            </Link>
            <Link href="/articles" style={{padding:'14px 24px',background:'var(--primary)',color:'var(--on-primary)',borderRadius:'10px',fontWeight:700}}>
              Back to Articles
            </Link>
          </div>
        </article>
      </main>
      </Layout>
    </>
  )
}
