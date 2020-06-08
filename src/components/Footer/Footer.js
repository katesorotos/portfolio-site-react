import React from 'react';
import FooterWrapper from './FooterWrapper';


// import FooterWrapper from '../styles/layout/footerStyles';
// import gatsbyImg from '../images/techIcons/Gatsby_Monogram.svg';
// import javascriptImg from '../images/techIcons/javascript.svg';
// import mdImg from '../images/techIcons/markdown.svg';
// import netlifyImg from '../images/techIcons/netlify.svg';
// import reactImg from '../images/techIcons/react.svg';
// import styledComponentsImg from '../images/techIcons/styled-components.png';

const Footer = () => {

    // const images = [
    //     {
    //       img: javascriptImg,
    //       url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    //       title: 'Javascript',
    //       alt: 'unofficial javascript logo',
    //     },
    //     {
    //       img: reactImg,
    //       url: 'https://reactjs.org/',
    //       title: 'React',
    //       alt: 'react atom logo',
    //     },
    //     {
    //       img: gatsbyImg,
    //       url: 'https://gatsbyjs.org/',
    //       title: 'GatsbyJS',
    //       alt: 'gatsbyjs logo',
    //     },
    //     {
    //       img: mdImg,
    //       url: 'https://www.markdownguide.org/',
    //       title: 'Markdown',
    //       alt: 'markdown logo',
    //     },
    //     {
    //       img: netlifyImg,
    //       url: 'https://netlify.com/',
    //       title: 'Netlify',
    //       alt: 'netlify logo',
    //     },
    //     {
    //         img: styledComponentsImg,
    //         url: 'https://styled-components.com/',
    //         title: 'Styled Components',
    //         alt: 'styled components logo',
    //       },
    //   ];


    return (
        <FooterWrapper id="contact">
            <footer>
            <span>Want to collaborate?{' '}
      </span>

      <span>
        Let's connect! <br />
        Email me: <a href="/">kate_sorotos@live.co.uk</a>
        <br />
        or{' '}
        <span>
          Follow me: <a href="https://www.instagram.com/kate_sorotos/" target="_blank">@kate_sorotos</a>
        </span>
      </span>
      <small>&copy;{new Date().getFullYear()} - <a href="https://www.instagram.com/kate_sorotos/" target="_blank">Kate Sorotos</a></small>

{/* <div className="stackIcons">
<small>This website was built with:</small>
<ul>
  {images.map((m, i) => {
    const { img, url, title, alt } = m;
    return (
      <li key={i}>
        <a href={url} target="_blank" rel="noopener" aria-label={title}>
   
            <img src={img} title={title} alt={alt} />

        </a>
      </li>
    );
  })}
</ul>
<small>&copy;{new Date().getFullYear()} - <a href="https://www.instagram.com/kate_sorotos/" target="_blank">Kate Sorotos</a></small>
</div> */}
         </footer> 
        </FooterWrapper>
    )
}

export default Footer; 