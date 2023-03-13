import React from "react";
const List = (props) => {
  const CompleteHand = (e) => {
    const todos = [...props.todos];
    const i = todos.indexOf(e);
    todos[i] = { ...todos[i], iscomplete: !todos[i].iscomplete };
    props.settodos(todos);
  };
  return (
    <React.Fragment>
      <ul className="list-group list-group-flush">
        {props.todos.map((e) => (
          <li key={e.id}>
            <input
              className="form-check-input m-3"
              type="checkbox"
              value=""
              onClick={() => CompleteHand(e)}
            />

            <div
              className="text"
              style={{
                textDecorationLine: `${e.iscomplete ? `line-through` : `none`}`,
                // fontSize: "17px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              {e.text}
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  props.onedit(e);
                }}
                type="button"
                className="btn btn-success m-3"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  props.ondelete(e);
                }}
                className="btn btn-danger m-3"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
