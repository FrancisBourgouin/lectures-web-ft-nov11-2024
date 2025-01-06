import "./App.css";

const todos = [
  {
    id: 1,
    name: "Eat some potatoes",
    isCompleted: true,
  },
  {
    id: 2,
    name: "Talk about programming",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Build some gunpla models",
    isCompleted: true,
  },
];

// Not a helper function, it's a component!
// If you return JSX you are a component
// And the name should follow (Starts with Capital letter)
// Props => Properties
function TodoListItem(props){
  const todo = props.todo

  return <li id={todo.id}>
    <h1>{todo.name}</h1>
    {todo.isCompleted && <button>Delete</button>}
    {todo.isCompleted && <button>Mark as incomplete</button>}
    {!todo.isCompleted && <button>Mark as complete</button>}
  </li>
}

function App() {
  const someEmptyArray = []
  const todoList = [];

  for (const todo of todos) {
    // todoList.push(TodoListItem({todo:todo}));
    todoList.push(<TodoListItem key={todo.id} todo={todo} />);
  }

  // ReactDOM.createElement("header", ...)
  return (
    <>
      <header className="Awesome!">
        <h1>Super todos!</h1>
        <h2>{!!someEmptyArray.length && "There's something in there"}</h2>
        <h2>{todoList.length && "There's something in there"}</h2>
      </header>
      <main>
        <ul>{todoList}</ul>
      </main>
      <footer>Copyright - {new Date().toLocaleString()}</footer>
    </>
  );
}

export default App;
