import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";
export default function ShowGithubUser() {
    const { name } = useParams()
    return (
        <>
            {console.log(name)}
            <GithubUser name={name} />
        </>
    )
}