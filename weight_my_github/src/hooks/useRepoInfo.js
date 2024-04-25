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
        
    const setSizeAndUnits = (size, units) => {
        console.log(size)
        console.log(units)
        setSize(size)
        setUnits(units)        
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
            setSizeAndUnits(sizeReescalated, newUnits)
        }

    }
    // TODO: Devolver en un contexto el setSizeAndUnits para no pasarlo como prop al componente de github size. Esta función se usará cuando se dé click en el tamaño para cambiar las unidades
    return {size, units, userName, error, getRepoInfoAndSetState}
}