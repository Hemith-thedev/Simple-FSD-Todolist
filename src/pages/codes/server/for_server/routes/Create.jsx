import UL from "../../../../../components/UL";
import Wrapper from "../../../../../components/Wrapper";
import SubjectPoint from "../../../../../components/SubjectPoint";
import CodeDisplay from "../../../../../components/CodeDisplay";
import { CurlyBraces } from "lucide-react";

export default function ServerCreate() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">server.js</p>
        </Wrapper>
      </section>

      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">
                C – Create (Add Todo)
              </p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <UL
                        head={<p className="body-mid bold">Route setup:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                Use a <span className="code">POST</span> route to handle
                                client requests.
                              </p>,
                              <p className="bullet">
                                Endpoint: <span className="code">"/api/create/todo"</span>.
                              </p>,
                            ]}
                            hasStep
                          />,
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Request handling:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                Extract <span className="code">todo</span> and{" "}
                                <span className="code">completed</span> from{" "}
                                <span className="code">req.body</span>.
                              </p>,
                              <p className="bullet">
                                Insert into database using SQL query:
                                <span className="code">
                                  {" "}INSERT INTO todos (label, completed) VALUES (?, ?)
                                </span>.
                              </p>,
                            ]}
                            hasStep
                          />,
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Response handling:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                On success → return status{" "}
                                <span className="code">200</span> with success message like <span className="code">"Todo added successfully! 🥳"</span>.
                              </p>,
                              <p className="bullet">
                                On failure → log error and return status{" "}
                                <span className="code">500</span> with error message like <span className="code">"Server error 💀"</span>.
                              </p>,
                            ]}
                            hasStep
                          />,
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Purpose:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                Allows client to send new todo items to backend.
                              </p>,
                              <p className="bullet">
                                Ensures data is stored persistently in the database.
                              </p>,
                              <p className="bullet">
                                Provides clear feedback about success or failure.
                              </p>,
                            ]}
                            hasStep
                          />,
                        ]}
                      />,
                    ]}
                    hasStep
                    hasMarginBottom
                  />,
                ]}
                hasStep
              />,
              <CodeDisplay
                label="JavaScript JSX"
                Code={
                  <>
                    <span><br /></span>
                    <span className="comment">// Add todo (C - Create)<br /></span>
                    <span><span className="blue">server</span>.<span className="lightyellow">post</span><span className="yellow">(</span><span className="orange">"/api/create/todo"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                    <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="midblue">const</span> <span className="yellow">{"{"}</span> <span className="blue">todo</span> <span className="yellow">{"}"}</span> = <span className="lightblue">req</span>.<span className="lightblue">body</span>;<br /></span>
                    <span>    <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>      <span className="orange">"INSERT INTO todos (label, completed) VALUES (?, ?)"</span>,<br /></span>
                    <span>      <span className="purple">[</span><span className="blue">todo</span>, <span className="midblue">false</span><span className="purple">]</span><br /></span>
                    <span>    <span className="yellow">)</span>;<br /></span>
                    <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo added successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to add todo:<span className="lightyellow">\n</span>"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>  <span className="blue">{"}"}</span><br /></span>
                    <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  </>
                }
                icon={<CurlyBraces />}
                hasMarginBottom={true}
                startAt={18}
                endAt={33}
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}
