import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';

export default function App() {
  return (
    <>
      <nav>
        <img
          id="logo"
          src="https://www.nhaschools.com/content/images/nha-logo-blue.svg?v=1.7.16"
        />
        <div className="mobile-right-nav-wrapper">
          <GiHamburgerMenu id="hamburger" />
          <div className="menu-text">Menu</div>
        </div>
      </nav>
      <div className="main-wrapper">
        <main>
          <div>Mockup made by Andres F</div>
          <div>The site is responsive for mobile and desktop devices</div>

          <div>I used tech like react, javascript, html, and css</div>
        </main>
      </div>

      <div className="navy-wrapper">
        <div className="find-a-school-text">Find a School Near You</div>
        <hr className="green-hr"></hr>
        <div className="state-select">
          <div style={{ padding: '10px' }}>OH</div>
          <MdKeyboardArrowDown size="1.6rem" style={{ padding: '10px' }} />
        </div>
        <div>
          <div className="or-text">OR</div>
          <hr className="white-hr"></hr>
        </div>
        <div className="state-select">
          <div style={{ padding: '10px' }}>Zip Code</div>
          <MdSearch
            size="1.6rem"
            style={{ borderLeft: '1px solid white', padding: '10px' }}
          />
        </div>
      </div>

      <div className="navy-wrapper-outer">
        <div className="navy-wrapper-desktop">
          <div className="find-a-school-text">Find a School Near You</div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="state-select-desktop">
              <div style={{ padding: '10px' }}>OH</div>
              <MdKeyboardArrowDown size="1.6rem" style={{ padding: '10px' }} />
            </div>
            <div style={{ color: 'white' }}>OR</div>
            <div className="state-select-desktop">
              <div style={{ padding: '10px' }}>Zip Code</div>
              <MdSearch
                size="1.6rem"
                style={{ borderLeft: '1px solid white', padding: '10px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
