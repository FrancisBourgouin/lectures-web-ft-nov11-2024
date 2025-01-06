// CommonJS => require() / module.exports
// ES Module => import ... from ... / export / export default
// export => part of the export object
// export default => the default export

import './App.css';
import Header from "./components/Header"
import PlantList from './components/PlantList';
import { plantsArr } from './data/plants';

function App() {
  const amountOfPlants = plantsArr.length

  return (
    <div className="App">
      <Header amountOfPlants={amountOfPlants}/>
      <PlantList plants={plantsArr}/>
    </div>
  );
}

export default App;
