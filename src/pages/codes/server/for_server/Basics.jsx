import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { CurlyBraces } from "lucide-react";

export default function ServerBasics() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Server Code</p>
        </Wrapper>
      </section>

      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">
                Basics
              </p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <UL
                        head={<p className="body-mid bold">Core packages</p>}
                        contents={[
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{ label: <span className="code">express</span> }}
                                separator={"-"}
                                hasSpace
                                point={<span>Web framework used for routing, middleware, and request handling.</span>}
                              />,
                              <SubjectPoint
                                subject={{ label: <span className="code">cors</span> }}
                                separator={"-"}
                                hasSpace
                                point={<span>Enables cross-origin requests so the frontend can call the API.</span>}
                              />,
                              <SubjectPoint
                                subject={{ label: <span className="code">mysql2</span> }}
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
                        head={<p className="body-mid bold">How to import</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Use CommonJS <span className="code">require</span> to import packages when <span className="code">type</span> is <span className="code">"commonjs"</span>.</p>,
                              <p className="bullet">For promise-based MySQL usage import <span className="code">mysql2/promise</span>.</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Best practices</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Keep secrets out of source code; use environment variables for DB credentials.</p>,
                              <p className="bullet">Use parameterized queries to prevent SQL injection.</p>,
                              <p className="bullet">Centralize DB access (a small data access layer) to avoid repeating SQL across handlers.</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <CodeDisplay
                label="JavaScript JSX"
                Code={
                  <>
                    <span className="comment">// Importing dependencies (CommonJS)<br /></span>
                    <span><span className="midblue">const</span> <span className="lightyellow">express</span> = <span className="lightyellow">require</span><span className="yellow">(</span><span className="orange">"express"</span><span className="yellow">)</span>;<br /></span>
                    <span><span className="midblue">const</span> <span className="lightyellow">cors</span> = <span className="lightyellow">require</span><span className="yellow">(</span><span className="orange">"cors"</span><span className="yellow">)</span>;<br /></span>
                    <span><span className="midblue">const</span> <span className="blue">mysql</span> = <span className="lightyellow">require</span><span className="yellow">(</span><span className="orange">"mysql2/promise"</span><span className="yellow">)</span>;<br /></span>
                  </>
                }
                icon={<CurlyBraces />}
                hasMarginBottom={true}
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  );
}
