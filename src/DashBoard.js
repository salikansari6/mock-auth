import React,{useEffect,useState} from 'react'
import './Dashboard.css'
import {useParams} from 'react-router-dom'
import SearchResults from './SearchResults';


const DashBoard = () => {
    const [searchTerm , setSearchTerm] = useState('')
    const [choice, setChoice] = useState("users")
    const [debouncedSearchTerm,setDebouncedSearchTerm] = useState(searchTerm)
    const [debouncedChoice,setDebouncedChoice] = useState(searchTerm)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setDebouncedSearchTerm(searchTerm)
        setDebouncedChoice(choice)
    }

    return (
        <div className="dashboard">
            <h1 className="dashboard__heading">Dashboard</h1>
           <form onSubmit={handleSubmit} className="dashboard__form">
               <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..."/>
               <input type="radio" name="choice" checked={"users" === choice} onChange={e=>setChoice(e.target.value)} value="users" id="users"/>
                <label htmlFor="users">Search Users</label>
               <input type="radio" name="choice" checked={"repositories" === choice} onChange={e=>setChoice(e.target.value)} value="repositories" id="repositories"/>
               <label htmlFor="repositories">Search repositories</label>
               <button type="submit">Search</button>
           </form>
            <SearchResults searchTerm={debouncedSearchTerm} choice={debouncedChoice}/>
        </div>
    )
}

export default DashBoard
