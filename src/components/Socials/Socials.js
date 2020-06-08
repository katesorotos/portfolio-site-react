import React from 'react';

import SocialsWrapper from './SocialsWrapper';

import Instagram from '../../images/SVG/InstagramSVG';
import Linkedin from '../../images/SVG/LinkedinSVG';
import Resume from '../../images/SVG/ResumeSVG';
import Github from '../../images/SVG/GithubSVG';

const Socials = () => {

    return (

<SocialsWrapper>
<ul className="introSocialLinks" style={{
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto"}}>
<li>
  <a
    id='icon'
    target="_blank"
    href='https://github.com/katesorotos'
    rel="noopener"
    aria-label="My Github profile"
  >
    <Github /> 
  </a>
</li>
<li>
  <a
  id='icon'
    target="_blank"
    href='https://www.instagram.com/kate_sorotos/'
    rel="noopener"
    aria-label="My Instagram page"
  >
    <Instagram />
  </a>
</li>
<li>
  <a
  id='icon'
    target="_blank"
    href='https://www.linkedin.com/in/kate-sorotos-a57010115/'
    rel="noopener"
    aria-label="My linkedin profile"
  >
    <Linkedin />
  </a>
</li>
<li>
  <a
  id='icon'
    target="_blank"
    href='/'
    rel="noopener"
    aria-label="My CV"
  >
    <Resume />
  </a>
</li> 
</ul>
</SocialsWrapper>
    )
}
export default Socials;