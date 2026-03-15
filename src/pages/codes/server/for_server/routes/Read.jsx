import UL from "../../../../../components/UL";
import Wrapper from "../../../../../components/Wrapper";
import SubjectPoint from "../../../../../components/SubjectPoint";
import CodeDisplay from "../../../../../components/CodeDisplay";
import { CurlyBraces } from "lucide-react";

export default function ServerCodeRead() {
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
                R – Read (Fetch Todos)
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
                                Use a <span className="code">GET</span> route to fetch todos from the database.
                              </p>,
                              <p className="bullet">
                                Endpoint: <span className="code">"/api/read/todos"</span>.
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
                                Query the database with <span className="code">SELECT * FROM todos</span>.
                              </p>,
                              <p className="bullet">
                                Store the result in a variable (e.g., <span className="code">todos</span>).
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
                                If todos exist → return status <span className="code">200</span> with the list of todos.
                              </p>,
                              <p className="bullet">
                                If no todos → return status <span className="code">200</span> with a message like <span className="code">"No todos found! 😂"</span>.
                              </p>,
                              <p className="bullet">
                                On error → log the issue and return status <span className="code">500</span> with <span className="code">"Server error 💀"</span>.
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
                              <p className="bullet">Allows client to fetch all todo items from the backend.</p>,
                              <p className="bullet">Ensures data retrieval is efficient and reliable.</p>,
                              <p className="bullet">Provides clear feedback whether todos exist or not.</p>,
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
                    <span className="comment">// Get todos (R - Read)<br /></span>
                    <span><span className="blue">server</span>.<span className="lightyellow">get</span><span className="yellow">(</span><span className="orange">"/api/read/todos"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                    <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">todos</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>      <span className="orange">"SELECT * FROM todos"</span><br /></span>
                    <span>    <span className="yellow">)</span>;<br /></span>
                    <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">todos</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="blue">todos</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"No todos found! 😂"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span><br /></span>
                    <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to read todos:\n"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>  <span className="blue">{"}"}</span><br /></span>
                    <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
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
  )
}
