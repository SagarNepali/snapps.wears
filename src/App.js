import HomePage from './pages/homepage/homepage.component'
import '../src/App.css'
import{Router,Switch, Route } from 'react-router-dom'
import HatsPage from './pages/hats/hatspage'
import ShopPage from './pages/shop/shop'
import Header from './component/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import React from 'react'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/reducers/user/user.actions'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot=>{
          setCurrentUser(
            {
              currentUser: {
                id:snapshot.id,
              ...snapshot.data()
              }
            }, () =>{
              console.log(this.state)
              }
          );
        });

      }
      setCurrentUser(userAuth)
    })    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/hats' component={HatsPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
  
}

const mapDispatchToProps = dispatch =>( {
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default  connect(null,mapDispatchToProps)(App);
