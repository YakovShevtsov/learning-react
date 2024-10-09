import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  let tabContent;

  function handleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'

    setSelectedTab(selectedButton);
  }

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  } else {
    tabContent = <p>Please select a topic</p>;
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, key) => {
              return (
                <CoreConcept
                  {...concept}
                  key={concept.title}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
