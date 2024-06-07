import './Form.css';

export const Form = () => {

  return (
    <form className="post__form">
      <textarea
        name="post-message"
        id="post-message"
        rows={4}
        className="post__message"
        placeholder="Řekni, co se děje?">
      </textarea>
    </form>
  )
}