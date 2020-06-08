import styled from 'styled-components';
import fadeInUpward from '../../Styles/_animations/FadeInUpward'


const SocialsWrapper = styled.div`


.introSocialLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    animation: ${fadeInUpward} 1s;
    width: 90vw;
    max-width: 350px;
    margin: 0;
    a {
      margin-right: -14vh;
      
    }
    li {
      margin-right: 4vh;
      list-style-type: none;
      height: 45px;
      width: 45px;
      transition: 0.2s;
      background-color: ${props => props.theme.bgColor};
      transition: ${props => props.theme.transition};
      #icon {
        transition: ${props => props.theme.transition};
        height: 15px;
        width: auto;
        background-color: ${props => props.theme.bgColor};
        fill: ${props => props.theme.textColor};
      }
    }
    li:hover {
      transform: translateY(-10px);
    }
  }
}

@media (min-width: 880px) {
    .indexIntro {
      /* margin-left: -10vw; */
      position: relative;
      left: 0px;
      max-width: 1000px;
      h1 h2 {
        font-size: 3rem;
      }
      .introSocialLinks {
        margin-bottom: 25px;
        li {
          height: 55px;
          width: 55px;
        }
        .icon {
          height: 25px;
        }
      }
    }
  }
`;

export default SocialsWrapper;