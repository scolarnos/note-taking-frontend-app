import React from "react";
import styles from "./landingpage.module.css";

// Replace local Font Awesome import with CDN for consistency
const fontAwesomeCSS = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";

const LandingPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1>
              <a href="/" className={styles.logo}>
                <img src="/images/App_Logo.png" alt="Note-Taking App" />
              </a>
            </h1>
            <p>Capture Ideas, Organize Thoughts, Anytime, Anywhere</p>
          </header>
        </div>
      </div>

      {/* Banner */}
      <section className={styles.banner}>
        <header className={styles.header}>
          <h2>
            Welcome to <strong>Note-Taking App</strong>
          </h2>
          <p>A simple, intuitive tool to organize your thoughts and boost productivity.</p>
        </header>
      </section>

      {/* Features */}
      <div className={styles.wrapper}>
        <section className={`${styles.container} ${styles.special}`}>
          <header className={styles.header}>
            <h2>Why Choose Note-Taking App?</h2>
            <p>Discover the features that make note-taking effortless and efficient.</p>
          </header>
          <div className={styles.row}>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <a href="#" className={styles.imageFeatured}>
                <img src="/images/feature1.jpg" alt="Quick Note Creation" loading="lazy" />
              </a>
              <header className={styles.header}>
                <h3>Quick Note Creation</h3>
              </header>
              <p>Jot down ideas in seconds with a simple, intuitive interface.</p>
            </article>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <a href="#" className={styles.imageFeatured}>
                <img src="/images/feature2.jpg" alt="Seamless Editing" loading="lazy" />
              </a>
              <header className={styles.header}>
                <h3>Seamless Editing</h3>
              </header>
              <p>Edit and organize your notes effortlessly on any device.</p>
            </article>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <a href="#" className={styles.imageFeatured}>
                <img src="/images/feature3.jpg" alt="Persistent Storage" loading="lazy" />
              </a>
              <header className={styles.header}>
                <h3>Persistent Storage</h3>
              </header>
              <p>Your notes are securely saved and accessible anytime.</p>
            </article>
          </div>
        </section>
      </div>

      {/* Main */}
      <div className={styles.wrapperStyle2}>
        <article className={`${styles.container} ${styles.special}`}>
          <a href="#" className={styles.imageFeatured}>
            <img src="/images/app-screenshot.jpg" alt="Note-Taking App Screenshot" loading="lazy" />
          </a>
          <header className={styles.header}>
            <h2>Organize Your Life with Ease</h2>
            <p>Start using Note-Taking App today to keep your ideas in one place.</p>
          </header>
          <p>
            Whether you're a student, professional, or creative, our app helps you stay organized and focused. Create
            notes on the go, edit them anytime, and access them from any device—all with a clean, user-friendly
            interface.
          </p>
        </article>
      </div>

      {/* Testimonials */}
      <div className={styles.wrapperStyle2}>
        <section className={`${styles.container} ${styles.special}`}>
          <header className={styles.header}>
            <h2>What Our Users Say</h2>
            <p>Real feedback from real users of Note-Taking App.</p>
          </header>
          <div className={styles.row}>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <blockquote>
                <p>"This app has transformed how I organize my ideas. The seamless editing feature is a game-changer!"</p>
                <footer>- Sarah M., Freelance Writer</footer>
              </blockquote>
            </article>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <blockquote>
                <p>"I love how quickly I can jot down notes during meetings. It’s so intuitive and easy to use."</p>
                <footer>- John D., Project Manager</footer>
              </blockquote>
            </article>
            <article className={`${styles.col4} ${styles.col12Mobile} ${styles.special}`}>
              <blockquote>
                <p>"The persistent storage ensures I never lose my notes, even when switching devices."</p>
                <footer>- Emily R., Student</footer>
              </blockquote>
            </article>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <section className={`${styles.ctaBanner} ${styles.container} ${styles.special}`}>
        <header className={styles.header}>
          <h2 style={{ color: "#fff" }}>Ready to Get Started?</h2>
          <p style={{ color: "#ddd" }}>Sign up now and start organizing your thoughts effortlessly.</p>
        </header>
        <footer className={styles.footer}>
          <a href="/signup" className={styles.button}>
            Sign Up Now
          </a>
        </footer>
      </section>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col12}>
              {/* Contact */}
              <section className={styles.contact}>
                <header className={styles.header}>
                  <h3>Ready to Simplify Your Note-Taking?</h3>
                </header>
                <p>Join thousands of users who trust Note-Taking App to stay organized.</p>
              </section>

              {/* Social Media */}
              <section className={styles.social}>
                <ul className={styles.icons}>
                  <li>
                    <a href="#" className={`${styles.icon} ${styles.brands} ${styles.faTwitter}`}>
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${styles.icon} ${styles.brands} ${styles.faFacebookF}`}>
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${styles.icon} ${styles.brands} ${styles.faInstagram}`}>
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${styles.icon} ${styles.brands} ${styles.faLinkedinIn}`}>
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </section>

              {/* Copyright */}
              <div className={styles.copyright}>
                <ul className={styles.menu}>
                  <li>© 2025 Note-Taking App. All rights reserved.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;