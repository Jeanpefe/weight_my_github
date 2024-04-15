import { useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/Jeanpefe/repos'

export default function useRepoInfo() {

    const [size, setSize] = useState(null)
    const fetchData = async () => {
        const repoPromise = await fetch(ENDPOINT_URL)
        if (repoPromise.ok) {
            return await repoPromise.json()
        } else {
            console.log("Ya veremos...")
        }
    } 
        
    const useGetRepoInfoAndSetState = async () => {
        const newSize = await fetchData()
        if (newSize !== null) {
            setSize(newSize[0].size)
            console.log(newSize[0].size)
        }
    }

    return {size, useGetRepoInfoAndSetState}
}