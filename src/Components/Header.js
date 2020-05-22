import React, {Component} from 'react';
import styled from 'styled-components';
import LogoSrc from '../Assets/Images/Logo.png';
import TopRatedSrc from '../Assets/Images/Top-rated.png';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';

const HeaderContainer = styled.div`
  background: #020202;
  display:flex;
  flex-direction:row;
  padding-left:8px;
  padding-right:8px;
  padding-top:16px;
  padding-bottom:16px;
  justify-content:space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const TopRated = styled.img`
  width: 400px;
  height: 31px;
`;
const Contact= styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
`;
const CallLowerUpperContainer= styled.div`
  padding-right:16px;
  border-right:1px solid white;
  display:flex;
  flex-direction:column;
`;
const CallUpper= styled.div`
  color:white;
  text-align:right;
`;
const CallLower= styled.div`
  display:flex;
  flex-direction:row;
  font-size: 32px !important;
`;
const Facebook = styled(FacebookIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
  padding-left:16px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const CallNumber = styled.div`
  color: white;
`;
const StyledCallIcon = styled(CallIcon)`
  color: #ec6b0c;
  font-size: 32px !important;
`;
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (  
      <HeaderContainer>
         <Logo src={LogoSrc}></Logo>
         <TopRated src={TopRatedSrc}></TopRated>
         <Contact>
                <CallLowerUpperContainer>
                    <CallUpper>Sales Hotline</CallUpper>
                    <CallLower>
                        <StyledCallIcon/>
                        <CallNumber>111 222 333</CallNumber>
                    </CallLower>
                </CallLowerUpperContainer>
                <Facebook/>
         </Contact>
      </HeaderContainer>
    );
  }
}