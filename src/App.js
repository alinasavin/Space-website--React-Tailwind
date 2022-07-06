import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {
  Header,
  Home,
  Destination,
  Crew,
  Technology,
  Error,
} from "./components"

function App() {
  return (
    <Router>
      <main>
        <Header />

        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
