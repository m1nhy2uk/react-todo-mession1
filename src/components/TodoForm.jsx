function TodoForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (!form.todo.value) {
            alert('할 일을 입력해주세요.')
            return
        }
        addTodo(form.todo.value)
        form.reset()
    }

    return (
        <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                name="todo"
                placeholder="할 일을 입력하세요"
                className="flex-1 border-2 border-pink-300 rounded-xl px-4 py-2 text-sm outline-none focus:border-pink-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold w-10 h-10 rounded-xl hover:opacity-90 transition-opacity text-xl flex items-center justify-center">
                +
            </button>
        </form>
    )
}

export default TodoForm
