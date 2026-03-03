import UL from "../components/UL";
import WelcomePopup from "../components/WelcomePopup";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Table from "../components/Table";
import SubjectPoint from "../components/SubjectPoint";

export default function FSDIntro() {

  const [showWelcomePopup, setShowWelcomePopup] = useState(() => !localStorage.getItem("s-fsd-t-user-name"));
  const [userName, setUserName] = useState(() => {
    const storedName = localStorage.getItem("s-fsd-t-user-name");
    if (storedName) return storedName.split(" ")[0];
  });

  setInterval(() => {
    const storedName = localStorage.getItem("s-fsd-t-user-name");
    if (storedName) {
      setUserName(storedName.split(" ")[0]);
      setShowWelcomePopup(false);
      document.body.style.overflow = "auto"
    } else {
      setUserName("");
      setShowWelcomePopup(true);
      document.body.style.overflow = "hidden"
    }
  }, 10);

  const GenerateGreetings = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Morning";
    } else if (currentHour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <div>
            <p className="heading-high light">Good <GenerateGreetings />, <span className="gradient-bg bg-s-r-l clip-text" title="Double click to edit" onDoubleClick={() => {
              localStorage.removeItem("s-fsd-t-user-name");
              setShowWelcomePopup(true);
              document.body.style.overflow = "hidden"
            }}>{userName ? userName : "Guest"}</span>!</p>
          </div>
        </Wrapper>
      </section>
      <section className="section definition-section screen">
        <Wrapper>
          <UL
            head={
              <p><span className="heading-high gradient-bg bg-p-l-r clip-text">Full Stack Development</span></p>
            }
            contents={[
              <p className="body-mid">An art of building complete web applications from the <span className="highlight uppercase">user interface</span> to the <span className="highlight uppercase">server-side logic</span> and <span className="highlight uppercase">database management</span>.</p>
            ]}
          />
        </Wrapper>
      </section>
      <section className="section definition-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Who is a Full Stack Developer?</span></p>
            }
            contents={[
              <UL
                head={
                  <p>A Full Stack Developer is a software developer who is proficient in both the <span className="highlight">front-end</span>  & <span className="highlight">back-end</span>  of a web application.</p>
                }
                contents={[
                  <UL
                    head={
                      <p className="body-mid bold dark">Some examples of Full Stack Developers include:</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <p className="bullet">Web Developers</p>,
                          <p className="bullet">Mobile App Developers</p>,
                          <p className="bullet">Game Developers</p>,
                          <p className="bullet">Software Engineers</p>
                        ]}
                        hasStep
                      />
                    ]}
                  />
                ]}
                hasStep
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Fundamentals of Full Stack Development</span></p>}
            contents={[
              <UL
                head={
                  <p className="body-mid bold highlight">Frontend - client side</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p>Front-end is the <span className="">user interface</span> of a web application, i.e. the part / interface that users see and interact with.</p>,
                      <Table
                        heads={[
                          "Language",
                          "Abreviation",
                          "Use"
                        ]}
                        rows={[
                          ["HTML", "HyperText Markup Language", "Defines the structure of web pages"],
                          ["CSS", "Cascading Style Sheets", "Defines the style of web pages"],
                          ["JS", "JavaScript", "Defines the behavior of web pages"],
                          ["TS", "TypeScript", "Used to add type checking to JavaScript"],
                          ["JSX", "JavaScript XML", "Used to build dynamic user interfaces for web applications"],
                        ]}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
                hasMarginBottom
              />,
              <UL
                head={
                  <p className="body-mid bold highlight">Backend - server side</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p>Back-end is the <span className="highlight">server-side logic</span> of a web application, i.e. the part / interface that handles the data and business logic.</p>,
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "Languages",
                              class: "dark bold"
                            }}
                            separator=":"
                            point={
                              <>Node JS, Python, Java, PHP</>
                            }
                          />,
                          <UL
                            head={<p className="bold dark">Responsibilities</p>}
                            contents={[
                              <UL
                                contents={[
                                  <p className="bullet">Handling requests & responses</p>,
                                  <p className="bullet">Security</p>,
                                  <p className="bullet">API integration</p>
                                ]}
                                hasStep
                              />
                            ]}
                          />
                        ]}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
                hasMarginBottom
              />,
              <UL
                head={
                  <p className="body-mid bold highlight">Databases</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p>Databases are used to <span className="highlight">store</span>, <span className="highlight">manage</span> and <span className="highlight">retrieve</span> data for a web application.</p>,
                      <UL
                        head={<p className="bold dark">Relational Databases</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Data is stored in rows and columns called <span className="highlight">tables</span>.</p>,
                              <p className="bullet">MySQL, PostgreSQL</p>
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={<p className="bold dark">NoSQL Databases</p>}
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Data is stored in <span className="highlight">documents</span>, <span className="highlight">keys</span> and <span className="highlight">values</span>.</p>,
                              <p className="bullet">MongoDB, Firebase</p>,
                            ]}
                            hasStep
                          />
                        ]}
                      />,
                      <UL
                        head={
                          <p className="bold dark">Key concepts</p>
                        }
                        contents={[
                          <UL
                            contents={[
                              <p className="bullet">Tables VS Collections</p>,
                              <p className="bullet">Queries VS Documents</p>,
                              <p className="bullet">Relationships VS Flexibility</p>
                            ]}
                            hasStep
                          />
                        ]}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
                hasMarginBottom
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Front-End Technologies</span></p>}
            contents={[
              <UL
                contents={[
                  <UL
                    head={<p className="body-mid bold highlight">React.JS</p>}
                    contents={[
                      <UL
                        contents={[
                          <p>A popular JavaScript library for building user interfaces.</p>,
                          <p>Maintained by Meta (formerly Facebook) and a large community of developers.</p>,
                          <p>Widely used for developing single-page applications and mobile apps.</p>,
                          <UL
                            head={<p className="body-mid bold dark">Key Features:</p>}
                            contents={[
                              <UL
                                contents={[
                                  <p className="bullet">Component-based architecture.</p>,
                                  <p className="bullet">Virtual DOM for efficient rendering.</p>,
                                  <p className="bullet">Rich ecosystem with hooks and state management.</p>
                                ]}
                                hasStep
                              />
                            ]}
                          />
                        ]}
                        hasStep
                      />,
                    ]}
                  />,
                  <UL
                    head={<p className="body-mid bold highlight">Angular.JS</p>}
                    contents={[
                      <UL
                        contents={[
                          <p>A powerful front-end framework for building dynamic web applications.</p>,
                          <p>Developed and maintained by Google and its community.</p>,
                          <p>Best suited for large-scale, enterprise-level applications.</p>,
                          <UL
                            head={<p className="body-mid bold dark">Key Features:</p>}
                            contents={[
                              <UL
                                contents={[
                                  <p className="bullet">Robust templating system.</p>,
                                  <p className="bullet">Two-way data binding.</p>,
                                  <p className="bullet">Built-in dependency injection.</p>
                                ]}
                                hasStep
                              />
                            ]}
                          />
                        ]}
                        hasStep
                      />
                    ]}
                  />,
                  <UL
                    head={<p className="body-mid bold highlight">Vue.JS</p>}
                    contents={[
                      <UL
                        contents={[
                          <p>A progressive JavaScript framework for building user interfaces.</p>,
                          <p>Created and maintained by Evan You and the open-source community.</p>,
                          <p>Designed to be incrementally adoptable and easy to integrate.</p>,
                          <UL
                            head={<p className="body-mid bold dark">Key Features:</p>}
                            contents={[
                              <UL
                                contents={[
                                  <p className="bullet">Simple and flexible templating system.</p>,
                                  <p className="bullet">Reactive two-way data binding.</p>,
                                  <p className="bullet">Lightweight with built-in state management options.</p>
                                ]}
                                hasStep
                              />
                            ]}
                          />
                        ]}
                        hasStep
                      />
                    ]}
                  />
                ]}
                hasStep
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Back-End Technologies</span></p>}
            contents={[
              <UL
                contents={[
                  <UL
                    head={<p className="body-mid bold highlight">Node.js</p>}
                    contents={[
                      <UL
                        contents={[
                          <p className="bullet">A JavaScript runtime built on Chrome’s V8 engine.</p>,
                          <p className="bullet">Uses a non-blocking, event-driven architecture for scalability.</p>,
                          <p className="bullet">Popular frameworks include Express.js and NestJS.</p>,
                        ]}
                        hasStep
                      />
                    ]}
                  />,
                  <UL
                    head={<p className="body-mid bold highlight">Python Frameworks</p>}
                    contents={[
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "Django",
                              class: "dark",
                              isBold: true
                            }}
                            separator={":"}
                            point={<span>A batteries-included framework designed for rapid development and clean design.</span>}
                          />,
                          <SubjectPoint
                            subject={{
                              label: "Flask",
                              class: "dark",
                              isBold: true
                            }}
                            separator={":"}
                            point={<span>A lightweight, flexible micro-framework ideal for smaller applications and APIs.</span>}
                          />
                        ]}
                        hasStep
                      />
                    ]}
                  />,
                  <UL
                    head={<p className="body-mid bold highlight">Java Frameworks</p>}
                    contents={[
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "Spring Boot",
                              class: "dark",
                              isBold: true
                            }}
                            separator={":"}
                            point={<span>Simplifies the development of enterprise-level applications.</span>}
                          />,
                          <UL
                            contents={[
                              <p className="bullet">Provides strong support for REST APIs and microservices.</p>
                            ]}
                          />
                        ]}
                        hasStep
                      />
                    ]}
                  />
                ]}
                hasStep
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Supporting Tools</span></p>}
            contents={[
              <UL
                head={<p className="body-mid bold highlight">Version control</p>}
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "Git",
                          class: "dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Track changes in code.</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Github / Gitlab",
                          class: "dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Collaboration platforms.</span>}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
              />,
              <UL
                head={<p className="body-mid bold highlight">Package managers</p>}
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "npm",
                          class: "bold dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Node Package Manager</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "pip",
                          class: "bold dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Python</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Maven / Gradle",
                          class: "bold dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Java</span>}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
              />,
              <UL
                head={<p className="body-mid bold highlight">Testing tools</p>}
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "Unit testing",
                          class: "bold dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Jest, Mocha</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Integration testing",
                          class: "bold dark",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Selenium, Cypress</span>}
                      />
                    ]}
                    hasStep
                  />
                ]}
                hasStep
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Deployment and DevOps</span></p>}
            contents={[
              <UL
                head={<p className="body-mid bold highlight">Cloud Platforms</p>}
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">AWS, Azure, Google Cloud</p>,
                      <p className="bullet">Provide scalability, storage, and serverless computing.</p>
                    ]}
                    hasStep
                  />
                ]}
              />,
              <UL
                head={<p className="body-mid bold highlight">CI/CD Pipelines</p>}
                contents={[
                  <SubjectPoint
                    subject={{ label: "Continuous Integration" }}
                    separator={":"}
                    point={<span>Automated testing to ensure code quality.</span>}
                  />,
                  <SubjectPoint
                    subject={{ label: "Continuous Deployment" }}
                    separator={":"}
                    point={<span>Automated release cycles for faster delivery.</span>}
                  />
                ]}
              />,
              <UL
                head={<p className="body-mid bold highlight">Containerization</p>}
                contents={[
                  <SubjectPoint
                    subject={{ label: "Docker" }}
                    separator={":"}
                    point={<span>Packages applications with dependencies for portability.</span>}
                  />,
                  <SubjectPoint
                    subject={{ label: "Kubernetes" }}
                    separator={":"}
                    point={<span>Orchestrates and manages containers at scale.</span>}
                  />
                ]}
              />
            ]}
          />
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Advanced Concepts</span></p>}
            contents={[
              <UL
                head={<p className="body-mid bold highlight">REST APIs</p>}
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Stateless communication.</p>,
                      <p className="bullet">CRUD operations via HTTP methods.</p>
                    ]}
                    hasStep
                  />
                ]}
              />,
              <UL
                head={<p className="body-mid bold highlight">GraphQL</p>}
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Query language for APIs.</p>,
                      <p className="bullet">Fetch only required data.</p>
                    ]}
                    hasStep
                  />
                ]}
              />,
              <UL
                head={<p className="body-mid bold highlight">Authentication</p>}
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">OAuth, JWT (JSON Web Tokens).</p>,
                      <p className="bullet">Secure user sessions. </p>
                    ]}
                    hasStep
                  />
                ]}
              />,
            ]}
          />
        </Wrapper>
      </section>
      <section className="conclusion-section">
        <Wrapper>
          <UL
            head={<p className="heading-high bold"><span className="gradient-bg bg-p-l-r clip-text">Conclusion</span></p>}
            contents={[
              <UL
                contents={[
                  <p className="body-mid bold dark">Now you're ready to dive into the world of Full-Stack Development!</p>,
                  <p>Full Stack Development is not just about mastering multiple technologies — it's about
                    understanding how they work together to deliver seamless, scalable, and secure
                    applications. By diving deeper into both fundamentals and advanced concepts, developers
                    can build robust solutions that meet modern business needs.</p>
                ]}
              />
            ]}
          />
        </Wrapper>
      </section>
      <WelcomePopup className={showWelcomePopup ? "" : "hidden"} />
    </>
  )
}