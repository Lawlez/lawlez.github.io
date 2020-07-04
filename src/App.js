import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/TestPage/HomePage.js'
import { SignIn, Dashboard } from './views'
import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
const Header = () => <div>HEADER</div>
const Footer = () => <div>FOOTER</div>

const App = ({ store }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Container maxWidth="md">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={SignIn} />
                    </Switch>
                </Container>

                <Footer />
            </Router>
        </ThemeProvider>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App
