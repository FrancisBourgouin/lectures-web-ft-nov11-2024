import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  // const parsedPlants = plants.map((plant) => (
  //   <PlantListItem
  //     key={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     wateringInterval={plant.wateringInterval}
  //     lastWatered={plant.lastWatered}
  //   />
  // ));

  return (
    <section className="PlantList">
      {!parsedPlants && <h1>PUT SOME PLANTS IN HERE YOU DUM DUM</h1>}
      {parsedPlants}
    </section>
  );
}
