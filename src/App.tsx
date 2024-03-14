import "./App.scss";
// Import it
import { materials } from "./materials";

function App() {
  // Calculate values here
  const [copper, iron, lead] = materials;

  const totalIncome =
    copper.income * copper.price +
    iron.income * iron.price +
    lead.income * lead.price;
  // For every material, display the price, income per second, and percentage of the total income

  console.log(materials);

  // Display in the return statement
  return (
    <>
      <div className="App">
        <h2>Total income : {totalIncome.toFixed(2)}$/s</h2>
        <div className="Materials">
          {materials.map((material) => (
            <p>
              <span>{material.name}</span>
              <span> {material.price}$</span>
              <span> {material.income.toFixed(2)}$/s</span>
              <span>{((material.income / totalIncome) * 100).toFixed(2)}%</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
