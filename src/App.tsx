import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { classNamesFunc } from "classnames-generics";

import { Header } from "./components/header/index";
import { Main } from "./components/main/index";
import { AboutMe } from "./components/aboutme/index";
import { Projects } from "./components/projects/index";
import { Skills } from "./components/skills/index";
import { Footer } from "./components/footer/index";

import Home from "./pages/home/index";

const classNames = classNamesFunc<keyof typeof styles>();
interface Props {}

const Application: React.FC<Props> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Application;
// FIREBASE
