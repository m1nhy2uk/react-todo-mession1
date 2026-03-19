import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function Main({ todos, addTodo, deleteTodo, toggleTodo }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-cyan-200 flex items-start justify-center p-4 pt-16">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6">
                <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
                    오늘의 할일
                </h1>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            </div>
        </div>
    )
}

export default Main
