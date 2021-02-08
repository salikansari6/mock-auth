import React,{useEffect,useState} from 'react'
import './Dashboard.css'
import {useParams} from 'react-router-dom'
import SearchResults from './SearchResults';


const DashBoard = () => {
    const [searchTerm , setSearchTerm] = useState('')
    const [choice, setChoice] = useState("users")
    const [results, setResults] = useState(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(`https://api.github.com/search/${choice}?q=${searchTerm}`,{
            // method:"GET",
            headers:{
                "Authorization":`token ${sessionStorage.getItem('access_token')}`, 
            }

        })
        .then(res => {
            return res.json()
        }
        )
        .then(data => setResults(data.items))
    }

    return (
        <div>
            DashBoard
           <form onSubmit={handleSubmit}>
               <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..."/>
               <input type="radio" name="choice" checked={"users" === choice} onChange={e=>setChoice(e.target.value)} value="users" id="users"/>
                <label htmlFor="users">Search Users</label>
               <input type="radio" name="choice" checked={"repositories" === choice} onChange={e=>setChoice(e.target.value)} value="repositories" id="repositories"/>
               <label htmlFor="repositories">Search repositories</label>
               <button type="submit">Search</button>
           </form>
            {results && <SearchResults results={results} choice={choice}/>}
        </div>
    )
}

export default DashBoard
