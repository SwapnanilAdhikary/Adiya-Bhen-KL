import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

export default function SteganographyDetection() {
  return (
    <>
      <Head>
        <title>Hidden In Plain Sight: Image-Based Steganography Detection | Aditya Kumar</title>
        <meta name="description" content="Deep dive into entropy analysis, metadata examination, and cryptographic techniques for detecting hidden malware in images." />
      </Head>
      <Layout>
      <div className={styles.experienceHero} style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)'}}>
        <h1 className={styles.experienceTitle} style={{fontSize:'56px',maxWidth:'900px',margin:'0 auto',textAlign:'center'}}>
          Hidden In Plain Sight: Advanced Image-Based Steganography Detection
        </h1>
        <p className={styles.experienceSubtitle}>12 min read • Published Nov 2024</p>
      </div>
      
      <main className={styles.page} style={{maxWidth:'800px'}}>
        <article style={{fontSize:'18px',lineHeight:'1.8',color:'var(--text)'}}>
          
          <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'32px',background:'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(168,85,247,0.05))'}}>
            <h2 style={{color:'var(--accent)',marginBottom:'16px'}}>📋 Table of Contents</h2>
            <ol style={{paddingLeft:'20px',color:'var(--muted)'}}>
              <li><a href="#introduction" style={{color:'var(--accent)'}}>Introduction to Steganography</a></li>
              <li><a href="#detection" style={{color:'var(--accent)'}}>Detection Techniques</a></li>
              <li><a href="#implementation" style={{color:'var(--accent)'}}>Python Implementation</a></li>
              <li><a href="#soc" style={{color:'var(--accent)'}}>SOC Integration</a></li>
              <li><a href="#conclusion" style={{color:'var(--accent)'}}>Conclusion</a></li>
            </ol>
          </div>

          <section id="introduction" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Introduction to Steganography</h2>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              Steganography, the art of hiding information within other non-secret data, has evolved from ancient practices 
              to sophisticated digital techniques. In cybersecurity, malicious actors increasingly use image steganography 
              to hide malware, exfiltrate data, or establish covert communication channels.
            </p>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              During my research and development of a steganography-based malware detection tool, I discovered that traditional 
              signature-based detection methods fail to identify these threats. This article explores advanced detection 
              techniques I implemented to uncover hidden malware in PNG and JPG images.
            </p>
          </section>

          <section id="detection" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Detection Techniques</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#10b981',marginBottom:'16px'}}>1. Entropy Analysis</h3>
              <p style={{color:'var(--muted)',marginBottom:'16px'}}>
                Entropy measures the randomness in data. Steganographic content often increases an image's entropy:
              </p>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto',marginBottom:'16px'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`import numpy as np
from scipy.stats import entropy

def calculate_entropy(image_path):
    with open(image_path, 'rb') as f:
        data = f.read()
    
    # Calculate byte frequency
    byte_counts = np.bincount(np.frombuffer(data, dtype=np.uint8))
    probabilities = byte_counts / byte_counts.sum()
    
    # Calculate Shannon entropy
    return entropy(probabilities, base=2)`}</code>
              </pre>
              <p style={{color:'var(--muted)'}}>
                Normal images typically have entropy between 7.0-7.5 bits. Values exceeding 7.8 often indicate hidden data.
              </p>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#a855f7',marginBottom:'16px'}}>2. File Structure Analysis</h3>
              <p style={{color:'var(--muted)',marginBottom:'16px'}}>
                PNG and JPG files have specific structures. Anomalies often reveal steganography:
              </p>
              <ul style={{paddingLeft:'20px',color:'var(--muted)',marginBottom:'16px'}}>
                <li><strong>PNG:</strong> Check for unusual chunks after IEND marker</li>
                <li><strong>JPG:</strong> Analyze quantization tables and EOI markers</li>
                <li><strong>Metadata:</strong> Examine EXIF data for suspicious patterns</li>
              </ul>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`def detect_png_anomalies(file_path):
    with open(file_path, 'rb') as f:
        data = f.read()
    
    # Find IEND chunk
    iend_pos = data.find(b'IEND')
    if iend_pos != -1:
        # Check for data after IEND
        trailing_data = data[iend_pos + 8:]
        if len(trailing_data) > 0:
            return True, "Suspicious data after IEND"
    return False, "No anomalies detected"`}</code>
              </pre>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#ec4899',marginBottom:'16px'}}>3. Statistical Analysis</h3>
              <p style={{color:'var(--muted)',marginBottom:'16px'}}>
                LSB (Least Significant Bit) steganography creates statistical anomalies:
              </p>
              <ul style={{paddingLeft:'20px',color:'var(--muted)'}}>
                <li>Chi-square test for pixel value distribution</li>
                <li>RS (Regular-Singular) analysis</li>
                <li>Histogram analysis for color distribution patterns</li>
              </ul>
            </div>
          </section>

          <section id="implementation" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Python Implementation</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px',background:'rgba(16,185,129,0.05)'}}>
              <h3 style={{color:'var(--accent)',marginBottom:'16px'}}>Complete Detection System</h3>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`import hashlib
import requests
from PIL import Image
import numpy as np

