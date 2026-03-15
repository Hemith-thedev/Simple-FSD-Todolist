import UL from "../../../../../components/UL";
import Wrapper from "../../../../../components/Wrapper";
import SubjectPoint from "../../../../../components/SubjectPoint";
import CodeDisplay from "../../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";

export default function ServerDelete() {
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
                D – Delete (Remove Todo)
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
                                Use a <span className="code">DELETE</span> route to remove a todo.
                              </p>,
                              <p className="bullet">
                                Endpoint: <span className="code">"/api/delete/todo/:id"</span>.
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
                                Read the <span className="code">id</span> from <span className="code">req.params.id</span>.
                              </p>,
                              <p className="bullet">
                                Verify existence with <span className="code">SELECT * FROM todos WHERE id = ?</span>.
                              </p>,
                              <p className="bullet">
                                If found, delete with <span className="code">DELETE FROM todos WHERE id = ?</span>.
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
                                On success → return status <span className="code">200</span> with message <span className="code">"Todo deleted successfully! 🥳"</span>.
                              </p>,
                              <p className="bullet">
                                If not found → return status <span className="code">200</span> with message <span className="code">"This todo is not found! 😕"</span>.
                              </p>,
                              <p className="bullet">
                                On error → log the issue and return status <span className="code">500</span> with message <span className="code">"Server error 💀"</span>.
                              </p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="body-mid bold">Purpose and notes:</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Allows client to remove a todo from persistent storage.</p>,
                              <p className="bullet">Use parameterized queries to prevent SQL injection.</p>,
                              <p className="bullet">Consider soft deletes if you need undo/history support.</p>,
                            ]}
                            hasStep
                          />
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
                    <span className="comment">// Delete todo (D - Delete)<br /></span>
                    <span><span className="blue">server</span>.<span className="lightyellow">delete</span><span className="yellow">(</span><span className="orange">"/api/delete/todo/:id"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                    <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">isTodoExists</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>      <span className="orange">"SELECT * FROM todos WHERE id = ?"</span>,<br /></span>
                    <span>      <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                    <span>    <span className="yellow">)</span>;<br /></span>
                    <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">isTodoExists</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                    <span>        <span className="orange">"DELETE FROM todos WHERE id = ?"</span>,<br /></span>
                    <span>        <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                    <span>      <span className="yellow">)</span>;<br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo deleted successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"This todo is not found! 😕"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                    <span>    <span className="yellow">{"}"}</span><br /></span>
                    <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                    <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to delete todo:\n"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
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
  );
}
