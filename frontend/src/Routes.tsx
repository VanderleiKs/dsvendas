import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default Routes;
