import { useState } from "react"
import { formatSize } from "../logic/formatSize"

export default function useRepoInfo() {
    const [size, setSize] = useState(null)
    const [userName, setUserName] = useState(null)
    const [error, setError] = useState(null)
    const [units, setUnits] = useState("kB")

    const fetchData = async ({userName}) => {
        const repoPromise = await fetch(`https://api.github.com/users/${userName}/repos`)
        if (repoPromise.ok) {
            setError(null)
            console.log("entramos")
            return await repoPromise.json()
        } else {
            setError("El usuario indicado no existe")
        }
    }
        
    const getRepoInfoAndSetState = async ({userName}) => {
        setUserName(userName)
        const newSize = await fetchData({userName})
        if (newSize !== null) 
        {
            let sizeKb = 0
            newSize.forEach(elem => {
                sizeKb += elem.size
            })
            console.log(sizeKb)
            const {sizeReescalated, newUnits} = formatSize(sizeKb)
            console.log(sizeReescalated)
            setSizeAndUnits(sizeReescalated, newUnits)
        }
        
    const setSizeAndUnits = (size, units) => {
        setSize(size)
        setUnits(units)        
    }

    }

    return {size, units, userName, error, getRepoInfoAndSetState}
}