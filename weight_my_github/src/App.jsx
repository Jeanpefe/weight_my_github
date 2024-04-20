import GithubSize from "./components/GithusSize"
import useRepoInfo from "./hooks/useRepoInfo"
import { useEffect, useState } from "react"
import "./App.css"
function App() {
  const {size, getRepoInfoAndSetState} = useRepoInfo()

  useEffect(() => {
    getRepoInfoAndSetState({userName : "Jeanpefe"})
  }, []);    

  return (

    <main className="mainInfo">
      <h1>🏋️‍♂️Weight my App🏋️‍♂️</h1>
      <form className="username-form" onSubmit={(event) => {
        event.preventDefault()
        getRepoInfoAndSetState({userName : event.target[0].value})
        console.log(event.target[0].value)}}>
        <input  placeholder="Github username"></input>
        <button type="submit">Get data</button>
      </form>
      <GithubSize size={size}/>
    </main>
  )
}
export default App