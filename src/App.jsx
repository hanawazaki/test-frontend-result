import React, { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './assets/search.svg'
import Card from './components/Card'
import Spinner from './components/Spinner'


function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSearch = async (param) => {
    const response = await fetch(`https://my-json-server.typicode.com/glendmaatita/userjsondemo/db?q=${param}`)
    const data = await response.json()

    setUsers(data.data.filter((user) => {
      // const data = user.name.toLowerCase() || user.email.toLowerCase() || user.username.toLowerCase()
      return user.name.toLowerCase().includes(param.toLowerCase()) || user.email.toLowerCase().includes(param.toLowerCase()) || user.username.toLowerCase().includes(param.toLowerCase()) || user.email.toLowerCase().includes(param.toLowerCase());

    }))
  }

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/glendmaatita/userjsondemo/db`)
      const data = await response.json()
      if (data) {
        setUsers(data.data)
        setLoading(false)
      } else {
        setUsers([])
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <main className="flex flex-row mx-auto">
        <div className="w-full mx-auto xl:w-9/12 p-5">
          <div className="nav">
            <div
              className="flex justify-between items-center w-100 mb-3 mb-md-0"
            >
              <div className="flex justify-start items-center">
                <h2 className="nav-title">User List</h2>
              </div>
            </div>

            <div
              className="flex justify-between items-center nav-input-container"
            >
              <div className="nav-input-group">
                <input
                  type="text"
                  className="nav-input"
                  placeholder="Search name, usename, email"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="btn-nav-input">
                  <img src={searchIcon} alt="search" />
                </button>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="flex flex-wrap mt-5 pb-5">
              {
                loading ? (
                  <div className="flex justify-center items-center w-full">
                    <Spinner />
                  </div>
                ) :
                  <Card users={users} />
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
