import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage.js'
import LoginPage from './views/LoginPage/LoginPage.js'
import { Container } from '@material-ui/core'
const Header = () => <div>HEADER</div>
const Footer = () => <div>FOOTER</div>

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Header />
            <Container maxWidth="md">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Container>

            <Footer />
        </Router>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App
