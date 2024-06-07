import { Button } from '../Button/Button'
import { Form } from '../Form/Form'
import './Post.css'

export const Post = () => {

  return (
    <div className="post">
      <Form />
      <div className="post__actions">
        <Button />
      </div>
    </div>
  )
}