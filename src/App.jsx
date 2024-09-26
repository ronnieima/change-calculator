import { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import Separator from "./components/Separator";

export const DENOMINATIONS = [
  { label: "Twenties", value: "twentyDollars", costInPennies: 2000 }, // in pennies
  { label: "Tens", value: "tenDollars", costInPennies: 1000 },
  { label: "Fives", value: "fiveDollars", costInPennies: 500 },
  { label: "Ones", value: "dollars", costInPennies: 100 },
  { label: "Quarters", value: "quarters", costInPennies: 25 },
  { label: "Dimes", value: "dimes", costInPennies: 10 },
  { label: "Nickels", value: "nickels", costInPennies: 5 },
  { label: "Pennies", value: "pennies", costInPennies: 1 },
];

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
