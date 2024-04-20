import { useEffect, useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/wifodev/repos'

export default function useRepoInfo() {
    const [size, setSize] = useState(null)
    const fetchData = async ({userName}) => {
        const repoPromise = await fetch(`https://api.github.com/users/${userName}/repos`)
        if (repoPromise.ok) {
            return await repoPromise.json()
        } else {
            console.log("Ya veremos...")
        }
    }
        
    const getRepoInfoAndSetState = async ({userName}) => {
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

    return {size, getRepoInfoAndSetState}
}