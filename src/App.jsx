import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTodos } from './hooks/useTodos'
import Main from './pages/Main.jsx'
import TodoDetail from './pages/TodoDetail.jsx'

function App() {
    const { todos, addTodo, deleteTodo, toggleTodo, updateDetail } = useTodos()

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Main todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />}
                />
                <Route path="/todos/:id" element={<TodoDetail todos={todos} updateDetail={updateDetail} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
