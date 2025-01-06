export default function PlantListItem(props){
  const {name, type, lastWatered, wateringInterval} = props

  const lastWateredDate = new Date(lastWatered)
  const todayDate = new Date()

  const diffInMs = todayDate - lastWateredDate
  const diffInDays = diffInMs / 1000 / 86400

  const isWellWatered = diffInDays < wateringInterval

  const cssStyle = {
    borderColor:isWellWatered ? "green" : "red"
  }

  return(
    <article className="PlantListItem" style={cssStyle}>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <p>Last watered on: {lastWatered}</p>
    </article>
  )
}

// export default function PlantListItem(props){

//   return(
//     <article>
//       <h1>{props.name}</h1>
//       <h2>{props.type}</h2>
//       <p>{props.lastWatered}</p>
//     </article>
//   )
// }