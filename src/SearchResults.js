import React,{useState,useEffect} from 'react'
import './SearchResults.css'

const SearchResults = ({results,choice}) => {
    const [renderResult,setRenderResult] = useState('')
    const [followers,setFollowers] = useState(null)

    const renderUsers=results.map(result =>{
        const {node_id,avatar_url,html_url,login,followers_url} = result

        fetch(followers_url)
        .then(res => res.json())
        .then(followers => setFollowers(followers))

        return(<div className="user" key={node_id}>
                    <img src={avatar_url} className="avatar" alt=""/>
                    <a href={html_url} target="_blank" className="username">{login}</a>
                    <p>Followers : {followers ? followers.length : "Loading"}</p>
                </div>)
    })

    useEffect(() =>{
        if(choice === "users"){
             setRenderResult(renderUsers)
        }
        else if(choice === "repositories")
        {
            // setRenderResult(renderRepos) 
        }
    },[choice,results])
    console.log(results)

    return(
        <div className="results">
            {renderResult}
        </div>
    )



}

export default SearchResults
