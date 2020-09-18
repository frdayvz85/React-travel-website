import React from 'react';
import './css/Contact.css';

const Contact = () => {

    const sendMesaje = (e) => {
        e.preventDefault()
    }
    return (
        <div className="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-container">
            <form className="contact-us" onSubmit={sendMesaje}>
                <div className="input-area">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="surnname">Surname</label>
                    <input type="text" placeholder="Surname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" />
                </div>
                </div>
                <div className="textarea">
                <div className="form-group">
                    <label htmlFor="mesaje">Mesaje</label>
                    <textarea name="mesaje" id="mesaje" cols="30" rows="15" placeholder="Mesaje"></textarea>
                </div>

                <button className="send-mesaje">
                    Send Mesaje
                </button>
                </div>

            </form>
            </div>
        </div>
    )
}

export default Contact
