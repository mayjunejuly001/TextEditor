const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    onFileUpload(file)
  }

  return (
    <>
      <div className=' w-screen h-60 flex  flex-col items-center justify-center '>
        <h1 className='sticky font-bold text-3xl pt-20 flex justify-center  bg-gradient-to-l from-yellow-400 to-blue-400 text-transparent bg-clip-text'>
          TEXT FINDER
        </h1>
        <input
          className='hidden'
          type='file'
          id='uploadbtn'
          onChange={handleFileChange}
        />
        <label
          className='flex justify-center border  font-semibold mt-4 cursor-pointer rounded-full px-4 py-2  bg-gradient-to-l from-yellow-400 to-blue-400 text-transparent bg-clip-text '
          htmlFor='uploadbtn'
        >
          Upload File
        </label>
      </div>
    </>
  )
}

export default FileUpload
