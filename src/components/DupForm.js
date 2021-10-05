import React, { useState } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const DupForm = () => {
    //const [fields, setFields] = useState({})
    const [errors, seterrors] = useState({})



    const [user, setUser] = useState({
        txtName: '',
        txtEmail: '',
        txtMessage: ''
    });

    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const formClear = () => {
        setUser({})
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const { txtName, txtEmail, txtMessage } = user
        if (txtName && txtEmail && txtMessage) {
            const res = await fetch("https://react-form-234a8-default-rtdb.firebaseio.com/aureatedb.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    txtName,
                    txtEmail,
                    txtMessage
                })
            })

            if (res) {
                setUser({
                    txtName: '',
                    txtEmail: '',
                    txtMessage: ''
                });
                alert("Data Stored Successfully")
            }
        } else {
            //alert("Please fill all the blanks")
            if (!txtName) {
                errors["txtName"] = "*Please enter your Name.";
            }

            if (typeof txtName !== "undefined") {
                if (!txtName.match(/^[a-zA-Z ]*$/)) {
                    errors["txtName"] = "*Please enter alphabet characters only.";
                }
            }

            if (!txtEmail) {
                errors["txtEmail"] = "*Please enter your email-ID.";
            }

            if (typeof txtEmail !== "undefined") {
                //regular expression for email validation
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(txtEmail)) {
                    errors["txtEmail"] = "*Please enter valid email-ID.";
                }
            }

            if (!txtMessage) {
                errors["txtMessage"] = "*Please enter your Message.";
            }
        }
    }

    return (
        <>
            <div id="wrapper">
                <section id="contact">
                    <div className="inner">
                        <section>
                            <form method="post" action="#">
                                <div className="fields">
                                    <div className="field half">
                                        <label className="animate__animated animate__fadeInUp" for="name">Name</label>
                                        <input type="text" name="name" id="name" onChange={getUserData} value={user.txtName} name="txtName" />
                                        <div className="errorMsg">{errors.txtName}</div>
                                    </div>
                                    <div className="field half">
                                        <label className="animate__animated animate__fadeInUp" for="email">Email</label>
                                        <input type="text" name="email" id="email" onChange={getUserData} value={user.txtEmail} name="txtEmail" />
                                    </div>
                                    <div className="field">
                                        <label className="animate__animated animate__fadeInUp" for="message">Message</label>
                                        <textarea name="message" id="message" rows="6" onChange={getUserData} value={user.txtMessage} name="txtMessage"></textarea>
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li><input onClick={onSubmit} type="submit" value="Send Message" className="primary animate__zoomIn animate__animated" /></li>
                                    <li><input onClick={formClear} type="reset" value="Clear" className="animate__zoomIn animate__animated" /></li>
                                </ul>
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
        </>
    )
}

export default DupForm
