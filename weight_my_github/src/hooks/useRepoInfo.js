import { useState } from "react"

const ENDPOINT_URL = 'https://api.github.com/users/Jeanpefe/repos'

export default function useRepoInfo() {

    const [size, setSize] = useState(null)
    const fetchData = async () => {
        const repoPromise = await fetch(ENDPOINT_URL)
        if (repoPromise.ok) {
            console.log("Error :(")
            return await repoPromise.json()
        } else {
            console.log("Ya veremos...")
        }
    } 
        

    const useGetRepoInfoAndSetState = async () => {
        console.log(await fetchData())
    }

    return {size, useGetRepoInfoAndSetState}
}


// export default function useRepoInfo() {
//     const [size, setSize] = useState(null);

//     const fetchRepoInfo = async () => {
//         try {
//             const response = await fetch(ENDPOINT_URL);
//             if (!response.ok) {
//                 throw new Error('No se pudo obtener la información del repositorio.');
//             }
//             const data = await response.json();
//             setSize(data.length);
//         } catch (error) {
//             console.error(error);
//         }
//     };
    
//     const useGetRepoInfoAndSetState = () => {
//         fetchRepoInfo();
//     };

//     return { size, useGetRepoInfoAndSetState };
// }