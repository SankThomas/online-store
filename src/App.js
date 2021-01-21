import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/home/Products'
import Heels from './pages/heels/Heels'
import Dresses from './pages/dresses/Dresses'
import Fashion from './pages/fashion/Fashion'
import Shoes from './pages/shoes/Shoes'
import Shorts from './pages/shorts/Shorts'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/heels">
          <Heels />
        </Route>
        <Route path="/dresses">
          <Dresses />
        </Route>
        <Route path="/fashion">
          <Fashion />
        </Route>
        <Route path="/shoes">
          <Shoes />
        </Route>
        <Route path="/shorts">
          <Shorts />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
