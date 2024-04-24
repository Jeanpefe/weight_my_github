import GithubSize from "./components/GithusSize"
import useRepoInfo from "./hooks/useRepoInfo"
import { useEffect} from "react"
import "./App.css"
import { Footer } from "./components/Footer"

function App() {
  const {size, units, userName, error, getRepoInfoAndSetState} = useRepoInfo()
  console.log(size)
  console.log(units)
  useEffect(() => {
    if (error) {
      console.log("hay error, cuidadin")
    }
    getRepoInfoAndSetState({userName : "Jeanpefe"})
  }, []);    

  return (

    <main className="mainInfo">
      <h1>🏋️‍♂️Weight my Github🏋️‍♂️</h1>
      <form className="userName-form" onSubmit={(event) => {
        event.preventDefault()
        getRepoInfoAndSetState({userName : event.target[0].value})
      }}>
        <div className="input-wrapper">
          <input type="text" id='input' required></input>
          <label 
            htmlFor='input' 
            className='placeholder'>
            Github Username
          </label>
        </div>        
        <button type="submit">Get data</button>
      </form>
      { error 
        ? <span>{error}</span> 
        : <GithubSize userName={userName} size={size} units={units}/>
      }
      <Footer />
    </main>
  )
}
export default App