import React, { useContext } from "react";
import { ACTIONS } from "../TodoList/TodoList";
import styled from "styled-components";
import { TodoContext } from "../../Store/TodoContext";

function TodoListItem({ todo }) {
  const { dispatch, editTodoHandler } = useContext(TodoContext);
  return (
    <Container>
      {todo.complete ? (
        <CompleteDiv>{todo.name}</CompleteDiv>
      ) : (
        <ListTitleDiv>{todo.name}</ListTitleDiv>
      )}
      <div>
        <CompletButton
          onClick={() => {
            dispatch({
              type: ACTIONS.COMPLETE_TODO,
              payload: { id: todo.id },
            });
          }}
        >
          ✔️
        </CompletButton>
        <EditButton
          onClick={() => {
            editTodoHandler(todo.name, todo.id);
          }}
        >
          +
        </EditButton>
        <DeleteButton
          onClick={() => {
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            });
          }}
        >
          X
        </DeleteButton>
      </div>
    </Container>
  );
}

export default TodoListItem;

const CompleteDiv = styled.div`
  font-size: 30px;
  color: #5b5c5b;
  text-decoration: line-through;
`;
const ListTitleDiv = styled.div`
  color: #9a9abc;
  font-size: 30px;
`;
const Container = styled.div`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  margin: 20px;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :nth-child(odd) {
    background: #f9f9f9;
  }

  /* Darker background-color on hover */
  :hover {
    background: #ddd;
  }

  /* When clicked on, add a background color and strike out text */

  /* Add a "checked" mark when clicked on */
`;

const EditButton = styled.button`
  background: #42e3ff;
  border: 1px solid #42e3ff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  margin-right: 10px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  :hover,
  :active {
    background-color: initial;
    background-position: 0 0;
    color: #42e3ff;
  }

  :active {
    opacity: 0.5;
  }
`;

const DeleteButton = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  :hover,
  :active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  :active {
    opacity: 0.5;
  }
`;
const CompletButton = styled.button`
  background: #4278ff;
  border: 1px solid #4278ff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-right: 10px;

  :hover,
  :active {
    background-color: initial;
    background-position: 0 0;
    color: #4278ff;
  }

  :active {
    opacity: 0.5;
  }
`;
