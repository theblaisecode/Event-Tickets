import FooterWrapper from "../styles/FooterWrapper";

function Footer() {
  const time = new Date();

  return (
    <FooterWrapper>
      &copy; {time.getFullYear()} | Made with ❤ by {" "}
      <a
        href="https://twitter.com/theblaisecode"
        target="_blank"
        aria-label="Link to the developers twitter page">
        TheBlaiseCode
      </a>
    </FooterWrapper>
  );
}

export default Footer;
