import Layout from "./components/Layout";
import RoutePage from "./Route";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutePage />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
