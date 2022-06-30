import useGithubUser from "./useGithubUser"

export default function GithubUserProvider({username}){
const {data,error,loading}=useGithubUser(username)


    return(
        <>
        {loading && <h1>Loading</h1>}
         <h1>{data.login}</h1>
         <img src={data.avatar_url} alt=''></img>
        <h1>{data.name}</h1>
        {error && <h1>{error.message} </h1>}
        </>
    )
}