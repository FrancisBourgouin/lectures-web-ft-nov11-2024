export default function SearchHistory(props) {
  const { cityList } = props;

  const parsedCityButtons = cityList.map((city) => (
    <li key={city}>
      <button>{city}</button>
    </li>
  ));

  return (
    <section className="SearchHistory">
      <ul>
        {parsedCityButtons}
      </ul>
    </section>
  );
}
