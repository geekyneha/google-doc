import React from "react";
import style from "./layout.module.css";
import TextEditor from "../organism/TextEditor/TextEditor";

const Layout = () => {
  return (
    <>
      <div className={style.header}>Header</div>
      <div className={style["edit-page"]}>
        {/* <div className={style["edit-bar"]}></div> */}
        <TextEditor />
      </div>
    </>
  );
};

export default Layout;
