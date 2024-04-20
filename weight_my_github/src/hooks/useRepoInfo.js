import { useEffect, useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/wifodev/repos'

export default function useRepoInfo() {
    console.log("entramos al useRepoInfo")
    const [size, setSize] = useState(null)
    const fetchData = async () => {
        const repoPromise = await fetch(ENDPOINT_URL)
        if (repoPromise.ok) {
            return await repoPromise.json()
        } else {
            console.log("Ya veremos...")
        }
    } 
        
    const getRepoInfoAndSetState = async () => {
        const newSize = await fetchData()
        if (newSize !== null) 
        {
            let sizeKb = 0
            newSize.forEach(elem => {
                sizeKb += elem.size
            })
            setSize(sizeKb)
        }
    }

    return {size, getRepoInfoAndSetState}
}