import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  padding-top:16px;
  padding-bottom:16px;
`;

const Name = styled.input`
  margin-bottom:8px;
  border-radius:4px;
  border:none;
  padding:4px;
  width:100%;
`;

const Tel = styled.input`
  margin-bottom:8px;
  border-radius:4px;
  border:none;
  width:100%;
  padding:4px;
`;

const Email = styled.input`
  margin-bottom:8px;
  border-radius:4px;
  border:none;
  width:100%;
  padding:4px;
`;

const Enquiry = styled.textarea`
  margin-bottom:8px;
  border-radius:4px;
  width:100%;
  border:none;
  padding:4px;
`;

const Send = styled.button`
  padding-top:8px;
  padding-bottom:8px;
  background-color:#ec6b0c;
  color:white;
  border-radius:4px;
  border:none;
  cursor: pointer;
`;

const WarningName = styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const WarningTel = styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const WarningMail = styled.div`
  color:red;
  font-size:1.2rem;
  display:none;
  font-weight:900;
`;

const FormElement = styled.div`
  display:flex;
  margin-bottom:16px;
`;

const Sent = styled.div`
  display:none;
`;
/**
 * "ContactForm" component includes of name, mail, address inputs and submitting them.
 */
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validMail: false,
      validNumber: false,
      validName: false,
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  /**
 * Veryfing telephone number, value can't be empty and must be matched with regex.
 *    @param   {number} e.target.value inputted telephone number
 */
  onChangeTel(e) {
    const { value } = e.target;
    const numbers = /^[0-9]+$/;
    if (value !== '' && value.match(numbers)) {
      document.getElementById('warningTel').style.display = 'none';
      this.setState({ validNumber: true });
    } else {
      document.getElementById('warningTel').style.display = 'block';
      this.setState({ validNumber: false });
    }
  }

  /**
 * Veryfing name, value can't be empty and must be matched with regex.
 *  @param   {string} e.target.value inputted name
 */
  onChangeName(e) {
    const { value } = e.target;
    const letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
      document.getElementById('warningName').style.display = 'none';
      this.setState({ validName: true });
    } else {
      document.getElementById('warningName').style.display = 'block';
      this.setState({ validName: false });
    }
  }

  /**
   * Veryfing mail, value can't be empty and must be matched with regex.
   *  @param {string} e.target.value inputted mail
   */
  onChangeMail(e) {
    const { value } = e.target;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(value).toLowerCase())) {
      document.getElementById('warningMail').style.display = 'none';
      this.setState({ validMail: true });
    } else {
      document.getElementById('warningMail').style.display = 'block';
      this.setState({ validMail: false });
    }
  }

  /**
   * On submit data are validated, check if mail,
   * number and namer are OK. If data is valid, element "sent" is displayed.
   */
  submit() {
    if (this.state.validMail === true && this.state.validNumber === true && this.state.validName === true) {
      this.setState({ validSubmit: true }, () => this.afterSubmit());
      document.getElementById('sent').style.display = 'block';
    } else {
      this.setState({ validSubmit: false }, () => this.afterSubmit());
    }
  }

  afterSubmit() {
    if (this.state.validSubmit) {
      document.getElementById('sent').style.display = 'block';
    } else {
      document.getElementById('sent').style.display = 'none';
    }
  }

  render() {
    return (
      <Container>
        <FormElement>
          <Name placeholder="Your Name" type="text" onChange={this.onChangeName} />
          <WarningName id="warningName">!</WarningName>
        </FormElement>
        <FormElement>
          <Tel placeholder="Your telephone number" type="number" onChange={this.onChangeTel} />
          <WarningTel id="warningTel">!</WarningTel>
        </FormElement>
        <FormElement>
          <Email placeholder="Your email adress" type="text" onChange={this.onChangeMail} />
          <WarningMail id="warningMail">!</WarningMail>
        </FormElement>
        <FormElement>
          <Enquiry placeholder="Message" />
        </FormElement>
        <Send onClick={this.submit}>Send</Send>
        <Sent id="sent">Request sent</Sent>
      </Container>
    );
  }
}
export default ContactForm;
