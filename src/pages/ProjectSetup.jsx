import UL from "../components/UL";
import WelcomePopup from "../components/WelcomePopup";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Table from "../components/Table";
import SubjectPoint from "../components/SubjectPoint";
import CodeDisplay from "../components/CodeDisplay";
import { FileText, Terminal, TerminalSquare, TextSelect } from "lucide-react";

export default function ProjectSetup() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Project Setup</p>
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Structure of our Todolist App</p>
            }
            contents={[
              <CodeDisplay label="Text" Code={
                <>
                  <span>my-todolist-app</span><br />
                  <span>├─ client/</span><br />
                  <span>|&nbsp;&nbsp;├─ node_modules/</span><br />
                  <span>|&nbsp;&nbsp;├─ public/</span><br />
                  <span>|&nbsp;&nbsp;├─ src/</span><br />
                  <span>|&nbsp;&nbsp;|&nbsp;&nbsp;├─ components/</span><br />
                  <span>|&nbsp;&nbsp;|&nbsp;&nbsp;└─ App.js</span><br />
                  <span>|&nbsp;&nbsp;├─ package.json</span><br />
                  <span>|&nbsp;&nbsp;└─ package-lock.json</span><br />
                  <span>└─ server/</span><br />
                  <span>&nbsp;&nbsp;&nbsp;├─ node_modules/</span><br />
                  <span>&nbsp;&nbsp;&nbsp;├─ package.json</span><br />
                  <span>&nbsp;&nbsp;&nbsp;├─ package-lock.json</span><br />
                  <span>&nbsp;&nbsp;&nbsp;└─ server.js</span><br />
                </>
              } icon={<FileText />} />
            ]}
          />
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Creating folders</p>
            }
            contents={[
              <CodeDisplay label="Terminal" Code={
                <>
                  <span><span className="green"># Creating a root folder in projects folder</span><br /></span>
                  <span><span className="yellow">mkdir</span> my-todolist-app<br /></span>
                  <br />
                  <span><span className="green"># Moving the terminal into project root folder</span><br /></span>
                  <span><span className="yellow">cd</span> my-todolist-app<br /></span>
                  <br />
                  <span><span className="green"># Creating folder for server side programming</span><br /></span>
                  <span><span className="yellow">mkdir</span> server<br /></span>
                  <br />
                  <span><span className="green"># Creating folder for client side programming</span><br /></span>
                  <span><span className="yellow">mkdir</span> client</span>
                </>
              } icon={<TerminalSquare />} />,
            ]}
          />
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Installing dependencies</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">Client</p>
                }
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "Axios (axios)",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>To send request and recieve response from the server.</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Lucide React (lucide-react)",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>To use icons in the app.</span>}
                      />
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">Server</p>
                }
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "Cors (cors)",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Middleware for server-side programming.</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Express (express)",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>To create server with sepecific routes to communicate with client.</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "MySQL2 (mysql2)",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>To create a pool and run SQL commands conditionally.</span>}
                      />,
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <CodeDisplay label="Terminal" Code={
                <>
                  <span><span className="green"># Installing dependencies in 'server' folder</span><br /></span>
                  <span><span className="yellow">cd</span> server<br /></span>
                  <span><span className="yellow">npm</span> install express mysql2 cors<br /></span>
                  <br />
                  <span><span className="green"># Moving the terminal into project root folder</span><br /></span>
                  <span><span className="yellow">cd..</span><br /></span>
                  <br />
                  <span><span className="green"># Installing dependencies in 'client' folder</span><br /></span>
                  <span><span className="yellow">cd</span> client<br /></span>
                  <span><span className="yellow">npm</span> install axios lucide-react<br /></span>
                </>
              } icon={<TerminalSquare />} />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}