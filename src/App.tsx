import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";

interface Props {}

const Application: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Application;
