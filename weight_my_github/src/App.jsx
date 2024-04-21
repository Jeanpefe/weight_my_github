import GithubSize from "./components/GithusSize"
import useRepoInfo from "./hooks/useRepoInfo"
import { useEffect, useState } from "react"
import "./App.css"
function App() {
  const {size, error, getRepoInfoAndSetState} = useRepoInfo()

  useEffect(() => {
    if (error) {
      console.log("hay error, cuidadin")
    }
    getRepoInfoAndSetState({userName : "Jeanpefe"})
  }, []);    

  return (

    <main className="mainInfo">
      <h1>🏋️‍♂️Weight my Github🏋️‍♂️</h1>
      <form className="username-form" onSubmit={(event) => {
        event.preventDefault()
        getRepoInfoAndSetState({userName : event.target[0].value})
      }}>
        <input  placeholder="Github username"></input>
        <button type="submit">Get data</button>
      </form>
      { error 
        ? <span>{error}</span> 
        : <GithubSize size={size}/>
      }
    </main>
  )
}
export default App