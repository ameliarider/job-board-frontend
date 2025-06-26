import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { JobsPage } from './JobsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Footer /> 
      <JobsPage />
    </div>
  );
}

export default App
