import ''

const ENDPOINT_URL = 'https://api.github.com/repos/Jeanpefe/weight_my_github'

export function getRepoInfo() {
    fetch('weight_my_github_jeanpefe.json')
    .then((response) => response.json())
    .then((json) => console.log(json));    
    return 
}