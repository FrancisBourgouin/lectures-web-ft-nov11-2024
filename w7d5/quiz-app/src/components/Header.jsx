export default function Header(props) {
  const { toggleMode } = props;

  return (
    <header className="Header">
      <h1>Super Quiz of Destiny! Wow!</h1>
      <button onClick={toggleMode}>Toggle Quiz Mode</button>
    </header>
  );
}
