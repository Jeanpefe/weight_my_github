import { useEffect, useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/wifodev/repos'

export default function useRepoInfo() {
    const [size, setSize] = useState(null)
    const [userName, setUserName] = useState(null)
    const [error, setError] = useState(null)

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
            setSize(sizeKb)
        }
    }

    return {size, userName, error, getRepoInfoAndSetState}
}