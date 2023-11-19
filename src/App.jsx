import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [generalInfo, setGeneralInfo] = useState('')
  const [education, setEducation] = useState('')


  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleTitleChange(event){
    setTitle(event.target.value)
  }

  function handleGeneralInfoChange(event){
    setGeneralInfo(event.target.value)
  }

  function handleEducationChange(event){
    setEducation(event.target.value)
  }


  return (
    <div className='app'>
      <header>
        <h1>CV Application</h1>
      </header>
      
      <main>
        <div className='input-section'>
          <div className='title-input-form'>
            <label>Title: 
              <input type='text' id='title' value={title} onChange={handleTitleChange}/>
            </label>
          </div>

          <div className='name-input-form'>
            <label>Name: 
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={handleNameChange}
              />
            </label>
          </div>

          <div className='general-info-form'>
            <label>General Info: 
              <input type='text' id='general-info' value={generalInfo} onChange={handleGeneralInfoChange}/>
            </label>
          </div>

          <div className='education-form'>
            <label>Education: 
              <input type='text' id='education' value={education} onChange={handleEducationChange}/>
            </label>
          </div>
        </div>

        <div className='output-section'>
          <h2>Title: {title}</h2>
          <p>Name: {name}</p>
          <p>General Info: {generalInfo}</p>
          <p>Education: {education}</p>
        </div>
      </main>
    </div>
  )
}

export default App
