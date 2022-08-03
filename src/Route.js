import { Route, Routes } from "react-router-dom";
import Ask from "./pages/ask";
import HomePage from "./pages/home";
import Jobs from "./pages/jobs";
import Newest from "./pages/newest";
import NotFoundPage from "./pages/notFound";
import Show from "./pages/show";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/newest" element={<Newest />} />
      <Route path="/show" element={<Show />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutePage;
