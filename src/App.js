import RoutesApp from "./routes";
import ListProvider from "./contexts/itemlist";

function App() {
  return (
    <ListProvider>
      <RoutesApp/>
    </ListProvider>
  )
}

export default App;
