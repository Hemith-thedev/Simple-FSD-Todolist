import UL from "../../../../components/UL";
import Wrapper from "../../../../components/Wrapper";
import SubjectPoint from "../../../../components/SubjectPoint";
import CodeDisplay from "../../../../components/CodeDisplay";
import { FileText, TerminalSquare, CurlyBraces, FileJson } from "lucide-react";

export default function ServerListening() {
  return (
    <>
      <section className="section hero-section">
        <Wrapper>
          <p className="heading-high light">Server Code</p>
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">package.json</p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">We'll modify the <span className="code">"scripts"</span> object by adding:</p>,
                      <p className="step"><span className="code">"start": "node server.js"</span></p>
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <CodeDisplay label="JSON" Code={
                <>
                  <span><span className="yellow">{"{"}</span><br /></span>
                  <span>  <span className="lightblue">"name"</span>: <span className="orange">"server"</span>,<br /></span>
                  <span>  <span className="lightblue">"version"</span>: <span className="orange">"1.0.0"</span>,<br /></span>
                  <span>  ...<br /></span>
                  <span>  <span className="lightblue">"scripts"</span>: <span className="purple">{"{"}</span><br /></span>
                  <span>    <span className="lightblue">"test"</span>: <span className="orange">"echo "Error: no test specified" && exit 1"</span>,<br /></span>
                  <span>    <span className="lightblue">"start"</span>: <span className="orange">"node server.js"</span> <span className="comment">// add this line</span><br /></span>
                  <span>  <span className="purple">{"}"}</span><br /></span>
                  <span>  ...<br /></span>
                  <span><span className="yellow">{"}"}</span><br /></span>
                </>
              } icon={<FileJson />} hasMarginBottom={true} />,
            ]}
          />
        </Wrapper>
      </section>
      <section className="section code-section">
        <Wrapper>
          <UL
            head={
              <p className="heading-high bold gradient-bg bg-p-l-r clip-text">server.js</p>
            }
            contents={[
              <UL
                contents={[
                  <UL
                    contents={[
                      <p className="bullet">We'll require / import <span className="code">express, mysql2 & cors</span>.</p>,
                      <p className="bullet">Next, giving middleware for our server using <span className="code">cors()</span>.</p>,
                      <p className="bullet">Connecting our server to the database.</p>,
                      <p className="bullet">Creating routes to communicate with client.</p>,
                      <p className="bullet">Easy parsing and packing to JSON format, we use <span className="code">express.json()</span>.</p>,
                      <p className="bullet">Listening on available PORT or <span className="code">5000</span> as default</p>,
                    ]}
                    hasStep
                    hasMarginBottom
                  />
                ]}
                hasStep
              />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span className="comment">// Importing or requiring dependencies<br /></span>
                  <span><span className="midblue">const</span> <span className="lightyellow">express</span> = <span className="lightyellow">require</span><span className="yellow">(<span className="orange">"express"</span><span className="yellow">)</span></span>;<br /></span>
                  <span><span className="midblue">const</span> <span className="lightyellow">cors</span> = <span className="lightyellow">require</span><span className="yellow">(<span className="orange">"cors"</span><span className="yellow">)</span></span>;<br /></span>
                  <span><span className="midblue">const</span> <span className="blue">mysql</span> = <span className="lightyellow">require</span><span className="yellow">(<span className="orange">"mysql2/promise"</span><span className="yellow">)</span></span>;<br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span className="comment">// Middleware and using JSON<br /></span>
                  <span><span className="midblue">const</span> <span className="blue">server</span> = <span className="lightyellow">express</span><span className="yellow">()</span>;<br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">use</span><span className="yellow">(</span><span className="lightyellow">cors</span><span className="purple">()</span><span className="yellow">)</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">use</span><span className="yellow">(</span><span className="lightyellow">express</span>.<span className="lightyellow">json</span><span className="purple">()</span><span className="yellow">)</span><br /></span>

                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span className="comment">// Database connection<br /></span>
                  <span><span className="midblue">const</span> <span className="blue">database</span> = <span className="blue">mysql</span>.<span className="lightyellow">createPool</span><span className="yellow">(</span><span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="lightblue">host</span>: <span className="orange">"localhost"</span>,<br /></span>
                  <span>  <span className="lightblue">user</span>: <span className="orange">"root"</span>,<br /></span>
                  <span>  <span className="lightblue">password</span>: <span className="orange">""</span>,<br /></span>
                  <span>  <span className="lightblue">database</span>: <span className="orange">"fsd_todolist"</span>,<br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><span className="comment">// Add todo (C - Create)</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">post</span><span className="yellow">(</span><span className="orange">"/api/create/todo"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="midblue">const</span> <span className="yellow">{"{"}</span> <span className="blue">todo</span>, <span className="blue">completed</span> <span className="yellow">{"}"}</span> = <span className="lightblue">req</span>.<span className="lightblue">body</span>;<br /></span>
                  <span>    <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>      <span className="orange">"INSERT INTO todos (label, completed) VALUES (?, ?)"</span>,<br /></span>
                  <span>      <span className="purple">[</span><span className="blue">todo</span>, <span className="blue">completed</span><span className="purple">]</span><br /></span>
                  <span>    <span className="yellow">)</span>;<br /></span>
                  <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo added successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to add todo:<span className="lightyellow">\n</span>"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>  <span className="blue">{"}"}</span><br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;</span>
                  <span><br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><span className="comment">// Get todos (R - Read)</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">get</span><span className="yellow">(</span><span className="orange">"/api/read/todos"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">todos</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>      <span className="orange">"SELECT * FROM todos"</span>,<br /></span>
                  <span>    <span className="yellow">)</span>;<br /></span>
                  <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">todos</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="blue">todos</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"No todos found! 😂"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span><br /></span>
                  <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to read todos:<span className="lightyellow">\n</span>"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>  <span className="blue">{"}"}</span><br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;</span>
                  <span><br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><span className="comment">// Edit todo (U - Update)</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">put</span><span className="yellow">(</span><span className="orange">"/api/update/todo/:id"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="midblue">const</span> <span className="yellow">{"{"}</span> <span className="blue">edited_label</span>, <span className="blue">completed</span> <span className="yellow">{"}"}</span> = <span className="lightblue">req</span>.<span className="lightblue">body</span>;<br /></span>
                  <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">isTodoExists</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>      <span className="orange">"SELECT * FROM todos WHERE id = ?"</span>,<br /></span>
                  <span>      <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                  <span>    <span className="yellow">)</span>;<br /></span>
                  <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">isTodoExists</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>        <span className="orange">"UPDATE todos SET label = ?, completed = ? WHERE id = ?"</span>,<br /></span>
                  <span>        <span className="purple">[</span><span className="blue">edited_label</span>, <span className="blue">completed</span>, <span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                  <span>      <span className="yellow">)</span>;<br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo updated successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"This todo is not found! 😕"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span><br /></span>
                  <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to update todo:<span className="lightyellow">\n</span>"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>  <span className="blue">{"}"}</span><br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;</span>
                  <span><br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><span className="comment">// Delete todo (D - Delete)</span><br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">delete</span><span className="yellow">(</span><span className="orange">"/api/delete/todo/:id"</span>, <span className="midblue">async</span> <span className="purple">(</span><span className="lightblue">req</span>, <span className="lightblue">res</span><span className="purple">)</span> <span className="midblue">=&gt;</span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="pink">try</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="midblue">const</span> <span className="yellow">[</span><span className="blue">isTodoExists</span><span className="yellow">]</span> = <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>      <span className="orange">"SELECT * FROM todos WHERE id = ?"</span>,<br /></span>
                  <span>      <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                  <span>    <span className="yellow">)</span>;<br /></span>
                  <span>    <span className="pink">if</span> <span className="yellow">(</span><span className="blue">isTodoExists</span>.<span className="lightblue">length</span> &gt; <span className="lightgreen">0</span><span className="yellow">)</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="pink">await</span> <span className="blue">database</span>.<span className="lightyellow">query</span><span className="yellow">(</span><br /></span>
                  <span>        <span className="orange">"DELETE FROM todos WHERE id = ?"</span>,<br /></span>
                  <span>        <span className="purple">[</span><span className="lightblue">req</span>.<span className="lightblue">params</span>.<span className="lightblue">id</span><span className="purple">]</span><br /></span>
                  <span>      <span className="yellow">)</span>;<br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Todo deleted successfully! 🥳"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span> <span className="pink">else</span> <span className="yellow">{"{"}</span><br /></span>
                  <span>      <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">200</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"This todo is not found! 😕"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="yellow">{"}"}</span><br /></span>
                  <span>  <span className="blue">{"}"}</span> <span className="pink">catch</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="blue">{"{"}</span><br /></span>
                  <span>    <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="yellow">(</span><span className="orange">"Failed to delete todo:<span className="lightyellow">\n</span>"</span> + <span className="lightblue">error</span><span className="yellow">)</span>;<br /></span>
                  <span>    <span className="lightblue">res</span>.<span className="lightyellow">status</span><span className="yellow">(</span><span className="lightgreen">500</span><span className="yellow">)</span>.<span className="lightyellow">json</span><span className="yellow">(</span><span className="purple">{"{"}</span> <span className="lightblue">message:</span> <span className="orange">"Server error 💀"</span> <span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                  <span>  <span className="blue">{"}"}</span><br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;</span>
                  <span><br /></span>
                  <span><br /></span>
                  <span><br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
              <CodeDisplay label="JavaScript JSX" Code={
                <>
                  <span><span className="comment">// Listening on available PORT or 5000</span><br /></span>
                  <span><span className="blue">const</span> <span className="blue">PORT</span> = <span className="lightblue">process</span>.<span className="lightblue">env</span>.<span className="blue">PORT</span> || <span className="lightgreen">5000</span>;<br /></span>
                  <span><span className="blue">server</span>.<span className="lightyellow">listen</span><span className="yellow">(</span><span className="blue">PORT</span>, <span className="purple">(</span><span className="lightblue">error</span><span className="purple">) <span className="midblue">=&gt;</span></span> <span className="purple">{"{"}</span><br /></span>
                  <span>  <span className="midblue">if</span> <span className="blue">(</span><span className="lightblue">error</span><span className="blue">)</span> <span className="midblue">throw</span> <span className="lightblue">error</span>;<br /></span>
                  <span>  <span className="lightblue">console</span>.<span className="lightyellow">log</span><span className="blue">(</span><span className="orange">"Server started!<span className="lightyellow">\n</span>PORT:"</span> + <span className="blue">PORT</span><span className="blue">)</span>;<br /></span>
                  <span><span className="purple">{"}"}</span><span className="yellow">)</span>;<br /></span>
                </>
              } icon={<CurlyBraces />} hasMarginBottom={true} />,
            ]}
          />
        </Wrapper>
      </section>
    </>
  )
}