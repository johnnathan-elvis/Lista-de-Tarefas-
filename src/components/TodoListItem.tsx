import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../models/Todo";

interface TodoListItempProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItempProps) => {

    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const handleChange = () => {
        toggle(props.todo);
    }

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }


    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={props.todo.done} onChange={handleChange} />
                </label>

            </td>

            <td className="uk-width-expand"> {props.todo.title} </td>

            <td className="uk-wisth-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.todo)}></button>
            </td>

        </tr>
    );
}

export default TodoListItem;