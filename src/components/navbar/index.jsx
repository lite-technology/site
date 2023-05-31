import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import blueLogo from '../../assets/imgs/blue-logo.png';
import { AiFillInstagram, AiOutlineGithub, GoLogoGist} from 'react-icons/all'
import {theme}  from '../../styles/theme'

import { Container } from './styles';

const Navbar = () => {

	const [hover, setHover] = useState(false);
	const navigate = useNavigate();

return (
			<Container>
				 <div class='subContainer'>
					<div onClick={() => navigate('/')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
						{
							hover ? <img src={blueLogo}  alt='lite technology' /> : <img src={logo}  alt='lite technology' />
						}	
					</div>
				 </div>
				 <div class='subContainer links'>
					<a href="https://instagram.com/litetechnology/" target="_blank">
						<AiFillInstagram size={28}/>
					</a>
					<a href="https://github.com/lite-technology" target="_blank">
						<AiOutlineGithub size={28}/>
					</a>
				 </div>
			</Container>
	)

}

export default Navbar

