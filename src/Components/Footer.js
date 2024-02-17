const Footer = () => {
  return (
    <footer id="footer" style={{ background: "black" }}>
      <div class="container">
        <div class="social-links">
          <a
            href="https://www.instagram.com/deexithmadas/"
            class="instagram"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/MDeexith" class="google-plus">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/deexith-madas/"
            class="linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:deexithmadas227@gmail.com">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="credits" style={{ color: "#74808a" }}>
          Made By Deexith Madas
        </div>
      </div>
    </footer>
  );
};

export default Footer;
