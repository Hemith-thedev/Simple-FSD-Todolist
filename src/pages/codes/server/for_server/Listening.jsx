import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";
import { p } from "framer-motion/client";

export default function ServerListening() {
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
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Listening on the Port</p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">We'll use <span className="code">listen()</span> function make server listen for 'requests from client' on the <span className="code">PORT</span>.</p>,
                      <p className="bullet">As default our sever will listen on <span className="code">PORT: 5000</span>.</p>,
                      <p className="bullet">If any error occurs while listening on <span className="code">PORT</span>, prints (logs) the error message in the console.</p>,
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><br /></span>
                  <span><span className="comment">// Listening on PORT 5500</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">listen</span><span className="yellow">(</span><span className="lightgreen">5500</span>, <span className="purple">(</span><span className="lightblue">error</span><span className="purple">) <span className="midblue">=&gt;</span></span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="pink">if</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="pink">throw</span> <span className="lightblue">error</span>;<br /></span>
                  <span>  <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="blue">(</span><span className="orange">"✅ Server started on PORT: 5500"</span><span className="blue">)</span>;<br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                </>
              }
                icon={<CurlyBraces />}
                hasMarginBottom={true}
                startAt={93}
                endAt={99}
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}