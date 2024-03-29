import React from "react";
import { Provider, useSelector } from "react-redux";
import DarkModeSwitcher from "./components/dark-mode/dark-mode-switcher";
import LangSwitcher from "./components/lang-switcher/lang-switcher";
import store from "./store";
import "./App.css";
import { $t } from "./helpers/locale-helper";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const currentLang = useSelector((state) => state.locale.lang);

  return (
    <div className={darkMode === true ? "dark" : ""}>
      <DarkModeSwitcher />
      <LangSwitcher />
      <h1>{$t("hello-world")}</h1>
    </div>
  );
};

export default App;
