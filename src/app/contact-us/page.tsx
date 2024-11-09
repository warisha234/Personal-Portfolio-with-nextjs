export default function Contact() {
    return (
        <div className="contact-section">
    <div className="contact-form-container">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form">
            <label className="contact-label" htmlFor="name">Name:</label>
            <input className="contact-input" type="text" id="name" name="name" />
            <label className="contact-label" htmlFor="email">Email:</label>
            <input className="contact-input" type="email" id="email" name="email" />
            <label className="contact-label" htmlFor="message">Message:</label>
            <textarea className="contact-textarea" id="message" name="message"></textarea>
            <input className="contact-submit" type="submit" value="Submit" />
        </form>
    </div>
</div>
    )
}