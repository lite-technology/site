import React, { useState }from 'react';

import logo from '../../assets/imgs/logo.png';
import blueLogo from '../../assets/imgs/blue-logo.png';
import { AiFillInstagram, AiOutlineGithub, GoLogoGist} from 'react-icons/all'
import {theme}  from '../../styles/theme'

import { Container } from './styles';

const Navbar = () => {

	const [hover, setHover] = useState(false);

return (
			<Container>
				 <div class='subContainer'>
					<div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
						{
							hover ? <img src={blueLogo}  alt='lite technology' /> : <img src={logo}  alt='lite technology' />
						}	
					</div>
				 </div>
				 <div class='subContainer links'>
					<AiFillInstagram size={30}/>
					<AiOutlineGithub size={28}/>
				 </div>
			</Container>
	)

}

export default Navbar

