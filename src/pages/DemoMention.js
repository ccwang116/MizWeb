import React, { useState, useRef } from "react";
import MentionTag from "../components/MentionTag";
function About(props) {
  const [value, setValue] = useState("");
  const mentionsRef = useRef();
  const style = {
    PostEditor__container: {
      width: "600px",
      backgroundColor: "#fff",
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.4)",
      transition: "all 0.1s ease-out",
    },
    PostEditor: {
      border: "0",
      boxSizing: "border-box",
      fontFamily: "ripplingFontBook",
      fontSize: "16px",
      height: "auto",
      minHeight: "140px",
      outline: "none",
      padding: "20px",
      resize: "none",
      width: "100%",
    },
  };
  return (
    <>
      <div style={style.PostEditor__container}>
        <div style={style.PostEditor}>
          <MentionTag
            className="PostEditor__input"
            placeholder={"What are you thinking"}
            value={value}
            setValue={setValue}
            mentions={[
              { name: "Foo", id: "1", display: "Foo", profile_picture: null },
              { name: "Bar", id: "2", display: "Bar", profile_picture: null },
            ]}
            ref={mentionsRef}
          />
          <div key="footerMain" className="PostEditor__footer">
            <button
              title="Show"
              onClick={() => {
                alert(value);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
