import React from 'react';
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/jumbotron';

function Jumbotron({ children, direction = 'row', ...restProps }) {
	return (
		<Item direction={direction} {...restProps}>
			<Inner> {children} </Inner>{' '}
		</Item>
	);
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}> {children} </Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}> {children} </SubTitle>;
};

Jumbotron.Image = function JumbotronImage(props) {
	return <Image {...props} />;
};
