const STORAGE_KEY = 'datodo-todos'

// localStorage에서 todos를 불러오는 함수
function getStorage() {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
}

// todos 배열을 localStorage에 저장하는 함수
function setStorage(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

export { getStorage, setStorage }
