import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";

export default function ServerMiddleware() {
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
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Middleware</p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: <span className="code">cors()</span>
                        }}
                        separator={"-"}
                        hasSpace
                        point={<span>enables communication between frontend and backend hosted on different origins.</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: <span className="code">express.json()</span>
                        }}
                        separator={"-"}
                        hasSpace
                        point={<span>parses incoming request bodies in JSON format, to handle the client data easier.</span>}
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
                  <span><br /></span>
                  <span className="comment">// Middleware and using JSON<br /></span>
                  <span><span className="midblue">const</span> <span className="blue">server</span> = <span className="lightyellow">express</span><span className="yellow">()</span>;<br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">use</span><span className="yellow">(</span><span className="lightyellow">cors</span><span className="purple">()</span><span className="yellow">)</span>;<br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">use</span><span className="yellow">(</span><span className="lightyellow">express</span>.<span className="lightyellow">json</span><span className="purple">()</span><span className="yellow">)</span>;<br /></span>
                </>
              }
              icon={<CurlyBraces />}
              hasMarginBottom={true}
              startAt={5}
              endAt={10}
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}