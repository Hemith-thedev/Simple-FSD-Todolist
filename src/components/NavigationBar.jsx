import Wrapper from "./Wrapper";
import UL from "./UL";
import Logo from "./Logo";
import NavigationButton from "./NavigationButton";

export default function NavigationBar({ isOpen, isMobile }) {
  return (
    <div className={`navigation-bar ${isOpen ? "open" : ""} ${isMobile ? "is-mobile" : ""} ${!localStorage.getItem("s-fsd-t-user-name") ? "hide" : ""}`}>
      <Wrapper>
        <div className="logo">
          <Logo fill={"var(--primary-10)"} />
        </div>
        <UL
          contents={[
            <NavigationButton label="Quick Introduction" path="/" />,
            <NavigationButton label="Concepts" isDropdown={true} links={[
              <NavigationButton label="Required Tools" isDropdown={true} links={[
                <NavigationButton label="Node JS" path="/concepts/required-tools/node-js" />,
                <NavigationButton label="XAMPP Control Panel" path="/concepts/required-tools/xampp-control-panel" />
              ]} />,
              <NavigationButton label="Understanding" isDropdown={true} links={[
                <NavigationButton label="Languages" isDropdown={true} links={[
                  <NavigationButton label="JavaScript" path="/concepts/understanding/languages/javascript-jsx" />,
                  <NavigationButton label="TypeScript" path="/concepts/understanding/languages/typescript" />
                ]} />,
                <NavigationButton label="Files" path="/concepts/understanding/files" />,
                <NavigationButton label="Folders" path="/concepts/understanding/folders" />,
              ]} />,
            ]} />,
            <NavigationButton label="Project Setup" path="/project-setup" />,
            <NavigationButton label="Codes" isDropdown={true} links={[
              <NavigationButton label="Server" isDropdown={true} links={[
                <NavigationButton label="package.json" path="/codes/server-side/package" />,
                <NavigationButton label="server.js" isDropdown={true} links={[
                  <NavigationButton label="basics" path="/codes/server-side/server/basics" />,
                  <NavigationButton label="middleware" path="/codes/server-side/server/middleware" />,
                  <NavigationButton label="database" path="/codes/server-side/server/database" />,
                  <NavigationButton label="routes" isDropdown={true} links={[
                    <NavigationButton label="create" path="/codes/server-side/server/routes/create" />,
                    <NavigationButton label="read" path="/codes/server-side/server/routes/read" />,
                    <NavigationButton label="update" path="/codes/server-side/server/routes/update" />,
                    <NavigationButton label="delete" path="/codes/server-side/server/routes/delete" />
                  ]} />,
                  <NavigationButton label="listening" path="/codes/server-side/server/listening" />,
                ]} />
              ]} />,
              <NavigationButton label="Client" isDropdown={true} links={[
                <NavigationButton label="src" isDropdown={true} links={[
                  <NavigationButton label="components" isDropdown={true} links={[
                    <NavigationButton label="TodoForm" path="/codes/client-side/src/components/todo-form-component" />,
                    <NavigationButton label="Todo" path="/codes/client-side/src/components/todo-component" />
                  ]} />,
                  <NavigationButton label="App.js" isDropdown={true} links={[
                    <NavigationButton label="Imports" path="/codes/client-side/app/imports" />,
                    <NavigationButton label="Todo Component" path="/codes/client-side/app/todo-component" />
                  ]} />,
                ]} />,
              ]} />
            ]} />,
          ]}
        />
      </Wrapper>
    </div>
  )
}