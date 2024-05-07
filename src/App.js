import FileUpload from './components/FileUpload'
import Navbar from './components/Navbar'
import SearchInput from './components/SearchInput'
import React, { useState } from 'react'

const TextFileSearch = () => {
  const [text, setText] = useState('')
  const [searchTerm, setSearchTerm] = useState()
  const [totalOccurrences, setTotalOccurrences] = useState(0)
  const [totalwords, setTotalwords] = useState(0)
  const [searchHistory, setSearchHistory] = useState([])

  const onFileUpload = (file) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      const textFromFile = e.target.result
      setText(textFromFile)
      const words = textFromFile.split(/\s+/).filter((word) => word !== '')
      setTotalwords(words.length)
    }

    reader.readAsText(file)
  }

  const countOccurrences = (searchTerm) => {
    const regex = new RegExp(searchTerm, 'gi')
    const matches = text.match(regex)
    const occurrences = matches ? matches.length : 0
    setTotalOccurrences(occurrences)
  }

  const searchbutton = (e) => {
    setSearchHistory([...searchHistory, searchTerm])
  }

  const handleSearch = (e) => {
    const term = e.target.value

    if (!term) {
      setTotalOccurrences(0)
      setSearchTerm()
    } else {
      setSearchTerm(term)
      countOccurrences(term)
    }
  }

  const highlightSearchTerm = () => {
    if (!searchTerm) return text
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    var final = text.replace(regex, '<mark>$1</mark>')
    return final
  }

  return (
    <div>
      <Navbar />
      <FileUpload onFileUpload={onFileUpload} />
      <div id='search-input'>
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <button
          className=' mx-16 my-2 bg-blue-300/50 text-blue-200 rounded-md px-2'
          onClick={searchbutton}
        >
          Search
        </button>
      </div>
      <div className=' mx-16  bg-gradient-to-l from-yellow-400 to-blue-400 text-transparent bg-clip-text'>
        Total Occurrences: {totalOccurrences} <br />
        Total Words: {totalwords}
      </div>
      <div className=' mx-16 text-center inline-block ho bg-gradient-to-l from-blue-400 to-yellow-400 text-transparent bg-clip-text'>
        <h2>Search History</h2>
        <ul>
          {searchHistory.map((term) => (
            <li
              key={term}
              className='cursor-pointer hover:bg-slate-400/50 rounded-sm block text-center'
              onClick={() => setSearchTerm(term)}
            >
              {term}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center '>
        <div
          className='absolute right-[200px]  top-64 w-2/3 h-auto overflow-hidden overflow-y-auto scroll-smooth text-center  '
          dangerouslySetInnerHTML={{ __html: highlightSearchTerm() }}
        />
      </div>
    </div>
  )
}

export default TextFileSearch
