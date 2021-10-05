import React, { useState } from "react";

const DupForm = () => {
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const formClear = () => {
        setFields([]);
    };

    const onSubmit = (e) => {
        console.log(validateForm());

        e.preventDefault();
        if (validateForm()) {
            let resetForm = {};
            setFields(resetForm);
            alert("Form submitted");
        }
    };

    const validateForm = () => {
        let errorsObj = {};
        let formIsValid = true;

        if (!fields["txtName"]) {
            formIsValid = false;
            errorsObj["txtName"] = "*Please enter your Name.";
        }

        if (typeof fields["txtName"] !== "undefined") {
            if (!fields["txtName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errorsObj["txtName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["txtEmail"]) {
            formIsValid = false;
            errorsObj["txtEmail"] = "*Please enter your email-ID.";
        }

        if (typeof fields["txtEmail"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(fields["txtEmail"])) {
                formIsValid = false;
                errorsObj["txtEmail"] = "*Please enter valid email-ID.";
            }
        }

        /*if (!fields['mobileno']) {
                formIsValid = false
                errorsObj['mobileno'] = '*Please enter your mobile no.'
            }
    
            if (typeof fields['mobileno'] !== 'undefined') {
                if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
                    formIsValid = false
                    errorsObj['mobileno'] = '*Please enter valid mobile no.'
                }
            }
    
            if (!fields['password']) {
                formIsValid = false
                errorsObj['password'] = '*Please enter your password.'
            }
    
            if (typeof fields['password'] !== 'undefined') {
                if (
                    !fields['password'].match(
                        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
                    )
                ) {
                    formIsValid = false
                    errorsObj['password'] = '*Please enter secure and strong password.'
                }
            }*/

        //console.log(errorsObj)

        if (errorsObj) {
            setErrors({ ...errorsObj });
        }
        return formIsValid;
    };

    return (
        <div id="wrapper">
            <section id="contact">
                <div className="inner">
                    <section>
                        <form method="post" name="userRegistrationForm" onSubmit={onSubmit}>
                            <div className="fields">
                                <div className="field half">
                                    <label className="animate__animated animate__fadeInUp" for="name">Name</label>
                                    <input type="text" name="txtName" value={fields.txtName} onChange={handleChange} />
                                    <div className="errorMsg">{errors?.txtName}</div>
                                </div>
                                <div className="field half">
                                    <label className="animate__animated animate__fadeInUp" for="email">Email</label>
                                    <input type="text" name="txtEmail" value={fields.txtEmail} onChange={handleChange} />
                                    <div className="errorMsg">{errors?.txtEmail}</div>
                                </div>
                                <div className="field">
                                    <label className="animate__animated animate__fadeInUp" for="message">Message</label>
                                    <textarea name="message" id="message" rows="6" onChange={handleChange} value={fields.txtMessage} name="txtMessage"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary animate__zoomIn animate__animated" /></li>
                                <li><input onClick={formClear} type="reset" value="Clear" className="animate__zoomIn animate__animated" /></li>
                            </ul>
                            {/* 
                                <div className="field">
                                    <label className="animate__animated animate__fadeInUp" for="message">Mobile No</label>
                                    <input type="text" name="mobileno" value={fields.mobileno} onChange={handleChange} />
                                    <div className="errorMsg">{errors?.mobileno}</div>
                                </div>
                                <div className="field">
                                    <label className="animate__animated animate__fadeInUp" for="message">Password</label>
                                    <input type="password" name="password" value={fields.password} onChange={handleChange} />
                                    <div className="errorMsg">{errors?.password}</div>
                                </div> 
                            */}
                        </form>
                    </section>
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                {/* <span className="icon solid alt fa-envelope-square"></span> */}
                                <i className="footericon fa fa-envelope"></i>
                                <h3 className="animate__animated animate__fadeInUp">Email</h3>
                                <a target="_blank" href="mailto:&#104;&#097;&#114;&#100;&#105;&#107;&#046;&#100;&#101;&#118;&#097;&#110;&#105;&#064;&#097;&#117;&#114;&#101;&#097;&#116;&#101;&#108;&#097;&#098;&#115;&#046;&#099;&#111;&#109;" className="animate__animated animate__slideInDown" style={{ borderBottom: 'none' }}>&#104;&#097;&#114;&#100;&#105;&#107;&#046;&#100;&#101;&#118;&#097;&#110;&#105;&#064;&#097;&#117;&#114;&#101;&#097;&#116;&#101;&#108;&#097;&#098;&#115;&#046;&#099;&#111;&#109;</a>
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
    );
};

export default DupForm;
