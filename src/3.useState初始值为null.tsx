// react + ts

import { useState } from "react"

type User = {
  name: string,
  age: number
}
function App() {
  const [user, setUser] = useState<User | null>(null)
  const changeUser = () => {
    setUser(null)
    setUser({
      name:'jack',
      age:18
    })
  }
  // 可选链语法
  // 为了类型安全 可选链做类型守卫
  // 只有user不为null(不为空值)才进行点运算
  return <>this is app{user?.age}</>
}

export default App