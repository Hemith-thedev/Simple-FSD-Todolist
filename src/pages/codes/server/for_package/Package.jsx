import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { FileJson } from "lucide-react";

export default function ServerPackage() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">package.json</p>
        </Wrapper>
      </section>

      <section className="section code-section">
        <Wrapper>
          <UL
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <UL
                        head={<p className="heading-high bold gradient-bg bg-p-l-r clip-text">Scripts</p>}
                        contents={[
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{
                                  label: '"start"',
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>run the server entry file with <span className="code">npm start</span>.</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: '"test"',
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>defines the command that will run when you execute.</span>}
                              />,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="heading-high bold gradient-bg bg-p-l-r clip-text">Dependencies</p>}
                        contents={[
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{ label: "express", class: "code" }}
                                separator={"-"}
                                hasSpace
                                point={<span>Web framework for routing and middleware.</span>}
                              />,
                              <SubjectPoint
                                subject={{ label: "cors", class: "code" }}
                                separator={"-"}
                                hasSpace
                                point={<span>Enables cross-origin requests from the frontend.</span>}
                              />,
                              <SubjectPoint
                                subject={{ label: "mysql2", class: "code" }}
                                separator={"-"}
                                hasSpace
                                point={<span>MySQL client with Promise support; used for connection pools and parameterized queries.</span>}
                              />,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="heading-high bold gradient-bg bg-p-l-r clip-text">Core fields</p>}
                        contents={[
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{
                                  label: "main",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>entry file for the package; align with your server entry (e.g., <span className="code">server.js</span>).</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: "type",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span><span className="code">"commonjs"</span> to use CommonJS modules.</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: "Metadata",
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span><span className="code">"name"</span>, <span className="code">"version"</span>, <span className="code">"author"</span>, <span className="code">"license"</span>.</span>}
                              />,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="heading-high bold gradient-bg bg-p-l-r clip-text">How to use</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Install dependencies: <span className="code">npm install</span>.</p>,
                              <p className="bullet">Start server: <span className="code">npm start</span>.</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="heading-high bold gradient-bg bg-p-l-r clip-text">Best practices</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Keep secrets out of <span className="code">package.json</span>; use environment variables for database credentials.</p>,
                              <p className="bullet">Use parameterized queries to prevent SQL injection.</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                    ]}
                    hasMarginBottom
                  />
                ]}
              />,
              <CodeDisplay
                label="JSON"
                Code={
                  <>
                    <span><span className="yellow">{"{"}</span><br /></span>
                    <span>  <span className="lightblue">"name"</span>: <span className="orange">"server"</span>,<br /></span>
                    <span>  <span className="lightblue">"version"</span>: <span className="orange">"1.0.0"</span>,<br /></span>
                    <span>  <span className="lightblue">"description"</span>: <span className="orange">""</span>,<br /></span>
                    <span>  <span className="lightblue">"main"</span>: <span className="orange">"index.js"</span>,<br /></span>
                    <span>  <span className="lightblue">"scripts"</span>: <span className="purple">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">"test"</span>: <span className="orange">"echo <span className="lightyellow">\"</span>Error: no test specified<span className="lightyellow">\"</span> && exit 1"</span>,<br /></span>
                    <span>    <span className="lightblue">"start"</span>: <span className="orange">"node server.js"</span><br /></span>
                    <span>  <span className="purple">{"}"}</span>,<br /></span>
                    <span>  <span className="lightblue">"keywords"</span>: <span className="orange"><span className="purple">[]</span></span>,<br /></span>
                    <span>  <span className="lightblue">"author"</span>: <span className="orange">""</span>,<br /></span>
                    <span>  <span className="lightblue">"license"</span>: <span className="orange">"ISC"</span>,<br /></span>
                    <span>  <span className="lightblue">"type"</span>: <span className="orange">"commonjs"</span>,<br /></span>
                    <span>  <span className="lightblue">"dependencies"</span>: <span className="purple">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">"cors"</span>: <span className="orange">"^2.8.6"</span>,<br /></span>
                    <span>    <span className="lightblue">"express"</span>: <span className="orange">"^5.2.1"</span>,<br /></span>
                    <span>    <span className="lightblue">"mysql2"</span>: <span className="orange">"^3.19.1"</span><br /></span>
                    <span>  <span className="purple">{"}"}</span><br /></span>
                    <span><span className="yellow">{"}"}</span><br /></span>
                  </>
                }
                icon={<FileJson />}
                hasMarginBottom={true}
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  );
}
