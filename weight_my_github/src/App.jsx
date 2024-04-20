import GithubSize from "./components/GithusSize"
import useRepoInfo from "./hooks/useRepoInfo"
import { useEffect } from "react"

function App() {
  console.log("renderizamos componente")
  const {size, getRepoInfoAndSetState} = useRepoInfo()

  const handleClick = () => {
    getRepoInfoAndSetState()
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