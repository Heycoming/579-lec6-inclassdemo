import "./styles.css";
import ComponentName from "./components/ComponentName";
import MixedComponentName from "./components/MixedComponentName";
import ComponentFragment from "./components/ComponentFragment";
import ComponentSomeWord from "./components/ComponentSomeWord";
import ComponentSomeMath from "./components/ComponentSomeMath";
import NameTag from "./components/NameTag";
import OpeningClosingComponent from "./components/OpeningClosingComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentName />
      <hr />
      <MixedComponentName />
      <ComponentFragment />
      <ComponentSomeWord />
      <ComponentSomeMath />
      <NameTag
        firstName="detective"
        lastName="crashmore"
        quote="I get paid for movies"
      />
      <OpeningClosingComponent>
        <p>Between the Aliens!</p>
      </OpeningClosingComponent>
    </div>
  );
}
