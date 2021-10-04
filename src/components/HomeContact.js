import React, { useState } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const HomeContact = () => {
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
        setUser([])
        //setUser("")
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
            alert("Please fill all the blanks")
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
                                    <li><input onClick={formClear} type="reset" value="Clear" className="animate__zoomIn animate__animated"/></li>
                                </ul>
                            </form>
                        </section>
                        <section className="split">
                            <section>
                                <div className="contact-method">
                                    {/* <span className="icon solid alt fa-envelope-square"></span> */}
                                    <i className="footericon fa fa-envelope"></i>
                                    <h3 className="animate__animated animate__fadeInUp">Email</h3>
                                    <a href="mailto:hardik.devani@aureatelabs.com" className="animate__animated animate__slideInDown" style={{borderBottom:'none'}}>hardik.devani@aureatelabs.com</a>
                                </div>
                            </section>
                            <section>
                                <div className="contact-method">
                                    {/* <span className="icon brands alt fa-phone"></span> */}
                                    <i className="footericon fa fa-phone"></i>
                                    <h3 className="animate__animated animate__fadeInUp">Phone</h3>
                                    <span className="animate__animated animate__slideInDown"><a href="tel:+919825457037" style={{borderBottom:'none'}}>(+91) 982-245-7037</a></span>
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
                </section></div>
        </>
    )
}

export default HomeContact
