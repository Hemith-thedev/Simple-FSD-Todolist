import UL from "../components/UL";
import Wrapper from "../components/Wrapper";
import SubjectPoint from "../components/SubjectPoint";

export default function UnderstandingFolders() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Understanding Folders</p>
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Common folders</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">node_modules</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">Stores all the dependencies</p>,
                      <p className="bullet">Contains min 200 MB storage</p>,
                      <p className="bullet">Installed dependencies also stored here</p>,
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
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Client side folders</p>
            }
            contents={[
              <UL
                head={
                  <p className="heading-low bold dark">public</p>
                }
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">All media like images, videos audios etc... as assets are stored here</p>,
                      <p className="bullet">Mainly used to store logos and favicons</p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <UL
                head={
                  <p className="heading-low bold dark">src</p>
                }
                contents={[
                  <UL
                    contents={[
                      <SubjectPoint
                        subject={{
                          label: "App component",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>stored in <span className="code">App.js</span></span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Pages",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>stored in <span className="code">pages</span> folder</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Components",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>stored in <span className="code">components</span> folder</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Data",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>Arrays and objects are stored in <span className="code">data</span> folder</span>}
                      />,
                      <SubjectPoint
                        subject={{
                          label: "Types",
                          isBold: true
                        }}
                        separator={":"}
                        point={<span>State and props of components are stored in <span className="code">types</span> folder</span>}
                      />,
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