import { formatSize } from "../logic/formatSize"

export default function GithubSize({userName, size}) {
    const {sizeReescalated, units} = formatSize({size})
    console.log(size)
    return (
        <span>The repo size of {userName} is: 
            <strong>
                {
                    size ? ` ${sizeReescalated.toFixed(3)} ${units}` : ""
                }
            </strong>
        </span>
    )
}