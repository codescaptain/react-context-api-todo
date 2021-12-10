import Container from "./components/Container";
import {TodoProvider} from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <Container/>
    </TodoProvider>
  );
}

export default App;
