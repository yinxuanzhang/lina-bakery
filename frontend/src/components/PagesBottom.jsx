import './PagesBottom.css';

export function PagesBottom() {
  return (
    <div className="pages-bottom">
      <div className="footer-information">
        <div className="footer-column about-us">
          <div className="footer-header">About Us</div>
          <div className="footer-single-information">Address: 7288 188 Street, Surrey, BC</div>
          <div className="footer-single-information">Email: 1789893950@qq.com</div>
          <div className="footer-single-information">Owner: Lina Ma</div>
        </div>

        <div className="footer-column contact-with-us">
          <div className="footer-header">Contact Us</div>
          <div className="footer-single-information">Business Hours: 7:00 - 21:30</div>
          <div className="footer-single-information">Phone: 778-513-3120</div>
          <div className="footer-single-information">Email: 1789893950@qq.com</div>
          <div className="footer-single-information">
            <a href="https://www.instagram.com/lmlina929/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}