import HomePage from './pages/homepage/homepage.component'
import '../src/App.css'
import{Router,Switch, Route } from 'react-router-dom'
import HatsPage from './pages/hats/hatspage'
import ShopPage from './pages/shop/shop'
import Header from './component/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )
}

export default App;
