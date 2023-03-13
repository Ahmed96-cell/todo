import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const nav = useNavigate();
  const params = useParams();
  const [state, setstate] = useState({ id: 0, text: "" });

  useEffect(() => {
    const states = props.todos;
    const ele = states.filter((e) => e.id === parseInt(params.id))[0];
    setstate(ele);
  }, []);
  const onsub = (e) => {
    e.preventDefault();

    if (state.text !== "") {
      const newstate = { ...state };
      const todos = [...props.todos];
      const i = todos.findIndex((e) => e.id === newstate.id);
      todos[i] = { ...newstate, iscomplete: false };
      props.settodos(todos);
    }
    nav("/");
  };
  const change = (s) => {
    //clone
    const newstate = { ...state };
    //edit
    newstate[s.currentTarget.name] = s.currentTarget.value;
    //setstate
    setstate(newstate);
  };

  return (
    <React.Fragment>
      <form onSubmit={onsub} className="row g-3 justify-content-center m-3">
        <div className="col-sm-4">
          <input
            type="text"
            value={state.text}
            onChange={change}
            className="form-control"
            id="inputPassword"
            name="text"
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-outline-success mb-3">
            Edit Task
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Edit;
