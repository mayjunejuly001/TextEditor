const SearchInput = ({ value, onChange }) => {
  return (
    <div className=''>
      <input
        className='mx-16 mt-16  bg-gradient-to-l from-yellow-400 to-blue-400 text-transparent bg-clip-text bg-transparent  '
        type='text'
        placeholder='Find Text '
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput
