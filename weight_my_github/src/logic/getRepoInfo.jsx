// import {size} from 'weight_my_github\src\logic\getRepoInfo.js'

const ENDPOINT_URL = 'https://api.github.com/users/Jeanpefe/repos'

export async function getRepoInfo() {
    const repoList = await fetch(ENDPOINT_URL)
    .then((response) => response.json())
    .then(data => {return data})
    .catch(alert("Algo ha fallado :D"))
}