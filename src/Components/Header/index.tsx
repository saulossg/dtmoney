import React from 'react';
import { Container, Bloco } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
    return (
	<>
	<Container>
		<img src={logo} alt='log svg' />
		<button type="submit">
			Nova transação
		</button>
	</Container>
	</>
    )
}
