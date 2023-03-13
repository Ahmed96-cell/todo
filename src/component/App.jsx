import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./form";
import Nav from "./Nav";
import Edit from "./Edit";
import List from "./List";

const App = () => {
  const nav = useNavigate();
  const [state, setstate] = useState([
    { id: 1, text: "frist to do", iscomplete: false },
    { id: 2, text: "second to do", iscomplete: false },
    { id: 3, text: "third to do", iscomplete: false },
  ]);

  const onedit = (e) => {
    nav(`/edit/${e.id}`);
    console.log("edit");
  };
  const ondelete = (e) => {
    console.log("delete");
    //clone
    const states = [...state];
    //edit
    const newState = states.filter((p) => p.id !== e.id);
    //setstate
    setstate(newState);
  };

  return (
    <React.Fragment>
      <Nav />

      <Routes>
        <Route
          path="/edit/:id"
          element={<Edit todos={state} settodos={setstate} />}
        />
        <Route
          path="/"
          element={
            <React.Fragment>
              <Form todos={state} settodos={setstate} />
              <List
                todos={state}
                settodos={setstate}
                onedit={onedit}
                ondelete={ondelete}
              />
            </React.Fragment>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
