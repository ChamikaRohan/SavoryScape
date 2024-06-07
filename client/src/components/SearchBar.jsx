import React from 'react'
import "./SearchBar.css"

export default function SearchBar({onClick, onChange}) {
  return (
    <div class="search">
        <input onChange={onChange} placeholder="Search recipes..." type="text"/>
        <button onClick={onClick} type="submit">Go</button>
    </div>
  )
}
