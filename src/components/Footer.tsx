import FooterWrapper from "../styles/FooterWrapper";

function Footer() {
  const time = new Date();

  return (
    <FooterWrapper>
      &copy; {time.getFullYear()} | Made with ❤ by TheBlaiseCode
    </FooterWrapper>
  );
}

export default Footer;
