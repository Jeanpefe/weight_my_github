import { formatSize } from "../logic/formatSize"

export default function GithubSize({size}) {
    const {sizeReescalated, units} = formatSize({size})
    console.log(size)
    return (
        <h3>Your Github size is: 
            <strong>
                {
                    size ? ` ${sizeReescalated.toFixed(3)} ${units}` : ""
                }
            </strong>
        </h3>
    )
}