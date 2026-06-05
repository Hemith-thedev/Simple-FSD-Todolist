import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import Table from "../../../../components/Table";
import { CurlyBraces } from "lucide-react";

export default function AppImport() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">App.js</p>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Imports</p>
          <UL
            head={<p className="heading-mid bold dark">Dependencies</p>}
            contents={[
              <SubjectPoint
                subject={{
                  label: "axios",
                  class: "bold"
                }}
                separator={"-"}
                hasSpace
                point={<span>To send requires to backend by calling APIs and getting response.</span>}
              />,
              <SubjectPoint
                subject={{
                  label: "lucide-react",
                  class: "bold"
                }}
                separator={"-"}
                hasSpace
                point={<span>To send requires to backend by calling APIs .</span>}
              />,
              <Table
                heads={["Dependency", "Name", "Usage"]}
                rows={[
                  ["Axios", "axios", "To send requires to backend by calling APIs and getting response."],
                  ["Lucide React", "lucide-react", "To use icons in our app."],
                ]}
                hasMarginBottom
              />,
              <CodeDisplay
                label="JavaScript"
                Code={
                  <>
                    <span><span className="pink">import</span> <span className="lightblue">axios</span> <span className="pink">from</span> <span className="orange">"axios"</span>;<br /></span>
                    <span><span className="pink">import</span> <span className="yellow">{"{"}</span> <span className="lightblue">useState</span> <span className="yellow">{"}"}</span> <span className="pink">from</span> <span className="orange">"react"</span>;<br /></span>
                  </>
                }
                icon={<CurlyBraces />}
              />
            ]}
            hasStep
          />
        </Wrapper>
      </section>
    </>
  )
}
