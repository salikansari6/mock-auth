import { render } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import RepoList from './RepoList'

import './SearchResults.css'
import {fetchUserDetails,fetchUsers,fetchRepositories} from './services/api'
import UserList from './UserList'

const SearchResults = ({searchTerm,choice}) => {
    const [results, setResults] = useState([]) 
    
    useEffect(() =>{
        if(choice === "users"){  
            let promises = []
            fetchUsers(searchTerm)
            .then(data=>{
                data.forEach(user =>{
                promises.push(fetchUserDetails(user.url))
            })
            return Promise.all(promises)
        })
        .then(user =>{
            setResults(user)
        })
        .catch(err => console.log(err))
        
        }

        else if(choice === "repositories"){
            fetchRepositories(searchTerm)
            .then(repositories => setResults(repositories) )
        }
    },[choice,searchTerm])

    console.log(results)


    return(
        <div className="results">
            {choice === "users" && <UserList results={results} />}
            {choice === "repositories" && <RepoList results={results}/> }
        </div>
    )



}

export default SearchResults
