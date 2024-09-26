import { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import Separator from "./components/Separator";

function App() {
  const [change, setChange] = useState({
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  });
  const [changeDue, setChangeDue] = useState(0);

  return (
    <main className="gradient-bg min-vh-100 px-5 py-3 d-flex gap-4 flex-column">
      <header>
        <h1 className="text-white fw-bold">Change Calculator</h1>
      </header>
      <Separator />
      <section className=" d-flex gap-3">
        <InputSection setChange={setChange} setChangeDue={setChangeDue} />
        <OutputSection changeDue={changeDue} change={change} />
      </section>
    </main>
  );
}

export default App;
