import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Header from './header'

const RepositoryList = () => {
  const { userName } = useParams()
  const [value, setValue] = useState([])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repositoryNames = it.data.map((item) => item.name)
      setValue(repositoryNames)
    })
  }, [userName])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>
            {value.map((item) => {
              return (
                <li key={item}>
                  <Link to={`${userName}/${item}`}>{item}</Link>
                </li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
