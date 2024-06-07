import { Post } from '../Post/Post';
import { Timeline } from '../Timeline/Timeline';
import './Main.css';

export const Main = () => {

  return (
    <main className="main">
      <h1 className="page-title">Cvrlikání</h1>

      <Post />

      <Timeline />
    </main>
  )
}