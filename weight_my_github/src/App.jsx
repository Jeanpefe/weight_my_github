import { useState } from "react"
import GithubSize from "./components/GithusSize"
import { getRepoInfo } from "./logic/getRepoInfo"

function App() {
  const [size, getSize] = useState(3)
  const handleClick = () => {
    getRepoInfo()
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
