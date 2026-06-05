import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import Table from "../../../../components/Table";

export default function JavaScriptIntro() {
  const myTable = [
    // Core language & async
    ["async / await", "Wait for tasks without blocking"],
    ["Promise", "Handle results that come later"],
    ["try / catch", "Catch and handle errors"],

    // Modules & environment
    ["import / export", "Share code between files"],
    ["require / module.exports", "Older way to share code"],
    ["process.env", "Store app settings like secrets"],

    // Data & structures
    ["JSON", "Simple format to send data"],
    ["class", "Blueprint for making objects"],
    ["map / filter / reduce", "Easy ways to work with lists"],
    ["spread operator (...)", "Copy or expand values easily"],

    // Node.js basics
    ["fs", "Read and write files"],
    ["http / https", "Make a basic web server"],
    ["path", "Work with file paths"],
    ["Buffer", "Handle raw data like files"],

    // Full stack basics
    ["fetch / axios", "Get data from other servers"],
    ["express()", "Build simple web apps and APIs"],
    ["middleware", "Extra steps before handling requests"],
    ["router", "Organize different web routes"],
    ["cors", "Allow frontend to talk to backend"],
    ["mongoose", "Talk to MongoDB database easily"],
    ["SQL queries", "Ask questions to a database"],
    ["JWT", "Login tokens for users"],
    ["bcrypt", "Lock and check passwords safely"]
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">JavaScript</p>
        </Wrapper>
      </section>

      {/* Definition Section */}
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Definition</p>
          <UL
            contents={[
              <p className="body-mid">
                <span className="bold dark">JavaScript</span> is a high‑level, dynamic programming language used
                for interactive web experiences in browsers and server‑side applications with Node.js.
              </p>,
              <p className="body-mid">
                It supports imperative, functional, and event‑driven paradigms, provides
                first‑class functions, asynchronous primitives, and a flexible type system.
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
              <p className="bullet">DOM Manipulation</p>,
              <p className="bullet">Event Handling</p>,
              <p className="bullet">UI Updates in browsers</p>,
              <p className="bullet">Serverless functions using Node.JS</p>,
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
              <p className="bullet">RESTful API Development</p>,
              <p className="bullet">Database CRUD Operations</p>,
              <p className="bullet">Authentication & Authorization</p>,
              <p className="bullet">Routing in Express.js</p>,
              <p className="bullet">Middleware Functions</p>,
              <p className="bullet">State Management</p>,
              <p className="bullet">Responsive Web Design</p>,
              <p className="bullet">Cross-Origin Resource Sharing (CORS)</p>,
              <p className="bullet">Deployment on Cloud Platforms</p>,
              <p className="bullet">Version Control with Git</p>
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
              <SubjectPoint subject={{ label: "REST & GraphQL APIs", class: "bold dark" }} separator={"-"} hasSpace point={<span>Lightweight backends for web and mobile apps.</span>} />,
              <SubjectPoint subject={{ label: "Real-time systems", class: "bold dark" }} separator={"-"} hasSpace point={<span>WebSocket servers, chat apps, live dashboards.</span>} />,
              <SubjectPoint subject={{ label: "Single Page Applications", class: "bold dark" }} separator={"-"} hasSpace point={<span>Frontends built with React, Vue, Svelte, etc.</span>} />,
              <SubjectPoint subject={{ label: "CLI tools & utilities", class: "bold dark" }} separator={"-"} hasSpace point={<span>Scaffolding, code generators, linters, dev tools.</span>} />,
              <SubjectPoint subject={{ label: "Edge & serverless", class: "bold dark" }} separator={"-"} hasSpace point={<span>Fast, event‑driven compute at the edge or in cloud functions.</span>} />,
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
                JavaScript is the backbone of modern web development, powering both interactive frontends and scalable backends.
              </p>,
              <p className="body-mid">
                Its versatility, rich ecosystem, and ease of use make it an essential skill for developers building full stack applications.
              </p>,
              <p className="body-mid">
                From simple scripts to complex systems, JavaScript continues to evolve and remain at the heart of the digital world.
              </p>,
            ]}
            hasStep
          />
        </Wrapper>
      </section>

    </>
  );
}
