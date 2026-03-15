import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";

export default function ServerDatabase() {
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
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Database</p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <p>We'll use <span className="code">createPool()</span> function to establish a connection pool with mysql.</p>,
                      <UL
                        head={<p className="body-mid bold">Provide connection details such as:</p>}
                        contents={[
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{
                                  label: "host",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>Usually <span className="code">"localhost"</span> for local development.</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: "user",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>Defaultly given by mysql, <span className="code">"root"</span>.</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: "password",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>Database password (can be empty for local setups).</span>}
                              />,
                              <SubjectPoint
                                subject={{
                                  label: "database",
                                  class: "code"
                                }}
                                separator={"-"}
                                hasSpace
                                point={<span>Name of the database you use for this application.</span>}
                              />,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Purpose of connection pool:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Manage multiple connection efficiently.</p>,
                              <p className="bullet">Ensures queries can be executed without reconnecting each time.</p>,
                              <p className="bullet">Improves performance and reliability for server‑database communication.</p>
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
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span className="comment">// Database connection<br /></span>
                  <span><span className="midblue">const</span> <span className="blue">database</span> = <span className="blue">mysql</span>.<span className="lightyellow">createPool</span><span className="yellow">(</span><span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="lightblue">host</span>: <span className="orange">"localhost"</span>,<br /></span>
                  <span>  <span className="lightblue">user</span>: <span className="orange">"root"</span>,<br /></span>
                  <span>  <span className="lightblue">password</span>: <span className="orange">""</span>,<br /></span>
                  <span>  <span className="lightblue">database</span>: <span className="orange">"fsd_todolist"</span>,<br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}