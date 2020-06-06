import React, {Component} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import LogoSrc from '../Assets/Images/Logo.png';
import CheckIcon from '@material-ui/icons/Check';

const Container = styled.div`
  background-color:white;
`;

const Header = styled.div`
  padding-bottom:24px;
  padding-top:24px;
  padding-left:16px;
  padding-right:16px;
  @media (max-width:525px){
    padding-left:8px;
    padding-right:8px;
    padding-bottom:16px;
    padding-top:16px;
  }
  @media (max-width:385px){
    padding-left:4px;
    padding-right:4px;
  }
`;

const SubHeader = styled.div`
  background-color:#ec6b0c;
  padding-bottom:24px;
  padding-top:24px;
  padding-left:16px;
  padding-right:16px;
  @media (max-width:385px){
    padding-bottom:16px;
    padding-top:16px;
    padding-left:4px;
    padding-right:4px;
}
`;

const Welcome = styled.h2`
  font-weight:500;
  font-size:1.4rem;
`;

const Form = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  padding-top:16px;
  padding-right:56px;
@media (max-width:920px){
  padding-right:32px;
}
@media (max-width:640px){
  padding-right:16px;
}
@media (max-width:385px){
  padding-right:8px;
}
@media (max-width:310px){
  padding-right:4px;
}
`;

const SubHeaderParagraph = styled.p`
  margin-top:12px;
  margin-bottom:12px;
  font-weight:400;
`;

const StyledLink = styled(NavLink).attrs()`
  width:100%;
  text-decoration:none;
  color:black;
  &:hover {
    color: #ec6b0c;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  -webkit-box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);
  -moz-box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);
  box-shadow: 10px 10px 47px -26px rgba(0,0,0,0.47);
`;

const SubHeaderList = styled.ul`
  padding-left:32px;

`;
const SubHeaderListElement = styled.li`

`;
const Main = styled.div`
color:black;

`;
const FormElement = styled.div`
  display:flex;
  margin-bottom:16px;

`;
const FormElementText = styled.div`
  margin-right:80px;
  @media (max-width:960px){
    margin-right:40px;
  }
  @media (max-width:640px){
    margin-right:24px;
  }
  @media (max-width:415px){
    margin-right:8px;
  }
  @media (max-width:385px){
    margin-right:4px;
  }
  @media (max-width:310px){
    margin-right:2px;
  }
`;
const FormElementInput = styled.input`
  min-width:500px;
  @media (max-width:870px){
    min-width:400px;
  }
  @media (max-width:750px){
    min-width:300px;
  }
  @media (max-width:610px){
    min-width:230px;
  }
  @media (max-width:445px){
    min-width:180px;
  }
  @media (max-width:340px){
    min-width:0px;
    width:160px;
  }
  @media (max-width:290px){
    width:140px;
  }
`;

const MainHeader = styled.h2`
  font-weight:500;
  font-size:1.2rem;
  padding:16px;

`;
const MainBodyHeader = styled.h2`
  font-weight:500;
  font-size:1.2rem;
  border-bottom:1px solid #cccccc;
  padding-bottom:8px;
`;
const MainBody = styled.div`
  background-color:#f5f5f5;
  padding-bottom:24px;
  padding-top:24px;
  padding-left:56px;
  padding-right:56px;
  display:flex;
  flex-direction:column;
  @media (max-width:525px){
    padding-left:16px;
    padding-right:16px;
    padding-bottom:16px;
    padding-top:16px;
  }
  @media (max-width:385px){
    padding-left:4px;
    padding-right:4px;  
  }
`;

const SubmitButton = styled.button`
  background-color:#d4600b;
  color:white;
  outline:none;
  border:none;
  padding-top:8px;
  padding-bottom:8px;
  padding-left:16px;
  padding-right:16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Checked = styled(CheckIcon)`
  color: white;
`;

const WarningForname= styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const WarningSurname= styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const WarningMiddleName= styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const WarningMail =styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const Sent =styled.div`
  display:none;
`;

const WarningTel= styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

export class FinanceApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validSubmit:false,
      validForname:false,
      validMiddleName:false,
      validNumber:false,
      validMail :false,
    };
    this.submit = this.submit.bind(this);
    this.onChangeForname = this.onChangeForname.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
  }

/**
 * On submit data are checked (adequate states must be true), if OK =>"sent" element is displayed.
 */
  submit(){
    if(this.state.validMail===true && this.state.validForname===true && this.state.validMiddleName===true && this.state.validNumber===true && this.state.validSurname===true ){
      this.setState({validSubmit: true});
      document.getElementById("sent").style.display = "block";
    }
    else{
      this.setState({validSubmit: false});
    }
  }

