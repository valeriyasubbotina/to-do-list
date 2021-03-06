import React from "react";

import classNames from "classnames/bind";
import styles from "./Project.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

const Project = ({ name, tasksCount }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={cx("project", { [`project-${theme}`]: true })}>
        <h1
          className={cx("project-title", { [`project-title-${theme}`]: true })}
        >
          {name}
        </h1>
        <p
          className={cx("project-description", {
            [`project-description-${theme}`]: true,
          })}
        >
          Количество задач: {tasksCount}
        </p>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Project;
