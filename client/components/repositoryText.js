import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import Header from './header'

const RepositoryText = () => {
  const [content, setContent] = useState()
  const { userName, repositoryName } = useParams()

  useEffect(() => {
    axios(`http://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then((it) => {
      setContent(it.data)
    })
  }, [userName, repositoryName])
  return (
    <div>
      <Header />
      <div className="p-4" id="description">
        <ReactMarkdown source={content} />
      </div>
    </div>
  )
}

RepositoryText.propTypes = {}

export default RepositoryText
