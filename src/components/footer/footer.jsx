import React from 'react';
import githubIcon from '../../img/github-icon.png';
import toTopArrow from '../../img/totop.png';
import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="text-center py-3">
        <a href="https://github.com/lkarow/myFlix-client" target="_blank">
          <img src={githubIcon} alt="GitHub logo" className="icon" />
          Code on GitHub
        </a>
      </div>

      <div className="acknowledgment text-center">
        <a href="https://www.freepik.com/author/starline" target="_blank">
          Background image designed by starline from freepik.com.
        </a>
        <br />
        <a href="https://www.iconfinder.com/justui" target="_blank">
          GitHub icon designed by Just UI from iconfinder.com.
        </a>
      </div>

      <div className="container-to-top text-center">
        <button
          className="btn-to-top"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          <img src={toTopArrow} alt="arrow to top" />
        </button>
      </div>
    </footer>
  );
}
