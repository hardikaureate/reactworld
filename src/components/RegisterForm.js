import React from 'react';
import '../assets/CSS/Cform.css';


class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
      let fields = {};
      fields["txtName"] = "";
      fields["txtEmail"] = "";
      fields["txtMessage"] = "";
      // fields["mobileno"] = "";
      // fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["txtName"]) {
      formIsValid = false;
      errors["txtName"] = "*Please enter your Name.";
    }

    if (typeof fields["txtName"] !== "undefined") {
      if (!fields["txtName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["txtName"] = "*Please enter alphabet characters only.";
      }
    }


    if (!fields["txtMessage"]) {
      formIsValid = false;
      errors["txtMessage"] = "*Please enter your Message.";
    }


    if (!fields["txtEmail"]) {
      formIsValid = false;
      errors["txtEmail"] = "*Please enter your email-ID.";
    }

    if (typeof fields["txtEmail"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["txtEmail"])) {
        formIsValid = false;
        errors["txtEmail"] = "*Please enter valid email-ID.";
      }
    }

    /*if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }*/

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    return (
      <>
      {/* <div id="main-registration-container">
        <div id="register">
          <h3>Registration page</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label>Name</label>
            <input type="text" name="txtName" value={this.state.fields.txtName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.txtName}</div>
            <label>Email ID:</label>
            <input type="text" name="txtEmail" value={this.state.fields.txtEmail} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.txtEmail}</div>
            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div> */}
      <div id="wrapper">
                <section id="contact">
                    <div className="inner">
                        <section>
                            <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
                                <div className="fields">
                                    <div className="field half">
                                        <label className="animate__animated animate__fadeInUp" for="name">Name</label>
                                        <input type="text" name="txtName" onChange={this.handleChange} value={this.state.fields.txtName} />
                                        <div className="errorMsg">{this.state.errors.txtName}</div>
                                    </div>
                                    <div className="field half">
                                        <label className="animate__animated animate__fadeInUp" for="email">Email</label>
                                        <input type="text" name="txtEmail" onChange={this.handleChange} value={this.state.fields.txtEmail} name="txtEmail" />
                                        <div className="errorMsg">{this.state.errors.txtEmail}</div>
                                    </div>
                                    <div className="field">
                                        <label className="animate__animated animate__fadeInUp" for="message">Message</label>
                                        <textarea name="txtMessage" rows="6" onChange={this.handleChange} value={this.state.fields.txtMessage}></textarea>
                                        <div className="errorMsg">{this.state.errors.txtMessage}</div>
                                    </div>
                                </div>
                                <ul className="actions">
                                    {/* <li><input onClick={onSubmit} type="submit" value="Send Message" className="primary animate__zoomIn animate__animated" /></li>
                                    <li><input onClick={formClear} type="reset" value="Clear" className="animate__zoomIn animate__animated" /></li> */}
                                    <li><input type="submit" value="Send Message" className="primary animate__zoomIn animate__animated" /></li>
                                    
                                </ul>
                            </form>
                        </section>
                        <section className="split">
                            <section>
                                <div className="contact-method">
                                    {/* <span className="icon solid alt fa-envelope-square"></span> */}
                                    <i className="footericon fa fa-envelope"></i>
                                    <h3 className="animate__animated animate__fadeInUp">Email</h3>
                                    <a href="mailto:hardik.devani@aureatelabs.com" className="animate__animated animate__slideInDown" style={{ borderBottom: 'none' }}>hardik.devani@aureatelabs.com</a>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    {/* <span className="icon brands alt fa-phone"></span> */}
                                    <i className="footericon fa fa-phone"></i>
                                    <h3 className="animate__animated animate__fadeInUp">Phone</h3>
                                    <span className="animate__animated animate__slideInDown"><a href="tel:+919825457037" style={{ borderBottom: 'none' }}>(+91) 982-245-7037</a></span>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    {/* <span className="icon brands alt fa-home"></span> */}
                                    <i className="footericon fa fa-home"></i>
                                    <h3 className="animate__animated animate__fadeInUp">Address</h3>
                                    <span className="animate__animated animate__slideInDown">Office No. B-206, International Commerce Centre, Nr. Kadiwala School, Ring Road, Surat, Gujarat 395002</span>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </div>
      </>

    );
  }


}


export default RegisterForm;