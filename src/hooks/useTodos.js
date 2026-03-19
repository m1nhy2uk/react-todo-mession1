import { useEffect, useState } from 'react'
import { getStorage, setStorage } from '../utils/storage'

// 지연 초기화 — 앱 시작 시 한 번만 localStorage에서 데이터를 불러옴
// localStorage에 데이터가 없으면 빈 배열로 시작
function useTodos() {
    const [todos, setTodos] = useState(() => {
        return getStorage() ?? []
    })

    // todos가 변경될 때마다 localStorage에 자동 저장
    useEffect(() => {
        setStorage(todos)
    }, [todos])

    // 새로운 todo 추가
    const addTodo = (text) => {
        setTodos((todo) => [...todo, { id: crypto.randomUUID(), todo: text, completed: false, detail: '' }])
    }

    // 선택한 id의 todo 삭제
    const deleteTodo = (id) => {
        setTodos((todo) => todo.filter((item) => item.id !== id))
    }

    // 선택한 id의 todo 완료 여부 토글
    const toggleTodo = (id) => {
        setTodos((todo) => todo.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
    }

    // 선택한 id의 todo 상세 계획 업데이트
    const updateDetail = (id, detail) => {
        setTodos((todo) => todo.map((item) => (item.id === id ? { ...item, detail } : item)))
    }

    return { todos, addTodo, deleteTodo, toggleTodo, updateDetail }
}

export { useTodos }
