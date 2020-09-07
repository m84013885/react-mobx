import * as React from "react"
import { useObserver } from "mobx-react-lite"

import { useStore } from '../../utils/stroe'

const Todo = () => {
  const store = useStore()

  return useObserver(() => (
    <h1>
      {store.friends}
    </h1>
  ))
}

export default Todo