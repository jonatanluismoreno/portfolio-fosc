import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/index";

import styles from "./App.module.css";
import { classNamesFunc } from "classnames-generics";
const classNames = classNamesFunc<keyof typeof styles>();
interface Props {}

const Application: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/github"
        element={<Navigate to="https://github.com/jonatanluismoreno" replace />}
      />
    </Routes>
  );
};

export default Application;
