import UL from "../components/UL";
import Wrapper from "../components/Wrapper";
import SubjectPoint from "../components/SubjectPoint";
import { NavLink } from "react-router-dom";

export default function ToolsRequiredNodeJS() {
  const NODEJS_INFO = {
    about: [
      "Node.js is a free, open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to execute JavaScript code outside of a web browser, making it possible to build scalable network applications, server-side tools, and command-line scripts. By using an event-driven, non-blocking I/O model, Node.js is highly efficient and well-suited for data-intensive real-time applications.",
      "A standout feature of Node.js is its vast ecosystem of libraries available through npm (Node Package Manager), which is the world's largest software registry. This allows developers to easily integrate pre-built modules for tasks ranging from handling file systems and networking to managing complex databases and authentication. Its ability to use a single programming language across both the frontend and backend of an application simplifies development and improves team collaboration."
    ],
  }
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Tools Required</p>
        </Wrapper>
      </section>
      <section className="definition-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Node.JS</p>
            }
            contents={[
              <UL
                contents={[
                  NODEJS_INFO.about.map((info, i) => (
                    <p key={i}>{info}</p>
                  )),
                  <UL
                    head={
                      <p className="heading-low highlight bold">Step-1: Download via website</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "1. Visit the website",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Go to the official <NavLink target="_blank" to={"https://nodejs.org/en/download"}>Node.js download page</NavLink>.</span>
                            }
                          />,
                          <UL
                            head={
                              <p className="bold">2. Choose a version:</p>
                            }
                            contents={[
                              <UL
                                contents={[
                                  <SubjectPoint
                                    subject={{
                                      label: "LTS (Long Term Support)",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Recommended for most users as it is stable & reliable.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "Current",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>.</span>
                                    }
                                  />,
                                ]}
                                hasStep
                              />
                            ]}
                          />,
                          <UL
                            head={
                              <p className="bold">3. Select your installer:</p>
                            }
                            contents={[
                              <UL
                                contents={[
                                  <SubjectPoint
                                    subject={{
                                      label: "Windows",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span> Click on the <span className="bold">Windows Installer (.msi)</span> to download the 64-bit or 32-bit version.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "MacOS",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Click on the <span className="bold">macOS Installer (.pkg)</span>.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "Linux",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Download the <span className="bold">Linux Binaries</span> or use a package manager.</span>
                                    }
                                  />,
                                ]}
                                hasStep
                              />
                            ]}
                          />,
                        ]}
                        hasStep
                      />
                    ]}
                  />,
                  <UL
                    head={
                      <p className="heading-low highlight bold">Step-2: Installation</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <UL
                            head={
                              <p className="bold">On Windows</p>
                            }
                            contents={[
                              <UL
                                contents={[
                                  <SubjectPoint
                                    subject={{
                                      label: "1. Run the installer",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Double-click the downloaded <span className="code">.msi</span> file to launch the <span className="bold">Node.js Setup Wizard</span>.</span>
                                    }
                                  />,
                                  <UL
                                    head={
                                      <p className="bold">2. Follow the prompts:</p>
                                    }
                                    contents={[
                                      <UL
                                        contents={[
                                          <p>Click <span className="bold">Next</span> and accept the <span className="bold">License Agreement</span>.</p>,
                                          <p>Choose the <span className="bold">Destination Folder</span> (the default path is recommended).</p>,
                                          <p>In the <span className="bold">Custom Setup</span> screen, ensure "Add to PATH" is selected.</p>,
                                        ]}
                                        hasStep
                                      />,
                                      <SubjectPoint
                                        subject={{
                                          label: "3. Native Tools (Optional)",
                                          isBold: true,
                                        }}
                                        separator={":"}
                                        point={
                                          <span>You may be prompted to install tools for native modules (like Python and Visual Studio Build Tools). Check the box if you plan to use complex packages, then click <span className="bold">Install</span>.</span>
                                        }
                                      />,
                                      <SubjectPoint
                                        subject={{
                                          label: "4. Finish",
                                          isBold: true,
                                        }}
                                        separator={":"}
                                        point={
                                          <span>Click <span className="bold">Finish</span> once the process completes.</span>
                                        }
                                      />,
                                    ]}
                                  />
                                ]}
                                hasStep
                              />
                            ]}
                          />,
                          <UL
                            head={
                              <p className="bold">On MacOS</p>
                            }
                            contents={[
                              <UL
                                contents={[
                                  <SubjectPoint
                                    subject={{
                                      label: "1. Open the package",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Double click the <span className="code">.pkg</span> file.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "2. Guided Setup",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Follow the on-screen instructions: <span className="bold">Continue</span> &gt; <span className="bold">Agree</span> (to license) &gt; <span className="bold">Install</span>.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "3. Authenticate",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Enter your system password if prompted to allow the installation.</span>
                                    }
                                  />,
                                  <SubjectPoint
                                    subject={{
                                      label: "4. Close",
                                      isBold: true,
                                    }}
                                    separator={":"}
                                    point={
                                      <span>Click <span className="bold">Close</span> after the successfull installation.</span>
                                    }
                                  />,
                                ]}
                                hasStep
                              />
                            ]}
                          />,
                        ]}
                        hasStep
                      />,
                    ]}
                  />,
                  <UL
                    head={
                      <p className="heading-low highlight bold">Step-3: Verify installation</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <p>Open your terminal (Command Prompt/PowerShell on Windows, or Terminal on macOS) and run:</p>,
                          <UL
                            contents={[
                              <SubjectPoint
                                subject={{
                                  label: <span className="code">node -v</span>,
                                }}
                                separator={"-"}
                                point={
                                  <span>Displays installed Node.js version.</span>
                                }
                                hasSpace
                              />,
                              <SubjectPoint
                                subject={{
                                  label: <span className="code">npm -v</span>,
                                }}
                                separator={"-"}
                                point={
                                  <span>Displays installed npm version.</span>
                                }
                                hasSpace
                              />,
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
    </>
  )
}