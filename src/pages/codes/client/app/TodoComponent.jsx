import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import Table from "../../../../components/Table";
import { CurlyBraces } from "lucide-react";

export default function AppTodoComponent() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">App.js</p>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <p className="heading-high bold gradient-bg bg-p-l-r clip-text">Todo Component</p>
          <UL
            head={<p className="heading-mid bold dark">Funtions</p>}
            contents={[
              <p className="bullet">Show the todo.</p>,
              <p className="bullet">Edit the todo.</p>,
              <p className="bullet">Delete the todo.</p>,
              <p className="bullet">Check / uncheck.</p>,
              <CodeDisplay
                label="JavaScript"
                Code={
                  <>
                    <span><span className="midblue">const</span> <span className="lightblue">Todo</span> = <span className="yellow">(<span className="purple">{"{"}</span> <span className="lightblue">todo</span> <span className="purple">{"}"}</span>)</span> <span className="blue">=&gt;</span> <span className="yellow">{"{"}</span><br /></span>
                    <span>  <span className="pink">return</span> <span className="purple">{"("}</span><br /></span>
                    <span>    <br /></span>
                    <span>  <span className="purple">{")"}</span><br /></span>
                    <span><span className="yellow">)</span><br /></span>
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