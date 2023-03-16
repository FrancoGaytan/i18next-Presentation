import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes.tsx";
import RoutingComponent from "./RoutingComponent.tsx";

function renderRoute(route) {
  return (
    <Route
      key={route.path}
      path={route.path}
      element={<RoutingComponent route={route} />}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routes).map(([_, routes]) => renderRoute(routes))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
