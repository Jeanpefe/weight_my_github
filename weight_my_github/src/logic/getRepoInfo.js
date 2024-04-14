// import {size} from 'weight_my_github\src\logic\getRepoInfo.js'

const ENDPOINT_URL = 'https://api.github.com/repos/Jeanpefe/weight_my_github'

export function getRepoInfo() {
    fetch(ENDPOINT_URL)
    .then((response) => response.json())
    .then(data => console.log(data))
    return 
}