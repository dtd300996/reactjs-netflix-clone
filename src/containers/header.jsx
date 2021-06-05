import Header from 'components/header';
import React from 'react';
import * as ROUTES from 'constants/routes';
import logo from 'logo.svg'

function HeaderContainer({children, ...restProps}) {
	return (
		<Header {...restProps}> 
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
			</Header.Frame>
      {children} 
		</Header>
	);
}

export default HeaderContainer;
