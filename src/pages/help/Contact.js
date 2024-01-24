export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact US</h3>
      <form action="">
        <label htmlFor="">
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="">
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
