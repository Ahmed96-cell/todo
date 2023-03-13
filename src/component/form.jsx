import React, { useState } from "react";

const Form = (props) => {
  const lastele = props.todos.length !== 0 ? props.todos.slice(-1)[0].id : 0;

  const [state, setstate] = useState({
    id: 0,
    text: "",
    iscomplete: false,
  });

  const onsub = (e) => {
    e.preventDefault();

    if (state.text !== "") {
      //clone
      const todos = [...props.todos];
      const todo = { ...state, id: lastele ? lastele + 1 : 1 };
      //edit
      todos.push(todo);
      //setsate
      props.settodos(todos);
      setstate((prevstate) => ({ ...prevstate, text: "", id: 0 }));
    }
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
            placeholder="What's Need to be done"
            value={state.text}
            onChange={change}
            className="form-control"
            id="inputPassword"
            name="text"
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-outline-success mb-3">
            Add Task
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
