import { useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/Jeanpefe/repos'

export default async function useGetRepoInfoAndSetState() {
    const [size, getSize] = useState(null)

    const repoPromise = await fetch(ENDPOINT_URL)
    if (repoPromise.ok) {
        console.log("Error :(")
    } else {
        console.log("algo ha pasado")
    }
    const repoInfo = await repoPromise.json()
}