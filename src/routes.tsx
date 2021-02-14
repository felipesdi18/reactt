import React from 'react'


import { BrowserRouter, Route } from 'react-router-dom'

import Create from './pages/Create'
import List from './pages/List'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Create} exact/>
      <Route path="/list" component={List}/>
    </BrowserRouter>
  )
}


export default Routes