/**
 * Veryfing name, value can't be empty and must be matched with regex.
 *  @param   {string} e.target.value inputted name
 */
  onChangeForname(e){
    let value = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if(value.match(letters)){
      document.getElementById("warningForname").style.display = "none";
      this.setState({forname: value});
      this.setState({validForname: true});
    }
    else{
    document.getElementById("warningForname").style.display = "block";
    this.setState({validForname:false});  
    }
  }

/**
 * Veryfing name, value can't be empty and must be matched with regex.
 *  @param   {string} e.target.value inputted name
 */
  onChangeMiddleName(e){
    let value = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if(value.match(letters)){
      document.getElementById("warningMiddleName").style.display = "none";
      this.setState({middleName: value});
      this.setState({validMiddleName: true});
    }
    else{
      document.getElementById("warningMiddleName").style.display = "block";
      this.setState({validMiddleName:false});
    }
  }

/**
 * Veryfing name, value can't be empty and must be matched with regex.
 *  @param   {string} e.target.value inputted name
 */
  onChangeSurname(e){
    let value = e.target.value;
    let letters = /^[A-Za-z]+$/;
    if(value.match(letters)){
      document.getElementById("warningSurname").style.display = "none";
      this.setState({surname: value});
      this.setState({validSurname: true});
    }
    else{
      document.getElementById("warningSurname").style.display = "block";
      this.setState({validSurname: false});
    }
  }

/**
 * Veryfing number, value can't be empty and must be matched with regex.
 *  @param {number} e.target.value inputted number
 */
  onChangeNumber(e){
    let value = e.target.value;
    let numbers = /^[0-9]+$/;
    if(value!=="" && value.match(numbers)){
      document.getElementById("warningTel").style.display = "none";
      this.setState({number: value});
      this.setState({validNumber: true});
    }
    else{
      document.getElementById("warningTel").style.display = "block";
      this.setState({validNumber: false} );
    }
  }

/**
 * Veryfing mail, value can't be empty and must be matched with regex.
 *  @param {string} e.target.value inputted mail
 */
  onChangeMail(e){
    let value = e.target.value;
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(value).toLowerCase())){
      document.getElementById("warningMail").style.display = "none";
      this.setState({mail: value});
      this.setState({validMail: true});
    }
    else{
    document.getElementById("warningMail").style.display = "block";
    this.setState({validMail: false});
    }
  }

  render() {
    return (  
      <Container>
        <Header><StyledLink to="/Lux-cars" ><Logo src={LogoSrc}></Logo></StyledLink></Header>
        <SubHeader>
          <Welcome>Welcome</Welcome>
          <SubHeaderParagraph>By fully completing this finance application we will be able to quickly and accurately get back to you with a decision.</SubHeaderParagraph>
          <SubHeaderParagraph>You can be assured that:</SubHeaderParagraph>
          <SubHeaderList>
          <SubHeaderListElement>There is no obligation to purchase anything</SubHeaderListElement>
          <SubHeaderListElement>It’s a safe and secure process</SubHeaderListElement>
          <SubHeaderListElement>Our form is quick and simple to complete</SubHeaderListElement>
          </SubHeaderList>
        </SubHeader>
        <Main>
          <MainHeader>Applicant</MainHeader>
          <MainBody>
            <MainBodyHeader>Personal Details</MainBodyHeader>
            <Form>
              <FormElement>
                <FormElementText>Forname</FormElementText>
                <FormElementInput type="text" onChange={this.onChangeForname}></FormElementInput>
                <WarningForname id="warningForname">!</WarningForname>
              </FormElement>
              <FormElement>
                <FormElementText>Middle Name</FormElementText>
                <FormElementInput type="text"  onChange={this.onChangeMiddleName}></FormElementInput>
                <WarningMiddleName id="warningMiddleName">!</WarningMiddleName>
              </FormElement>
              <FormElement>
                <FormElementText>Surname</FormElementText>
                <FormElementInput type="text"  onChange={this.onChangeSurname}></FormElementInput>
                <WarningSurname id="warningSurname">!</WarningSurname>
              </FormElement>
              <FormElement>
                <FormElementText>Telephone</FormElementText>
                <FormElementInput type="number"  onChange={this.onChangeNumber}></FormElementInput>
                <WarningTel id="warningTel">!</WarningTel>
              </FormElement>
              <FormElement>
                <FormElementText>Email</FormElementText>
                <FormElementInput type="text"  onChange={this.onChangeMail}></FormElementInput>
                <WarningMail id="warningMail">!</WarningMail>
              </FormElement>
              <SubmitButton  onClick={()=>this.submit()}>Submit Application<Checked/></SubmitButton>
              <Sent id="sent">Application sent</Sent>
            </Form>
          </MainBody>
        </Main>
      </Container>
    );
  }
}