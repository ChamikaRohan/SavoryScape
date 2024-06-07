import React from 'react'
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div class="search">
        <input placeholder="Search recipes..." type="text"/>
        <button type="submit">Go</button>
    </div>
  )
}
