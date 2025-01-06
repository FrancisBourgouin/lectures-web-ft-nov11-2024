// Needs: amountOfPlants

export default function Header(props){

  const style = {color:"yellow"}

  return (
    <header className="Header" style={style}>
      <h1>Kevin's Watering World</h1>
      <h2>Saving {props.amountOfPlants} Plants from Dehydration</h2>
    </header>
  )
}