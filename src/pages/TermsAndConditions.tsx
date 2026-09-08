import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Bauhaus Geometric Design System ───────────────────────────────────────
   Page: TermsAndConditions
   Palette: #0F1F38 (bg) · #172E54 (surface) · #E63946 (red) · #F4D03F (yellow) · #2563EB (blue) · #FFFFFF
   Font: Inter Tight
   Zero border-radius. Zero gradient. Zero shadow. Zero emojis.
─────────────────────────────────────────────────────────────────────────── */

interface TermItem {
  num: string;
  color: 'red' | 'yellow' | 'blue';
  title: string;
  paragraphs: string[];
  pills: string[];
}

const termsData: TermItem[] = [
  {
    num: '01',
    color: 'red',
    title: 'Acceptance of Terms and Governing Authority',
    paragraphs: [
      'The SendResQPls platform is the official digital disaster incident reporting service authorized and operated by the Municipal Disaster Risk Reduction and Management Office (MDRRMO Balayan), Local Government Unit of Balayan, Batangas.',
      'By accessing, registering on, or utilizing SendResQPls, you enter into a legally binding agreement and agree to comply with Republic Act No. 10121 (Philippine Disaster Risk Reduction and Management Act of 2010), Republic Act No. 10173 (Data Privacy Act of 2012), and municipal emergency ordinances.',
    ],
    pills: ['RA 10121 Mandate', 'MDRRMO Balayan', 'Official Municipal Service'],
  },
  {
    num: '02',
    color: 'yellow',
    title: 'Strict Prohibition of False Reports and Hoaxes',
    paragraphs: [
      'Knowingly filing false, staged, prank, or malicious emergency incident reports endangers public safety, exhausts municipal rescue logistics, and delays aid to real victims.',
      'Under Presidential Decree No. 1727, Article 155 of the Revised Penal Code (Alarms and Scandals), and Republic Act No. 10175 (Cybercrime Prevention Act), violators face criminal prosecution, imprisonment of up to 5 years, civil liability for deployment costs, and permanent system blacklisting.',
    ],
    pills: ['PD 1727 Sanctions', 'Article 155 RPC', 'Up to 5 Years Imprisonment', 'Civil Liability'],
  },
  {
    num: '03',
    color: 'blue',
    title: 'Immediate Life-Threatening Emergencies',
    paragraphs: [
      'SendResQPls is designed as an auxiliary technology dispatch channel. It is not an unconditional guarantee of uninterrupted connectivity.',
      'In active life-or-death crises (including active structure fires, cardiac arrest, severe trauma, armed violence, or when cellular data is degraded), citizens must immediately call municipal hotlines: Hotline 911, MDRRMO Balayan at 0917-123-4567, BFP Balayan at (043) 417-2111, or PNP Balayan at (043) 211-4111.',
    ],
    pills: ['Hotline 911 Priority', 'MDRRMO: 0917-123-4567', 'BFP Fire: (043) 417-2111', 'PNP Police: (043) 211-4111'],
  },
  {
    num: '04',
    color: 'red',
    title: 'User Account Veracity and Registration Integrity',
    paragraphs: [
      'The service is provided for residents, workers, business operators, and visitors within the territorial boundaries of the Municipality of Balayan, Batangas.',
      'Users must register with truthful legal names, active mobile telephone numbers, and verified email addresses so Command Center dispatchers can perform immediate on-scene verification.',
    ],
    pills: ['Authentic Identity', 'Active Mobile Contact', 'Balayan Jurisdiction'],
  },
  {
    num: '05',
    color: 'yellow',
    title: 'Geolocation Data and Incident Scene Photographs',
    paragraphs: [
      'When you submit an emergency report, your device\'s precise GPS coordinates (latitude and longitude) are recorded to guide first responders directly to the incident site.',
      'By uploading photographs of an emergency scene, you grant MDRRMO Balayan an operational, royalty-free license to use, reproduce, and share the media with deployed field units and authorized government post-incident assessment bodies.',
    ],
    pills: ['Precise GPS Pinning', 'Scene Evidence Licensing', 'Responder Guidance'],
  },
  {
    num: '06',
    color: 'blue',
    title: 'Inter-Agency Triage and Dispatch Prioritization',
    paragraphs: [
      'Reports are evaluated in real time at the MDRRMO Balayan Command Center and triaged based on severity.',
      'Depending on hazard classification, reports are routed to: Bureau of Fire Protection (BFP), Philippine National Police (PNP), Municipal Health Office (MHO) ambulances, Municipal Engineering Office, or MDRRMO Rescue Units. Dispatchers reserve operational discretion to prioritize life-threatening incidents.',
    ],
    pills: ['Severity Triage', 'BFP Fire', 'PNP Police', 'MHO Ambulance', 'MDRRMO Rescue'],
  },
  {
    num: '07',
    color: 'red',
    title: 'Limitation of Liability and Force Majeure',
    paragraphs: [
      'SendResQPls is deployed as a public safety service in good faith by the Local Government Unit of Balayan.',
      'MDRRMO Balayan and its technical operators are not liable for transmission failures, cellular carrier downtime, power blackouts, or response delays resulting from severe typhoons, earthquakes, volcanic eruptions, bridge collapses, or force majeure events.',
    ],
    pills: ['Good Faith Service', 'Force Majeure', 'Carrier Outage Disclaimers'],
  },
  {
    num: '08',
    color: 'yellow',
    title: 'Governing Law and Exclusive Venue',
    paragraphs: [
      'These Terms and Conditions are governed exclusively by the laws of the Republic of the Philippines.',
      'Any legal action, claim, or proceeding arising out of or related to the use of the SendResQPls system shall be filed exclusively in the proper courts of competent jurisdiction in the Province of Batangas, Philippines.',
    ],
    pills: ['Republic of the Philippines', 'Province of Batangas', 'Judicial Venue'],
  },
];

