import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import Home from 'pages/home';
import Browse from 'pages/browse';
import SignIn from 'pages/signin';
import SignUp from 'pages/signup';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route path={ROUTES.BROWSE} component={Browse} />
					<Route path={ROUTES.SIGN_IN} component={SignIn} />
					<Route path={ROUTES.SIGN_UP} component={SignUp} />

				</Switch>
			</Router>
		</>
	);
}

export default App;
