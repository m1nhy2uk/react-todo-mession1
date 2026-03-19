import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, toggleTodo }) {
    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <p className="text-4xl mb-3">🥲</p>
                <p className="text-sm font-medium">할 일이 없어요</p>
                <p className="text-xs mt-1">위 입력창에서 추가해보세요!</p>
            </div>
        )
    }
    return (
        <ul className="flex flex-col gap-2">
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList
