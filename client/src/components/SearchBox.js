import React, { useState } from 'react'
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";



const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
<div>
        
        <InputBase 
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Employee...'
        />

      <IconButton
      // style={{marginLeft: '-100px'}}
       type='submit'
       startIcon={<SearchIcon />}
        onClick={submitHandler}>
          <SearchIcon />
      </IconButton>
      </div>
  )
}

export default SearchBox
