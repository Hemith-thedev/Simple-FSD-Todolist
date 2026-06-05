import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import Table from "../../../../components/Table";

export default function TypeScriptIntro() {
  const myTable = [
    // Core language
    ["Types", "Telling the computer if data is text, number or boolean (true/false)"],
    ["Interfaces", "A 'checklist' to make sure an object has all its parts"],
    ["Generics", "A reusable tool that works with any data type you give it"],
    ["Enums", "A fixed list of choices (like 'Pending', 'Shipped', 'Delivered') to avoid typos"],
    ["Type Aliases", "Giving a short 'nickname' to make it easier to read"],
    ["Union Types", "Allowing a variable to be 'This' OR 'That' (e.g., a String or Null)"],
    ["Intersection Types", "Merging two different checklists into one master list"],
    ["Type Inference", "The computer 'guessing' the type so you don't have to type it out"],
    ["Modules", "Using 'import' and 'export' to keep your code organized in different files"],
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">TypeScript</p>
        </Wrapper>
      </section>

      {/* Definition Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Definition</p>
          <UL
            contents={[
              <p className="body-mid">
                <span className="bold dark">TypeScript</span> is a superset of JavaScript that adds static typing and modern features, making code safer and easier to maintain.
              </p>,
              <p className="body-mid">
                It compiles down to plain JavaScript, so it runs anywhere JavaScript runs — in browsers, Node.js, and full stack frameworks.
              </p>,
            ]}
            hasStep
          />
        </Wrapper>
      </section>

      {/* Uses Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Uses</p>
          <UL
            contents={[
              <p className="bullet">Catch errors before running code</p>,
              <p className="bullet">Make large projects easier to manage</p>,
              <p className="bullet">Improve collaboration with clear contracts</p>,
              <p className="bullet">Build typed APIs and frontends</p>,
            ]}
            hasStep
          />
        </Wrapper>
      </section>

      {/* Features Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Features</p>
          <UL
            contents={[
              <p className="bullet">Static type checking</p>,
              <p className="bullet">Interfaces and generics</p>,
              <p className="bullet">Enums and type aliases</p>,
              <p className="bullet">Modern JavaScript features with safety</p>,
              <p className="bullet">Great tooling and editor support</p>,
            ]}
            hasStep
          />
        </Wrapper>
      </section>

      {/* Keywords & Uses Section with Table */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Keywords & Uses</p>
          <Table
            heads={["Keyword", "Usage"]}
            rows={myTable}
          />
        </Wrapper>
      </section>

      {/* Applications Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Applications</p>
          <UL
            contents={[
              <SubjectPoint subject={{ label: "Frontend frameworks", class: "bold dark" }} separator={"-"} hasSpace point={<span>React, Angular, Vue with strong typing.</span>} />,
              <SubjectPoint subject={{ label: "Backend APIs", class: "bold dark" }} separator={"-"} hasSpace point={<span>Express, NestJS with type safety.</span>} />,
              <SubjectPoint subject={{ label: "Database layers", class: "bold dark" }} separator={"-"} hasSpace point={<span>ORMs like Prisma or TypeORM.</span>} />,
              <SubjectPoint subject={{ label: "Tooling", class: "bold dark" }} separator={"-"} hasSpace point={<span>CLI tools, build systems, code generators.</span>} />,
              <SubjectPoint subject={{ label: "Cross‑platform apps", class: "bold dark" }} separator={"-"} hasSpace point={<span>Electron, React Native with TypeScript.</span>} />,
            ]}
            hasStep
          />
        </Wrapper>
      </section>

      {/* Conclusion Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Conclusion</p>
          <UL
            contents={[
              <p className="body-mid">
                TypeScript makes JavaScript development more reliable by adding types and better tooling.
              </p>,
              <p className="body-mid">
                It is widely used in modern full stack projects, from frontend frameworks to backend APIs.
              </p>,
              <p className="body-mid">
                Learning TypeScript is a strong step toward building scalable, maintainable applications.
              </p>,
            ]}
            hasStep
          />
        </Wrapper>
      </section>
    </>
  );
}
