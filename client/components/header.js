import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-800 p-6 text-white font-bold">
      <div className="flex items-center flex-shrink-0 text-white font-bold mr-6" id="repository-name">
        {userName}
      </div>
      {
        repositoryName && (
          <Link id="go-repository-list" to={`/${userName}`}> Go Repository List </Link>
        )
      }
      <Link id="go-back" to="/"> Go Back </Link>
    </nav>
  )
}

export default Header
