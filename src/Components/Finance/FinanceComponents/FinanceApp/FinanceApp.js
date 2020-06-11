import React, { Component } from "react";
import LogoSrc from "../../../../Assets/Images/Logo.png";
import {
  Container,
  Header,
  SubHeader,
  Welcome,
  Form,
  SubHeaderParagraph,
  StyledLink,
  Logo,
  SubHeaderList,
  SubHeaderListElement,
  FormElement,
  FormElementText,
  FormElementInput,
  Main,
  MainHeader,
  MainBodyHeader,
  MainBody,
  SubmitButton,
  Checked,
  WarningForname,
  WarningSurname,
  WarningMiddleName,
  WarningMail,
  Sent,
  WarningTel,
} from "./FinanceAppStyle";

/**
 * "FinanceApp" component
 */
class FinanceApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validForname: false,
      validMiddleName: false,
      validNumber: false,
      validMail: false,
    };
    this.submit = this.submit.bind(this);
    this.onChangeForname = this.onChangeForname.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
  }

  /**
   * Veryfing name, value can't be empty and must be matched with regex.
   *  @param   {string} e.target.value inputted name
   */
  onChangeForname(e) {
    const { value } = e.target;
    const letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
      document.getElementById("warningForname").style.display = "none";
      this.setState({ validForname: true });
    } else {
      document.getElementById("warningForname").style.display = "block";
      this.setState({ validForname: false });
    }
  }

  /**
   * Veryfing name, value can't be empty and must be matched with regex.
   *  @param   {string} e.target.value inputted name
   */
  onChangeMiddleName(e) {
    const { value } = e.target;
    const letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
      document.getElementById("warningMiddleName").style.display = "none";
      this.setState({ validMiddleName: true });
    } else {
      document.getElementById("warningMiddleName").style.display = "block";
      this.setState({ validMiddleName: false });
    }
  }

  /**
   * Veryfing name, value can't be empty and must be matched with regex.
   *  @param   {string} e.target.value inputted name
   */
  onChangeSurname(e) {
    const { value } = e.target;
    const letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
      document.getElementById("warningSurname").style.display = "none";
      this.setState({ validSurname: true });
    } else {
      document.getElementById("warningSurname").style.display = "block";
      this.setState({ validSurname: false });
    }
  }

  /**
   * Veryfing number, value can't be empty and must be matched with regex.
   *  @param {number} e.target.value inputted number
   */
  onChangeNumber(e) {
    const { value } = e.target;
    const numbers = /^[0-9]+$/;
    if (value !== "" && value.match(numbers)) {
      document.getElementById("warningTel").style.display = "none";
      this.setState({ validNumber: true });
    } else {
      document.getElementById("warningTel").style.display = "block";
      this.setState({ validNumber: false });
    }
  }

  /**
   * Veryfing mail, value can't be empty and must be matched with regex.
   *  @param {string} e.target.value inputted mail
   */
  onChangeMail(e) {
    const { value } = e.target;
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(value).toLowerCase())) {
      document.getElementById("warningMail").style.display = "none";
      this.setState({ validMail: true });
    } else {
      document.getElementById("warningMail").style.display = "block";
      this.setState({ validMail: false });
    }
  }

  /**
   * On submit data are checked (adequate states must be true), if OK =>"sent" element is displayed.
   */
  submit() {
    // eslint-disable-next-line max-len
    if (
      this.state.validMail === true &&
      this.state.validForname === true &&
      this.state.validMiddleName === true &&
      this.state.validNumber === true &&
      this.state.validSurname === true
    ) {
      document.getElementById("sent").style.display = "block";
    } else {
      document.getElementById("sent").style.display = "none";
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <StyledLink to="/Lux-cars">
            <Logo src={LogoSrc} />
          </StyledLink>
        </Header>
        <SubHeader>
          <Welcome>Welcome</Welcome>
          <SubHeaderParagraph>
            By fully completing this finance application we will be able to
            quickly and accurately get&nbsp; back to you with a decision.
          </SubHeaderParagraph>
          <SubHeaderParagraph>You can be assured that:</SubHeaderParagraph>
          <SubHeaderList>
            <SubHeaderListElement>
              There is no obligation to purchase anything
            </SubHeaderListElement>
            <SubHeaderListElement>
              It’s a safe and secure process
            </SubHeaderListElement>
            <SubHeaderListElement>
              Our form is quick and simple to complete
            </SubHeaderListElement>
          </SubHeaderList>
        </SubHeader>
        <Main>
          <MainHeader>Applicant</MainHeader>
          <MainBody>
            <MainBodyHeader>Personal Details</MainBodyHeader>
            <Form>
              <FormElement>
                <FormElementText>Forname</FormElementText>
                <FormElementInput type="text" onChange={this.onChangeForname} />
                <WarningForname id="warningForname">!</WarningForname>
              </FormElement>
              <FormElement>
                <FormElementText>Middle Name</FormElementText>
                <FormElementInput
                  type="text"
                  onChange={this.onChangeMiddleName}
                />
                <WarningMiddleName id="warningMiddleName">!</WarningMiddleName>
              </FormElement>
              <FormElement>
                <FormElementText>Surname</FormElementText>
                <FormElementInput type="text" onChange={this.onChangeSurname} />
                <WarningSurname id="warningSurname">!</WarningSurname>
              </FormElement>
              <FormElement>
                <FormElementText>Telephone</FormElementText>
                <FormElementInput
                  type="number"
                  onChange={this.onChangeNumber}
                />
                <WarningTel id="warningTel">!</WarningTel>
              </FormElement>
              <FormElement>
                <FormElementText>Email</FormElementText>
                <FormElementInput type="text" onChange={this.onChangeMail} />
                <WarningMail id="warningMail">!</WarningMail>
              </FormElement>
              <SubmitButton onClick={this.submit}>
                Submit Application
                <Checked />
              </SubmitButton>
              <Sent id="sent">Application sent</Sent>
            </Form>
          </MainBody>
        </Main>
      </Container>
    );
  }
}
export default FinanceApp;
