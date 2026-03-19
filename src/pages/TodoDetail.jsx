import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function TodoDetail({ todos, updateDetail }) {
    // URL에서 id 파라미터 추출
    const { id } = useParams()
    const navigate = useNavigate()

    // id로 해당 todo 찾기 (URL 파라미터는 문자열이므로 Number로 변환)
    const todo = todos.find((item) => item.id === id)

    // 상세 계획 입력 상태 — 기존에 저장된 detail이 있으면 불러옴
    const [detail, setDetail] = useState(todo?.detail ?? '')

    // 해당 id의 todo가 없을 때 예외 처리
    if (!todo) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-cyan-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">존재하지 않는 할 일이에요.</p>
            </div>
        )
    }

    // 저장 버튼 클릭 시 detail 업데이트 후 메인 페이지로 이동
    const handleSave = () => {
        updateDetail(todo.id, detail)
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-cyan-200 flex items-start justify-center p-4 pt-16">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6">
                <h1 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
                    {todo.todo}
                </h1>
                <p className="text-sm text-gray-400 mb-6">{todo.completed ? '✅ 완료' : '⏳ 미완료'}</p>
                <textarea
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder="상세 계획을 입력하세요"
                    className="w-full h-48 border-2 border-pink-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors resize-none"
                />
                <div className="flex gap-2 mt-4">
                    {/* 저장 후 메인 페이지로 이동 */}
                    <button
                        onClick={handleSave}
                        className="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 rounded-xl hover:opacity-90 transition-opacity"
                    >
                        저장
                    </button>
                    {/* 저장 없이 메인 페이지로 이동 */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex-1 border-2 border-pink-300 text-pink-500 font-bold py-2 rounded-xl hover:bg-pink-50 transition-colors"
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail
