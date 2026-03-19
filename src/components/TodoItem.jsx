import { Link } from 'react-router-dom'

function TodoItem({ item, deleteTodo, toggleTodo }) {
    return (
        <li className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-yellow-50 border-2 border-pink-100 rounded-2xl px-4 py-3 hover:shadow-md transition-shadow">
            {/* 원형 토글 버튼 — 완료 시 채워진 원, 미완료 시 빈 원 */}
            <button
                onClick={() => toggleTodo(item.id)}
                className={`w-6 h-6 rounded-full border-2 flex-shrink-0 transition-all ${
                    item.completed
                        ? 'bg-gradient-to-r from-pink-500 to-orange-400 border-transparent'
                        : 'border-pink-300 bg-white'
                }`}
            />
            <Link
                to={`/todos/${item.id}`}
                className={`flex-1 text-sm font-medium transition-all hover:text-pink-500 ${
                    item.completed ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
            >
                {item.todo}
            </Link>
            <button
                onClick={() => deleteTodo(item.id)}
                className="text-pink-300 hover:text-pink-500 transition-colors text-lg"
            >
                🗑️
            </button>
        </li>
    )
}

export default TodoItem
