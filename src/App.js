import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import { IsUserRedirect, ProtectedRoute } from 'helpers/routes';

import Home from 'pages/home';
import Browse from 'pages/browse';
import SignIn from 'pages/signin';
import SignUp from 'pages/signup';
import useAuthListener from 'hooks/use-auth-listener';

function App() {
	const { user } = useAuthListener();
	return (
		<>
			<Router>
				<Switch>
					<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
						<SignIn />
					</IsUserRedirect>
					<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
						<SignUp />
					</IsUserRedirect>
					<ProtectedRoute user={user} path={ROUTES.BROWSE}>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
						<Home />
					</IsUserRedirect>
				</Switch>
			</Router>
		</>
	);
}

export default App;
