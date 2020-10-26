import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from './head'

import Main from './main'
import RepositoryList from './repositoryList'
import RepositoryText from './repositoryText'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepositoryList />} />
        <Route exact path="/:userName/:repositoryName" component={() => <RepositoryText />} />

      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
