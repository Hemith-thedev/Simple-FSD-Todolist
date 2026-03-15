import UL from "../components/UL";
import Wrapper from "../components/Wrapper";
import SubjectPoint from "../components/SubjectPoint";
import CodeDisplay from "../components/CodeDisplay";
import { FileText, TerminalSquare} from "lucide-react";

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
                  <span>|  ├─ node_modules/</span><br />
                  <span>|  ├─ public/</span><br />
                  <span>|  ├─ src/</span><br />
                  <span>|  |  └─ App.js</span><br />
                  <span>|  ├─ package-lock.json</span><br />
                  <span>|  └─ package.json</span><br />
                  <span>└─ server/</span><br />
                  <span>   ├─ node_modules/</span><br />
                  <span>   ├─ package-lock.json</span><br />
                  <span>   ├─ package.json</span><br />
                  <span>   └─ server.js</span><br />
                </>
              } icon={<FileText />} hasHead={false} />
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
                  <span><span className="yellow">mkdir</span> client<br /></span>
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
              <CodeDisplay label="Terminal" Code={
                <>
                  <span><span className="green"># Installing dependencies in 'server' folder</span><br /></span>
                  <span><span className="yellow">cd</span> server<br /></span>
                  <span><span className="yellow">npm</span> init <span className="gray">-y</span><br /></span>
                  <span><span className="yellow">npm</span> install express mysql2 cors<br /></span>
                  <br />
                  <span><span className="green"># Moving the terminal into project root folder</span><br /></span>
                  <span><span className="yellow">cd..</span><br /></span>
                  <br />
                  <span><span className="green"># Initializing app and installing dependencies in 'client' folder</span><br /></span>
                  <span><span className="yellow">cd</span> client<br /></span>
                  <span><span className="yellow">npx</span> create-react-app .<br /></span>
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