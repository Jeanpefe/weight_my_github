import { useState } from "react"
import { formatSize } from "../logic/formatSize"
import { transformUnits } from "../logic/transformUnit"

export default function useRepoInfo() {
    const [size, setSize] = useState(null)
    const [userName, setUserName] = useState(null)
    const [error, setError] = useState(null)
    const [units, setUnits] = useState("kB")
	const [isLoading, setIsLoading] = useState(false)

    const fetchData = async ({userName}) => {
		setIsLoading(true)
        const repoPromise = await fetch(`https://api.github.com/users/${userName}/repos`)
        if (repoPromise.ok) {
            setError(null)
			setIsLoading(false)
            return await repoPromise.json()
        } else {
            setError("El usuario indicado no existe")
			setIsLoading(false)
        }
    }

	// TODO: Poner esto en el useRepoInfo, recibiendo el transformUnits el setSize
	const handleClickOnSize = () => {
		console.log("ENTRA POR FAVORRRR")
		const {newSize, newUnits} = transformUnits(size, units)
		console.log(newSize, newUnits)
		setSize(newSize)
        setUnits(newUnits)   	
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
            const {sizeReescalated, newUnits} = formatSize(sizeKb)
			setSize(sizeReescalated)
			setUnits(newUnits)  
        }

    }
    // TODO: Devolver en un contexto el setSizeAndUnits para no pasarlo como prop al componente de github size. Esta función se usará cuando se dé click en el tamaño para cambiar las unidades
    return {size, units, userName, error, isLoading, handleClickOnSize, getRepoInfoAndSetState}
}