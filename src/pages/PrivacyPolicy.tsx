import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Bauhaus Geometric Design System ───────────────────────────────────────
   Page: PrivacyPolicy
   Palette: #0F1F38 (bg) · #172E54 (surface) · #E63946 (red) · #F4D03F (yellow) · #2563EB (blue) · #FFFFFF
   Font: Inter Tight
   Zero border-radius. Zero gradient. Zero shadow. Zero emojis.
─────────────────────────────────────────────────────────────────────────── */

interface PrivacyItem {
  num: string;
  color: 'red' | 'yellow' | 'blue';
  title: string;
  paragraphs: string[];
  pills: string[];
}

const privacyData: PrivacyItem[] = [
  {
    num: '01',
    color: 'red',
    title: 'Statutory Scope and Controller Information',
    paragraphs: [
      'This Privacy Policy governs the collection, processing, protection, and retention of personal data through the SendResQPls platform, operated by the Municipal Disaster Risk Reduction and Management Office (MDRRMO Balayan), Local Government Unit of Balayan, Batangas.',
      'Processing is conducted in strict compliance with Republic Act No. 10173 (Data Privacy Act of 2012) and National Privacy Commission (NPC) regulatory advisories for public safety and emergency incident management systems.',
    ],
    pills: ['RA 10173 Compliance', 'MDRRMO Balayan Controller', 'National Privacy Commission'],
  },
  {
    num: '02',
    color: 'yellow',
    title: 'Categories of Personal Data Collected',
    paragraphs: [
      'Account Data: Full name, active mobile telephone number, verified email address, and encrypted authentication credentials collected during registration.',
      'Incident and Geolocation Data: Exact geographic coordinates (latitude and longitude), reported hazard categories, citizen incident descriptions, and uploaded photographic or video scene documentation.',
      'Device and Technical Diagnostic Data: Push notification device tokens, operating system version, access timestamps, and diagnostic transmission logs required for dispatch reliability.',
    ],
    pills: ['Account Credentials', 'Precise GPS Coordinates', 'Incident Media Evidence', 'Push Notification Tokens'],
  },
  {
    num: '03',
    color: 'blue',
    title: 'Lawful Basis and Purpose of Processing',
    paragraphs: [
      'Vital Interests (Section 12.d, RA 10173): Processing is strictly necessary to protect the life, health, and physical safety of the data subject or another natural person during emergency situations.',
      'Public Mandate and Function (Section 12.e, RA 10173): Processing fulfills the statutory duties of MDRRMO Balayan under Republic Act No. 10121 to coordinate disaster mitigation, rapid response, and community rescue operations.',
      'Incident Verification and Audit: Validating the authenticity of incident reports to prevent hoax dispatches, and providing post-action analysis for municipal emergency reviews.',
    ],
    pills: ['Section 12(d) Vital Interests', 'Section 12(e) Public Authority', 'RA 10121 Statutory Mandate'],
  },
  {
    num: '04',
    color: 'red',
    title: 'Absolute Non-Commercial Guarantee',
    paragraphs: [
      'MDRRMO Balayan enforces an absolute prohibition on commercial exploitation. Your personal data is never sold, rented, leased, licensed, monetized, or shared with commercial marketers, advertisers, or third-party data brokers under any circumstances.',
      'All data collected serves solely to execute municipal emergency rescue, public safety alert dissemination, and disaster risk reduction.',
    ],
    pills: ['Zero Data Monetization', 'No Commercial Sharing', 'Public Safety Exclusivity'],
  },
  {
    num: '05',
    color: 'yellow',
    title: 'Authorized Inter-Agency Sharing and Sub-processors',
    paragraphs: [
      'Emergency Responder Units: Incident location, descriptions, and uploaded media are securely dispatched to operational response units including Bureau of Fire Protection (BFP Balayan), Philippine National Police (PNP Balayan), Municipal Health Office (MHO), and Balayan Rescue Units.',
      'Technical Sub-processors: Data transmission leverages industry-standard infrastructure providers bound by rigorous data processing agreements: Supabase (encrypted database storage), Cloudinary (secure media hosting), Firebase by Google (push notification relay), and Brevo (transactional status emails).',
    ],
    pills: ['BFP Fire Unit', 'PNP Police Unit', 'MHO Ambulance', 'Encrypted Sub-processors'],
  },
  {
    num: '06',
    color: 'blue',
    title: 'Data Security Standards and Cryptographic Safeguards',
    paragraphs: [
      'End-to-End Transport Security: All network traffic between your client device and SendResQPls servers is encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS).',
      'Access Control and Storage Security: Passwords are salted and hashed using bcrypt. Access to dispatcher consoles is restricted via role-based access control (RBAC), multi-factor authentication, and concurrent incident locking mechanisms.',
    ],
    pills: ['TLS 1.3 Encryption', 'Bcrypt Password Hashing', 'Role-Based Access Control', 'Incident Locking'],
  },
  {
    num: '07',
    color: 'red',
    title: 'Data Retention, Archival, and Destruction Schedule',
    paragraphs: [
      'Active User Accounts: Retained for the duration of user registration and deleted within thirty (30) days following a verified account deletion request.',
      'Emergency Incident Records: Incident logs and GPS telemetry are retained for three (3) years in compliance with Local Government Unit archival mandates and statutory audit requirements.',
      'Scene Media and Photographs: Uploaded incident images are securely purged after twelve (12) months following formal administrative incident closure, unless subject to judicial subpoena.',
    ],
    pills: ['3-Year LGU Audit Trail', '12-Month Media Purge', '30-Day Account Deletion'],
  },
  {
    num: '08',
    color: 'yellow',
    title: 'Data Subject Rights Under Republic Act 10173',
    paragraphs: [
      'As a registered citizen, you possess statutory rights under the Data Privacy Act of 2012, including: the Right to be Informed, Right to Access your records, Right to Rectification of inaccurate information, Right to Erasure or Blocking, and Right to Damages for substantiated privacy violations.',
      'To exercise your privacy rights or request data copies, submit a formal written inquiry to the Data Protection Officer at the municipal contact coordinates below.',
    ],
    pills: ['Right to Access', 'Right to Rectification', 'Right to Erasure', 'Right to Damages'],
  },
  {
    num: '09',
    color: 'blue',
    title: 'Data Protection Officer (DPO) and Institutional Contact',
    paragraphs: [
      'Municipal Disaster Risk Reduction and Management Office (MDRRMO Balayan), Government Center, Plaza Rizal, Balayan, Batangas 4213, Philippines.',
      'Designated Privacy Contact: Data Protection Compliance Desk. Official Email: mdrrmo.balayan@gmail.com. Emergency Landline: (043) 417-2111. Official Hotline: 0917-123-4567.',
    ],
    pills: ['Plaza Rizal, Balayan', 'mdrrmo.balayan@gmail.com', 'Emergency Hotline: 0917-123-4567'],
  },
];

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenItems(privacyData.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #0F1F38;
          --surface: #172E54;
          --red:     #E63946;
          --yellow:  #F4D03F;
          --blue:    #2563EB;
          --blue-dk: #1D4ED8;
          --white:   #FFFFFF;
          --text-muted: rgba(255,255,255,0.72);
          --divider: rgba(255,255,255,0.12);
          --font:    'Inter Tight', system-ui, sans-serif;
        }

        .privacy-root {
          background: var(--bg);
          color: var(--white);
          font-family: var(--font);
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        /* ─── NAV ─── */
        .privacy-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 5vw, 72px);
          height: 64px;
          border-bottom: 1px solid var(--divider);
          background: #0B132B;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .privacy-nav-logo {
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .privacy-nav-logo-img {
          width: 32px;
          height: 32px;
          object-fit: cover;
          display: block;
        }
        .privacy-nav-shapes {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .privacy-shape-circle {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--red);
          flex-shrink: 0;
        }
        .privacy-shape-square {
          width: 14px; height: 14px;
          background: var(--yellow);
          flex-shrink: 0;
        }
        .privacy-shape-triangle {
          width: 0; height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 14px solid var(--blue);
          flex-shrink: 0;
        }
        .privacy-nav-back {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--white);
          background: transparent;
          border: 1px solid var(--divider);
          padding: 8px 16px;
          cursor: pointer;
          font-family: var(--font);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s;
        }
        .privacy-nav-back:hover {
          background: var(--surface);
          border-color: var(--white);
        }

        /* ─── HERO HEADER ─── */
        .privacy-header {
          padding: clamp(48px, 6vw, 84px) clamp(20px, 5vw, 72px) clamp(32px, 4vw, 56px);
          border-bottom: 1px solid var(--divider);
          background: linear-gradient(180deg, #0B132B 0%, var(--bg) 100%);
        }
        .privacy-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .privacy-label-square {
          width: 10px; height: 10px;
          background: var(--blue);
          flex-shrink: 0;
        }
        .privacy-heading {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: var(--white);
          margin-bottom: 16px;
        }
        .privacy-sub {
          font-size: clamp(14px, 1.8vw, 17px);
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 780px;
          margin-bottom: 24px;
        }
        .privacy-meta-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .privacy-meta-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          background: var(--surface);
          border: 1px solid var(--divider);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--white);
        }

        /* ─── TOOLBAR ─── */
        .privacy-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px clamp(20px, 5vw, 72px);
          border-bottom: 1px solid var(--divider);
          background: rgba(11, 19, 43, 0.5);
          flex-wrap: wrap;
          gap: 12px;
        }
        .privacy-toolbar-count {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .privacy-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .privacy-tool-btn {
          background: transparent;
          border: 1px solid var(--divider);
          color: var(--text-muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 12px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.15s;
        }
        .privacy-tool-btn:hover {
          color: var(--white);
          border-color: var(--white);
          background: var(--surface);
        }

        /* ─── LIST CONTAINER ─── */
        .privacy-content {
          padding: 0 clamp(20px, 5vw, 72px);
          flex: 1;
        }
        .privacy-item {
          border-bottom: 1px solid var(--divider);
        }
        .privacy-trigger {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: clamp(22px, 3vw, 32px) 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          font-family: var(--font);
          color: var(--white);
          transition: opacity 0.15s ease;
        }
        .privacy-trigger:hover {
          opacity: 0.9;
        }
        .privacy-trigger-left {
          display: flex;
          align-items: baseline;
          gap: clamp(14px, 2.5vw, 28px);
          min-width: 0;
        }
        .privacy-num {
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 900;
          font-family: var(--font);
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .privacy-num.red { color: var(--red); }
        .privacy-num.yellow { color: var(--yellow); }
        .privacy-num.blue { color: var(--blue); }

        .privacy-title {
          font-size: clamp(16px, 2.2vw, 22px);
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.25;
          color: var(--white);
        }
        .privacy-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .privacy-item.open .privacy-icon {
          background: var(--blue);
          border-color: var(--blue);
          color: #FFFFFF;
          transform: rotate(45deg);
        }
        .privacy-body {
          padding-left: clamp(30px, 4.5vw, 56px);
          padding-bottom: clamp(24px, 3.5vw, 36px);
          padding-right: clamp(16px, 2vw, 40px);
        }
        .privacy-text {
          font-size: clamp(14px, 1.4vw, 15.5px);
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 860px;
        }
        .privacy-text p + p {
          margin-top: 12px;
        }
        .privacy-pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .privacy-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        /* ─── FOOTER ─── */
        .privacy-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px clamp(20px, 5vw, 72px);
          min-height: 64px;
          border-top: 1px solid var(--divider);
          background: #0B132B;
          flex-wrap: wrap;
          gap: 16px;
        }
        .privacy-footer-copy {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .privacy-footer-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .privacy-footer-link {
          background: none;
          border: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          font-family: inherit;
          transition: color 0.15s ease;
        }
        .privacy-footer-link:hover {
          color: var(--white);
        }
        .privacy-footer-sep {
          color: var(--divider);
          font-size: 12px;
        }
      `}</style>

      <div className="privacy-root">
        {/* Navigation */}
        <nav className="privacy-nav">
          <a
            href="/"
            className="privacy-nav-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src="/logo.jpg" alt="SendResQPls Logo" className="privacy-nav-logo-img" />
            <span>SendResQPls</span>
          </a>

          <div className="privacy-nav-shapes" aria-hidden="true">
            <div className="privacy-shape-circle" />
            <div className="privacy-shape-square" />
            <div className="privacy-shape-triangle" />
          </div>

          <button
            type="button"
            className="privacy-nav-back"
            onClick={() => navigate('/')}
            aria-label="Back to home"
          >
            &larr; Back to Home
          </button>
        </nav>

        {/* Header */}
        <header className="privacy-header">
          <div className="privacy-label">
            <div className="privacy-label-square" aria-hidden="true" />
            02 / Data Protection Governance &bull; Municipality of Balayan
          </div>
          <h1 className="privacy-heading">Privacy Policy</h1>
          <p className="privacy-sub">
            Statutory privacy governance, personal data processing standards, and citizen rights compliance under Republic Act No. 10173 (Data Privacy Act of 2012).
          </p>
          <div className="privacy-meta-bar">
            <span className="privacy-meta-pill">Compliance: RA 10173</span>
            <span className="privacy-meta-pill">Authority: MDRRMO Balayan</span>
            <span className="privacy-meta-pill">Jurisdiction: Republic of the Philippines</span>
          </div>
        </header>

        {/* Toolbar */}
        <div className="privacy-toolbar">
          <span className="privacy-toolbar-count">
            {privacyData.length} Statutory Articles
          </span>
          <div className="privacy-toolbar-actions">
            <button type="button" className="privacy-tool-btn" onClick={expandAll}>
              Expand All
            </button>
            <button type="button" className="privacy-tool-btn" onClick={collapseAll}>
              Collapse All
            </button>
          </div>
        </div>

        {/* Privacy Content List (Numbered like FAQ) */}
        <div className="privacy-content">
          {privacyData.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={idx}
                className={`privacy-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="privacy-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="privacy-trigger-left">
                    <span className={`privacy-num ${item.color}`}>{item.num} /</span>
                    <span className="privacy-title">{item.title}</span>
                  </div>
                  <div className="privacy-icon" aria-hidden="true">
                    +
                  </div>
                </button>

                {isOpen && (
                  <div className="privacy-body">
                    <div className="privacy-text">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {item.pills && (
                      <div className="privacy-pill-list">
                        {item.pills.map((pill, pillIdx) => (
                          <span key={pillIdx} className="privacy-pill">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="privacy-footer">
          <span className="privacy-footer-copy">
            &copy; 2026 MDRRMO Balayan, Batangas
          </span>
          <div className="privacy-footer-links">
            <button
              type="button"
              className="privacy-footer-link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                navigate('/terms-and-conditions');
              }}
            >
              Terms &amp; Conditions
            </button>
            <span className="privacy-footer-sep" aria-hidden="true">&bull;</span>
            <button
              type="button"
              className="privacy-footer-link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                navigate('/get-the-app');
              }}
            >
              Get the App
            </button>
          </div>
          <div className="privacy-nav-shapes" aria-hidden="true">
            <div className="privacy-shape-circle" />
            <div className="privacy-shape-square" />
            <div className="privacy-shape-triangle" />
          </div>
        </footer>
      </div>
    </>
  );
}