class SteganalysisDetector:
    def __init__(self, vt_api_key=None):
        self.vt_api_key = vt_api_key
        self.threat_score = 0
        
    def analyze_image(self, image_path):
        results = {
            'file_path': image_path,
            'threats': [],
            'score': 0
        }
        
        # 1. Entropy Analysis
        entropy_val = self.calculate_entropy(image_path)
        if entropy_val > 7.8:
            results['threats'].append('High entropy detected')
            results['score'] += 30
            
        # 2. File Structure Check
        anomalies = self.check_structure(image_path)
        if anomalies:
            results['threats'].extend(anomalies)
            results['score'] += 40
            
        # 3. Hash Check with VirusTotal
        if self.vt_api_key:
            vt_result = self.check_virustotal(image_path)
            if vt_result['malicious'] > 0:
                results['threats'].append(f"VirusTotal: {vt_result['malicious']} detections")
                results['score'] += 50
                
        # 4. Payload Extraction Attempt
        payload = self.extract_payload(image_path)
        if payload:
            results['payload'] = payload
            results['score'] += 20
            
        return results
    
    def extract_payload(self, image_path):
        """Attempt to extract hidden data using common techniques"""
        try:
            img = Image.open(image_path)
            pixels = np.array(img)
            
            # Extract LSB from each color channel
            binary_data = ''
            for row in pixels[:100]:  # Check first 100 rows
                for pixel in row:
                    for color in pixel[:3]:  # RGB channels
                        binary_data += str(color & 1)
                        
            # Convert binary to ASCII
            message = ''
            for i in range(0, len(binary_data), 8):
                byte = binary_data[i:i+8]
                if len(byte) == 8:
                    char = chr(int(byte, 2))
                    if char.isprintable():
                        message += char
                        
            return message if len(message) > 10 else None
        except:
            return None`}</code>
              </pre>
            </div>
          </section>

          <section id="soc" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>SOC Integration</h2>
            
            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px'}}>
              <h3 style={{color:'#f97316',marginBottom:'16px'}}>SIEM Integration Strategy</h3>
              <p style={{color:'var(--muted)',marginBottom:'16px'}}>
                To integrate this detection system into a SOC environment:
              </p>
              <ol style={{paddingLeft:'20px',color:'var(--muted)',lineHeight:'2'}}>
                <li><strong>Automated Scanning:</strong> Deploy as a service monitoring file uploads and email attachments</li>
                <li><strong>Alert Generation:</strong> Create SIEM alerts for threat scores above threshold (e.g., 60)</li>
                <li><strong>Threat Intelligence:</strong> Integrate with MISP for IOC sharing</li>
                <li><strong>Response Playbooks:</strong> Automate containment for confirmed threats</li>
                <li><strong>Metrics Dashboard:</strong> Track detection rates and false positives</li>
              </ol>
            </div>

            <div className={styles.cinematicTimelineContent} style={{width:'100%',marginBottom:'24px',background:'rgba(99,102,241,0.05)'}}>
              <h3 style={{color:'#6366f1',marginBottom:'16px'}}>Sample SIEM Rule (Splunk)</h3>
              <pre style={{background:'#1e293b',padding:'16px',borderRadius:'8px',overflowX:'auto'}}>
                <code style={{color:'#94a3b8',fontSize:'14px'}}>{`index=security sourcetype=steganalysis
| where threat_score > 60
| stats count by src_ip, dest_ip, file_hash
| where count > 3
| alert name="Potential Steganography Campaign Detected"
  severity=high
  description="Multiple suspicious images detected from same source"`}</code>
              </pre>
            </div>
          </section>

          <section id="conclusion" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'32px',marginBottom:'20px',color:'var(--text)'}}>Conclusion</h2>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              Steganography detection requires a multi-layered approach combining statistical analysis, file structure 
              examination, and threat intelligence. The tool I developed successfully identifies hidden malware with 
              minimal false positives, making it suitable for production SOC environments.
            </p>
            <p style={{marginBottom:'20px',color:'var(--muted)'}}>
              Key takeaways:
            </p>
            <ul style={{paddingLeft:'20px',color:'var(--muted)',marginBottom:'20px'}}>
              <li>Entropy analysis provides quick initial screening</li>
              <li>File structure anomalies are strong indicators of tampering</li>
              <li>Combining multiple detection methods reduces false positives</li>
              <li>Integration with threat intelligence enhances detection accuracy</li>
              <li>Automation is crucial for handling scale in enterprise environments</li>
            </ul>
          </section>

          <div style={{marginTop:'60px',padding:'24px',background:'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(168,85,247,0.05))',borderRadius:'12px'}}>
            <h3 style={{color:'var(--accent)',marginBottom:'12px'}}>About the Author</h3>
            <p style={{color:'var(--muted)'}}>
              Aditya Kumar is a cybersecurity engineer specializing in malware analysis and threat detection. 
              This research was presented at ICCAES Conference 2022.
            </p>
          </div>

          <div style={{display:'flex',gap:'16px',marginTop:'48px',justifyContent:'center'}}>
            <Link href="/articles" style={{padding:'14px 24px',background:'var(--primary)',color:'var(--on-primary)',borderRadius:'10px',fontWeight:700}}>
              ← Back to Articles
            </Link>
            <Link href="/articles/session-hijacking" style={{padding:'14px 24px',border:'2px solid var(--accent)',color:'var(--accent)',borderRadius:'10px',fontWeight:700}}>
              Next Article →
            </Link>
          </div>
        </article>
      </main>
      </Layout>
    </>
  )
}
