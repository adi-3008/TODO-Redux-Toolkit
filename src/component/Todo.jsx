import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice";

export function Todo(){

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
 
    return <>
        <div>Todos</div>
        <ul>
        {
            todos.map((todo) => {
                return <li key={todo.id} className="text-black flex">
                    <div>{todo.text}</div>
                    <button className="ml-4 p-1 bg-slate-500"  onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>
            })
        }
        </ul>
    </>
}