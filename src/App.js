import { BrowserRouter } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes/DashboardRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DashboardRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
