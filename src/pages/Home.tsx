import Form from "../components/Form";
import Heading from "../components/Heading";
import HomeWrapper from "../styles/HomeWrapper";

function Home() {
  const time = new Date();
  const text = `Your Journey to Coding Conf ${time.getFullYear()} Starts Here!`;
  const subtext = "Secure your spot at this year's biggest coding conference";

  return (
    <HomeWrapper>
      <Heading text={text} subtext={subtext} />

      <Form />
    </HomeWrapper>
  );
}

export default Home;
