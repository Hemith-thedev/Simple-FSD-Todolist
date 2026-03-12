import UL from "../components/UL";
import WelcomePopup from "../components/WelcomePopup";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Table from "../components/Table";
import SubjectPoint from "../components/SubjectPoint";
import CodeDisplay from "../components/CodeDisplay";
import { FileText, Terminal, TerminalSquare, TextSelect } from "lucide-react";

export default function UnderstandingFiles() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Understanding Files</p>
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Common files</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">package.json</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Holds meta data of the project like <span className="code">name, version, author, description & license</span></p>,
                      <p className="bullet">Lists the <span className="code">dependencies</span> to run & <span className="code">devDependencies</span> to build the project</p>,
                      <p className="bullet">Scripts like <span className="code">start</span>, <span className="code">test</span> or <span className="code">build</span> to run using <span className="code">npm run</span></p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">package-lock.json</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Full dependency tree including sub-packages</p>,
                      <p className="bullet">Records exactly where each package was downloaded from</p>,
                      <p className="bullet">Lists the precise version actually installed for each <span className="code">dependency</span></p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
            ]}
          />
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Server side files</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">Server.js</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Creating server</p>,
                      <p className="bullet">Assign PORT number</p>,
                      <p className="bullet">Create routes</p>,
                      <p className="bullet">Recieve requests</p>,
                      <p className="bullet">Send response</p>,
                      <p className="bullet">Listeneing on PORT</p>,
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
            ]}
          />
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Client side files</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">index.js</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Links to <span className="code">&lt;div id="root"&gt;&lt;/div&gt;</span> in index.html</p>,
                      <p className="bullet">Display <span className="code">&lt;App /&gt;</span> Component in browser</p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">App.js</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet"><span className="code">&lt;App /&gt;</span> component is created</p>,
                      <p className="bullet">App modification done here</p>,
                      <p className="bullet">Assignments of routes</p>,
                      <p className="bullet">App layout</p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">index.css</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Main styling</p>,
                      <p className="bullet">Variable creation in <span className="code">:root {"{"}{"}"}</span></p>,
                      <p className="bullet">Component styling</p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">App.css</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Pages styling</p>,
                      <p className="bullet">Stying for specific element</p>,
                      <p className="bullet">Mainly used for <span className="code">&lt;App /&gt;</span></p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}