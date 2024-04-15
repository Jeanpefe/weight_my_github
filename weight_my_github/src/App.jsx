import { useState } from "react"
import GithubSize from "./components/GithusSize"
import useGetRepoInfoAndSetState from "./hooks/useGetRepoInfoAndSetState"

function App() {
  const size = 3
  const handleClick = () => {
    useGetRepoInfoAndSetState()
  }
  return (
    <main className="mainInfo">
      <h1>🏋️‍♂️Weight my App🏋️‍♂️</h1>
      <GithubSize size={size}/>
			<button onClick={handleClick}>Get data</button>
    </main>
  )
}

export default App
