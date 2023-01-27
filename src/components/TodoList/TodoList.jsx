import React, { useContext } from "react";
import { TodoContext } from "../../Store/TodoContext";
import styled from "styled-components";
import TodoListItem from "../TodoItem/TodoListItem";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  COMPLETE_TODO: "complete_todo",
  DELETE_TODO: "delete_todo",
};

function TodoList() {
  const { title, setTitle, addTodoHandler, todos } = useContext(TodoContext);

  const enebled = title.trim().length > 6;
  return (
    <>
      <StyleDiv>
        <StyledTitle>My Todo List </StyledTitle>
        <Div>
          <Input
            value={title}
            placeholder="Write your task..."
            onChange={(e) => setTitle(e.target.value)}
          />

          <AddButton onClick={addTodoHandler} disabled={!enebled}>
            ADD
          </AddButton>
        </Div>
      </StyleDiv>
      <ListItemContainer>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoListItem todo={todo} />
            </div>
          );
        })}
      </ListItemContainer>
    </>
  );
}

export default TodoList;

const ListItemContainer = styled.div`
  background-color: gray;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const StyleDiv = styled.div`
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
  width: 100%;

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;
const StyledTitle = styled.div``;

const Div = styled.div`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  margin-top: 30px;
`;

const Input = styled.input`
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
  &:focus {
    background-color: #f2f8f8;
    border: none;
  }
`;

const AddButton = styled.button`
  padding: 10px;
  width: 25%;
  border: none;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;

  :hover {
    background-color: #bbb;
  }
  :disabled {
  }
`;
