import Heading from "../components/Heading";
import { codeOfConduct } from "../data";
import CodeOfConductWrapper from "../styles/CodeOfConductWrapper";

function CodeOfConduct() {
  const title = (
    <>
      CODE OF <span className="highlight">CONDUCT</span>
    </>
  );

  const subtitle =
    "Everyone is welcome at Coding Conf 2025 and should be able to experience two comfortable conference days. We have established some rules of conduct to warrant exchange of information in a relaxed atmosphere.";

  return (
    <CodeOfConductWrapper>
      <Heading text={title} subtext={subtitle} />

      <ol className="conduct">
        {codeOfConduct.map((item) => {
          const { id, text } = item;
          return <li key={id}>{text}</li>;
        })}
      </ol>
    </CodeOfConductWrapper>
  );
}

export default CodeOfConduct;
