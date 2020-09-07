import * as React from "react"
import { useObserver } from "mobx-react-lite"

import { useStore } from '../../utils/stroe'

const Todo = () => {
  const store = useStore()

  return useObserver(() => (
    <h1 onClick={() => { store.makeFriend() }}>
      {store.friends} {store.friends % 2 === 0 ? "[DONE]" : "[TODO]"}
    </h1>
  ))
}

export default Todo