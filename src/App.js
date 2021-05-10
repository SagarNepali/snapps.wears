import HomePage from './pages/homepage/homepage.component'
import '../src/App.css'
import{Router,Switch, Route } from 'react-router-dom'
import HatsPage from './pages/hats/hatspage'
import ShopPage from './pages/shop/shop'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  )
}

export default App;
