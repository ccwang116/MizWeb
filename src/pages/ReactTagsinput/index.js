import React from "react";
import ReactDOM from "react-dom";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

// import { Button, Col, FormGroup, Label, Input, Row } from "reactstrap";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
// import * as Yup from "yup";
// // import TagInput from "react-tagsinput";
const testArray = [
  { name: "奶茶", id: "1" },
  { name: "薯餅", id: "2" },
  { name: "餅乾", id: "3" },
  { name: "奶粉", id: "4" },
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { tags: [], dropdownoptions: [], selectedArray: [] };
  }

  handleChange = (tags) => {
    console.log(tags);
    this.setState({ tags });
  };
  handleFilter = (word) => {
    const res = testArray.filter((val) => val.name.match(word));
    console.log("res", res);
    this.setState({
      dropdownoptions: res,
    });
  };

  render() {
    console.log(this.state);
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.onSubmit}
        render={({
          values,
          errors,
          touched,
          status,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          handleReset,
          setTouched,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} noValidate name="simpleForm">
            <TagsInput
              name="tags"
              value={values.tags}
              onChange={(tags) => {
                console.log(tags);
                this.handleFilter(tags);
              }}
              onChangeInput={(e) => {
                this.handleFilter(e.target.value);
              }}
            />
            <select
              name="YourTarget"
              onChange={(e) => {
                const newArray = this.state.selectedArray;
                newArray.push(e.target.value);
                setFieldValue("tags", newArray);
                this.setState({ selectedArray: newArray });
                setFieldValue("YourTarget", e.target.value);
              }}
            >
              {this.state.dropdownoptions.map((val) => (
                <option value={val.name}>{val.name}</option>
              ))}
            </select>
          </Form>
        )}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
