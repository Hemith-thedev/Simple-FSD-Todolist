import UL from "../components/UL";
import WelcomePopup from "../components/WelcomePopup";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Table from "../components/Table";
import SubjectPoint from "../components/SubjectPoint";
import { NavLink } from "react-router-dom";

export default function ToolsRequiredXampp() {
  const NODEJS_INFO = {
    about: [
      "The XAMPP Control Panel is an open-source, lightweight management interface designed by Apache Friends to simplify the setup of a local web development environment. The name is an acronym for its core components: X (Cross-platform support for Windows, Linux, and macOS), A (Apache HTTP Server), M (MariaDB/MySQL), P (PHP), and P (Perl). It serves as a centralized hub where developers can start, stop, and configure these essential server-side tools with a single click, eliminating the need to install and manage each component separately.",
      "Beyond its primary function as a local server, the control panel provides advanced utilities like phpMyAdmin for database management, FileZilla for FTP services, and Mercury for mail transport. It is specifically built as a 'sandbox' for developers to test and debug web applications—such as WordPress, Drupal, or custom PHP scripts—offline before deploying them to a live, public server. Because it is designed for ease of use, it intentionally leaves certain security features open by default, making it ideal for rapid development but not recommended for production-ready public hosting."
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
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">XAMPP Control Panel</p>
            }
            contents={[
              <UL
                contents={[
                  NODEJS_INFO.about.map((info, i) => (
                    <p key={i}>{info}</p>
                  )),
                  <UL

                  />,
                  <UL
                    head={
                      <p className="heading-low highlight bold">Step-1: Installation</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "1. Download via website",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Visit the <NavLink to="https://www.apachefriends.org/download.html" target="_blank">Apache Friends Download page</NavLink> and select the installer for your OS.</span>
                            }
                          />,
                          <SubjectPoint
                            subject={{
                              label: "2. Run installer",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Launch the <span className="code">.exe</span> (or <span className="code">.dmg</span>/<span className="code">.run</span>) file. You may see a <span className="bold">User Account Control (UAC)</span> or antivirus warning. Click <span className="bold">OK</span> or temporarily pause your antivirus to proceed.</span>
                            }
                          />,
                          <SubjectPoint
                            subject={{
                              label: "3. Select Components",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>In the setup wizard, keep the default components checked (Apache, MySQL, PHP, phpMyAdmin, etc.) and click <span className="bold">Next</span>.</span>
                            }
                          />,
                          <SubjectPoint
                            subject={{
                              label: "4. Choose Directory",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Select an installation path (default <span className="code">C:\xampp</span> is recommended). Avoid <span className="code">C:\Program</span> Files to prevent permission conflicts with Windows.</span>
                            }
                          />,
                          <SubjectPoint
                            subject={{
                              label: "5. Finish",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Complete the wizard and check the box to launch the <span className="bold">Control Panel</span> immediately.</span>
                            }
                          />,
                        ]}
                        hasStep
                      />
                    ]}
                  />,
                  <UL
                    head={
                      <p className="heading-low highlight bold">Step-2: Testing</p>
                    }
                    contents={[
                      <UL
                        contents={[
                          <SubjectPoint
                            subject={{
                              label: "1. Start Services",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span> Open the XAMPP Control Panel and click the <span className="bold">Start</span> button next to <span className="bold">Apache</span> and <span className="bold">MySQL</span>. The module names should turn green, indicating they are active.</span>
                            }
                          />,
                          <SubjectPoint
                            subject={{
                              label: "2. Verify Dashboard",
                              isBold: true,
                            }}
                            separator={":"}
                            point={
                              <span>Open your web browser and navigate to <span className="code">http://localhost</span>. If you see the XAMPP welcome dashboard, your server is running correctly.</span>
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
          />
        </Wrapper>
      </section>
    </>
  )
}