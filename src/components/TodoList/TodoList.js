import React from "react";

class TodoList extends React.Component {
  render() {
    console.log(this.props.todos);
    // const { id } = this.props.todos;
    //   <p>jjjjjj</p>;
    return (
      <ul>
        {this.props.todos.todos.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
            <button>Удалить</button>
          </li>
        ))}
      </ul>
    );
  }

  //   return (
  //     <ul>
  //       {todos.map(({ id, text }) => (
  //         <li key={id}>
  //           <p>{text}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
}

export default TodoList;
