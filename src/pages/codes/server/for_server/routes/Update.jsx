import UL from "../../../../../components/UL";
import Wrapper from "../../../../../components/Wrapper";
import SubjectPoint from "../../../../../components/SubjectPoint";
import CodeDisplay from "../../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";

export default function ServerUpdate() {
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
                U - Update (Editing Todo)
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
                                Use a <span className="code">PUT</span> route to update an existing todo.
                              </p>,
                              <p className="bullet">
                                Endpoint: <span className="code">"/api/update/todo/:id"</span>.
                              </p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Request handling:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                Extract <span className="code">edited_label</span> and <span className="code">completed</span> from <span className="code">req.body</span>.
                              </p>,
                              <p className="bullet">
                                Check if the todo exists in the database using its <span className="code">id</span>.
                              </p>,
                              <p className="bullet">
                                If found, update the record with new values using:
                                <span className="code"> UPDATE todos SET label = ?, completed = ? WHERE id = ?</span>.
                              </p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Response handling:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">
                                On success → return status <span className="code">200</span> with a success message.
                              </p>,
                              <p className="bullet">
                                If todo not found → return status <span className="code">200</span> with a message like <span className="code">"This todo is not found! 😕"</span>.
                              </p>,
                              <p className="bullet">
                                On error → log the issue and return status <span className="code">500</span> with <span className="code">"Server error 💀"</span>.
                              </p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Purpose:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Allows client to edit existing todo items.</p>,
                              <p className="bullet">Ensures data consistency by checking if the todo exists before updating.</p>,
                              <p className="bullet">Provides clear feedback about success, failure, or missing records.</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />
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
                    <span className="comment">// Edit todo (U - Update)<br /></span>
                    <span><span className="blue">server</span>.<span className="lightyellow">put</span><span className="yellow">(</span><span className="orange">"/api/update/todo/:id"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                    <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="midblue">const</span> <span className="yellow">{"{"}</span> <span className="blue">edited_label</span>, <span className="blue">completed</span> <span className="yellow">{"}"}</span> = <span className="lightblue">req</span>.<span className="lightblue">body</span>;<br /></span>
                    <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">isTodoExists</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>      <span className="orange">"SELECT * FROM todos WHERE id = ?"</span>,<br /></span>
                    <span>      <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                    <span>    <span className="yellow">)</span>;<br /></span>
                    <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">isTodoExists</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>        <span className="orange">"UPDATE todos SET label = ?, completed = ? WHERE id = ?"</span>,<br /></span>
                    <span>        <span className="purple">[</span><span className="blue">edited_label</span>, <span className="blue">completed</span>, <span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                    <span>      <span className="yellow">)</span>;<br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo updated successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"This todo is not found! 😕"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span><br /></span>
                    <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to update todo:\n"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>  <span className="blue">{"}"}</span><br /></span>
                    <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  </>
                }
                icon={<CurlyBraces />}
                hasMarginBottom={true}
              />
            ]}
          />
        </Wrapper>
      </section>
    </>
  );
}