export default function TermsAndConditions() {
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
    setOpenItems(termsData.map((_, i) => i));
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

        .terms-root {
          background: var(--bg);
          color: var(--white);
          font-family: var(--font);
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        /* ─── NAV ─── */
        .terms-nav {
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
        .terms-nav-logo {
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
        .terms-nav-logo-img {
          width: 32px;
          height: 32px;
          object-fit: cover;
          display: block;
        }
        .terms-nav-shapes {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .terms-shape-circle {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--red);
          flex-shrink: 0;
        }
        .terms-shape-square {
          width: 14px; height: 14px;
          background: var(--yellow);
          flex-shrink: 0;
        }
        .terms-shape-triangle {
          width: 0; height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 14px solid var(--blue);
          flex-shrink: 0;
        }
        .terms-nav-back {
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
        .terms-nav-back:hover {
          background: var(--surface);
          border-color: var(--white);
        }

        /* ─── HERO HEADER ─── */
        .terms-header {
          padding: clamp(48px, 6vw, 84px) clamp(20px, 5vw, 72px) clamp(32px, 4vw, 56px);
          border-bottom: 1px solid var(--divider);
          background: linear-gradient(180deg, #0B132B 0%, var(--bg) 100%);
        }
        .terms-label {
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
        .terms-label-square {
          width: 10px; height: 10px;
          background: var(--red);
          flex-shrink: 0;
        }
        .terms-heading {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: var(--white);
          margin-bottom: 16px;
        }
        .terms-sub {
          font-size: clamp(14px, 1.8vw, 17px);
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 780px;
          margin-bottom: 24px;
        }
        .terms-meta-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .terms-meta-pill {
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
        .terms-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px clamp(20px, 5vw, 72px);
          border-bottom: 1px solid var(--divider);
          background: rgba(11, 19, 43, 0.5);
          flex-wrap: wrap;
          gap: 12px;
        }
        .terms-toolbar-count {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .terms-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .terms-tool-btn {
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
        .terms-tool-btn:hover {
          color: var(--white);
          border-color: var(--white);
          background: var(--surface);
        }

        /* ─── LIST CONTAINER ─── */
        .terms-content {
          padding: 0 clamp(20px, 5vw, 72px);
          flex: 1;
        }
        .terms-item {
          border-bottom: 1px solid var(--divider);
        }
        .terms-trigger {
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
        .terms-trigger:hover {
          opacity: 0.9;
        }
        .terms-trigger-left {
          display: flex;
          align-items: baseline;
          gap: clamp(14px, 2.5vw, 28px);
          min-width: 0;
        }
        .terms-num {
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 900;
          font-family: var(--font);
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .terms-num.red { color: var(--red); }
        .terms-num.yellow { color: var(--yellow); }
        .terms-num.blue { color: var(--blue); }

        .terms-title {
          font-size: clamp(16px, 2.2vw, 22px);
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.25;
          color: var(--white);
        }
        .terms-icon {
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
        .terms-item.open .terms-icon {
          background: var(--blue);
          border-color: var(--blue);
          color: #FFFFFF;
          transform: rotate(45deg);
        }
        .terms-body {
          padding-left: clamp(30px, 4.5vw, 56px);
          padding-bottom: clamp(24px, 3.5vw, 36px);
          padding-right: clamp(16px, 2vw, 40px);
        }
        .terms-text {
          font-size: clamp(14px, 1.4vw, 15.5px);
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 860px;
        }
        .terms-text p + p {
          margin-top: 12px;
        }
        .terms-pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .terms-pill {
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
        .terms-footer {
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
        .terms-footer-copy {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .terms-footer-links {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .terms-footer-link {
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
        .terms-footer-link:hover {
          color: var(--white);
        }
        .terms-footer-sep {
          color: var(--divider);
          font-size: 12px;
        }
      `}</style>

      <div className="terms-root">
        {/* Navigation */}
        <nav className="terms-nav">
          <a
            href="/"
            className="terms-nav-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src="/logo.jpg" alt="SendResQPls Logo" className="terms-nav-logo-img" />
            <span>SendResQPls</span>
          </a>

          <div className="terms-nav-shapes" aria-hidden="true">
            <div className="terms-shape-circle" />
            <div className="terms-shape-square" />
            <div className="terms-shape-triangle" />
          </div>

          <button
            type="button"
            className="terms-nav-back"
            onClick={() => navigate('/')}
            aria-label="Back to home"
          >
            &larr; Back to Home
          </button>
        </nav>

        {/* Header */}
        <header className="terms-header">
          <div className="terms-label">
            <div className="terms-label-square" aria-hidden="true" />
            01 / Legal Governance &bull; Municipality of Balayan
          </div>
          <h1 className="terms-heading">Terms &amp; Conditions</h1>
          <p className="terms-sub">
            Official operational governance, emergency reporting regulations, and citizen compliance terms under Republic Act No. 10121 and Presidential Decree No. 1727.
          </p>
          <div className="terms-meta-bar">
            <span className="terms-meta-pill">Effective: September 2025</span>
            <span className="terms-meta-pill">Authority: MDRRMO Balayan</span>
            <span className="terms-meta-pill">Jurisdiction: Balayan, Batangas</span>
          </div>
        </header>

        {/* Toolbar */}
        <div className="terms-toolbar">
          <span className="terms-toolbar-count">
            {termsData.length} Governance Articles
          </span>
          <div className="terms-toolbar-actions">
            <button type="button" className="terms-tool-btn" onClick={expandAll}>
              Expand All
            </button>
            <button type="button" className="terms-tool-btn" onClick={collapseAll}>
              Collapse All
            </button>
          </div>
        </div>

        {/* Terms Content List (Numbered like FAQ) */}
        <div className="terms-content">
          {termsData.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={idx}
                className={`terms-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="terms-trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="terms-trigger-left">
                    <span className={`terms-num ${item.color}`}>{item.num} /</span>
                    <span className="terms-title">{item.title}</span>
                  </div>
                  <div className="terms-icon" aria-hidden="true">
                    +
                  </div>
                </button>

                {isOpen && (
                  <div className="terms-body">
                    <div className="terms-text">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {item.pills && (
                      <div className="terms-pill-list">
                        {item.pills.map((pill, pillIdx) => (
                          <span key={pillIdx} className="terms-pill">
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
        <footer className="terms-footer">
          <span className="terms-footer-copy">
            &copy; 2026 MDRRMO Balayan, Batangas
          </span>
          <div className="terms-footer-links">
            <button
              type="button"
              className="terms-footer-link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                navigate('/privacy-policy');
              }}
            >
              Privacy Policy
            </button>
            <span className="terms-footer-sep" aria-hidden="true">&bull;</span>
            <button
              type="button"
              className="terms-footer-link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                navigate('/get-the-app');
              }}
            >
              Get the App
            </button>
          </div>
          <div className="terms-nav-shapes" aria-hidden="true">
            <div className="terms-shape-circle" />
            <div className="terms-shape-square" />
            <div className="terms-shape-triangle" />
          </div>
        </footer>
      </div>
    </>
  );
}
