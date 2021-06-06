import Form from 'components/form';
import FooterContainer from 'containers/footer';
import HeaderContainer from 'containers/header';
import { FirebaseContext } from 'context/firebase';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import * as ROUTES from 'constants/routes';

function SignIn() {
	const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password === '' || emailAddress === '';

	const handleSignin = (e) => {
		e.preventDefault();

		return firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((err) => {
				setEmailAddress('');
				setPassword('');
				setError(err.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}

export default SignIn;
