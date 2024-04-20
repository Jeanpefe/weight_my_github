import GithubSize from "./components/GithusSize"
import useRepoInfo from "./hooks/useRepoInfo"

function App() {
  const {size, useGetRepoInfoAndSetState} = useRepoInfo()
  
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