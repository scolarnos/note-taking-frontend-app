import React from "react";
import "../assets/css/main.css"; // Importing the main.css file

const LandingPage = () => {
  return (
    <div id="page-wrapper">
      {/* Header */}
      <div id="header">
        <div className="inner">
          <header>
            <h1>
              <a href="/" id="logo">
                <img src="/images/App_Logo.png" alt="Note-Taking App" />
              </a>
            </h1>
            <p>Capture Ideas, Organize Thoughts, Anytime, Anywhere</p>
          </header>
        </div>
      </div>

      {/* Banner */}
      <section id="banner">
        <header>
          <h2>
            Welcome to <strong>Note-Taking App</strong>
          </h2>
          <p>A simple, intuitive tool to organize your thoughts and boost productivity.</p>
        </header>
      </section>

      {/* Features */}
      <div className="wrapper style1">
        <section id="features" className="container special">
          <header>
            <h2>Why Choose Note-Taking App?</h2>
            <p>Discover the features that make note-taking effortless and efficient.</p>
          </header>
          <div className="row">
            <article className="col-4 col-12-mobile special">
              <a href="#" className="image featured">
                <img src="/images/feature1.jpg" alt="Quick Note Creation" />
              </a>
              <header>
                <h3>Quick Note Creation</h3>
              </header>
              <p>Jot down ideas in seconds with a simple, intuitive interface.</p>
            </article>
            <article className="col-4 col-12-mobile special">
              <a href="#" className="image featured">
                <img src="/images/feature2.jpg" alt="Seamless Editing" />
              </a>
              <header>
                <h3>Seamless Editing</h3>
              </header>
              <p>Edit and organize your notes effortlessly on any device.</p>
            </article>
            <article className="col-4 col-12-mobile special">
              <a href="#" className="image featured">
                <img src="/images/feature3.jpg" alt="Persistent Storage" />
              </a>
              <header>
                <h3>Persistent Storage</h3>
              </header>
              <p>Your notes are securely saved and accessible anytime.</p>
            </article>
          </div>
        </section>
      </div>

      {/* Main */}
      <div className="wrapper style2">
        <article id="main" className="container special">
          <a href="#" className="image featured">
            <img src="/images/app-screenshot.jpg" alt="Note-Taking App Screenshot" />
          </a>
          <header>
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
      <div className="wrapper style2">
        <section id="testimonials" className="container special">
          <header>
            <h2>What Our Users Say</h2>
            <p>Real feedback from real users of Note-Taking App.</p>
          </header>
          <div className="row">
            <article className="col-4 col-12-mobile special">
              <blockquote>
                <p>"This app has transformed how I organize my ideas. The seamless editing feature is a game-changer!"</p>
                <footer>- Sarah M., Freelance Writer</footer>
              </blockquote>
            </article>
            <article className="col-4 col-12-mobile special">
              <blockquote>
                <p>"I love how quickly I can jot down notes during meetings. It’s so intuitive and easy to use."</p>
                <footer>- John D., Project Manager</footer>
              </blockquote>
            </article>
            <article className="col-4 col-12-mobile special">
              <blockquote>
                <p>"The persistent storage ensures I never lose my notes, even when switching devices."</p>
                <footer>- Emily R., Student</footer>
              </blockquote>
            </article>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <section id="cta-banner" className="container special">
        <header>
          <h2 style={{ color: "#fff" }}>Ready to Get Started?</h2>
          <p style={{ color: "#ddd" }}>Sign up now and start organizing your thoughts effortlessly.</p>
        </header>
        <footer>
          <a href="/signup" className="button">
            Sign Up Now
          </a>
        </footer>
      </section>

      {/* Footer */}
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Contact */}
              <section className="contact">
                <header>
                  <h3>Ready to Simplify Your Note-Taking?</h3>
                </header>
                <p>Join thousands of users who trust Note-Taking App to stay organized.</p>
              </section>

              {/* Social Media */}
              <section className="social">
                <ul className="icons">
                  <li>
                    <a href="#" className="icon brands fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-linkedin-in">
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </section>

              {/* Copyright */}
              <div className="copyright">
                <ul className="menu">
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