import TodoItem from "./TodoItem";
const TodoItems = () => {
        const todoItem = [
                { id: 1, todoText: "Buy Milk", todoDate: "22-Dec-2004" },
                { id: 2, todoText: "Go To Collage", todoDate: "Week Day" },
                { id: 3, todoText: "Exsersize", todoDate: "Everyday" },
              ];
        return todoItem.map(item => <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />)
}

export default TodoItems;