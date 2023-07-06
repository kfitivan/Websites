import "./Footerstyles.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Omukazi W'Omutima</h1>
          <img className="logo" src={require ("../assets/logo.PNG")} alt="mylogo"/>
          <p>Farm With Us Today</p>
        </div>
        <div>
          <a href="https://www.facebook.com/consolata.tumwesigye.1/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/consolatat" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCXCofBeG91hLc7RAIlRyDnQ" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
          <a href="https://www.linkedin.com/in/consolata-tumwesigye" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Kanungu Model Farm</a>
          <a href="https://ee.kobotoolbox.org/x/1Zr84jO7" target="_blank" rel="noopener noreferrer">Farmers Data Collect</a>
          <a href="/">Omukazi W'Omutima Sacco</a>
          <a href="/">Tranding License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://www.facebook.com/consolata.tumwesigye.1/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.youtube.com/channel/UCXCofBeG91hLc7RAIlRyDnQ" target="_blank" rel="noopener noreferrer">Youtube</a>
          <a href="https://twitter.com/consolatat" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/consolata-tumwesigye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubshoot</a>
          <a href="/Contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
