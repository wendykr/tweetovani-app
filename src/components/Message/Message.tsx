
import './Message.css'
import MessageStructure from '../../model/message';


interface MessageProsp {
  messagesData: MessageStructure[];
  onClickLike: (messageId: number) => void;
  onClickBookmark: (messageId: number) => void;
  onClickDelete: (messageId: number) => void;
}

export const Message = ({messagesData, onClickLike, onClickBookmark, onClickDelete}: MessageProsp) => {
  // const [messagesData, setMessagesData] = useState<MessageStructure[]>([]);

  // useEffect(() => {
  //   setMessagesData(messages);
  // }, []);



  return (
    <>
      {
        messagesData.map(message => 
          <article className="message" key={message.id}>
            <div className="message__avatar">
              <img src={message.avatar} alt="" />
            </div>
            <div className="message__content">
              <header className="message__header">
                <span className="message__name">{message.name}</span>
                <span className="message__handle">{message.handle}</span>
                <span className="message__time">{message.time}</span>
              </header>
              <div className="message__text">
                {message.text}
              </div>
              <footer className="message__footer">
                <button className="icon-button icon-button--red" onClick={() => onClickLike(message.id)}>
                  <span className="icon-button__icon"><img src="icons/heart.svg" alt="Miluju to" /></span>
                  {message.like}
                </button>
                <button className="icon-button icon-button--blue" onClick={() => onClickBookmark(message.id)}>
                  <span className="icon-button__icon"><img src={message.bookmark ? 'icons/bookmark-active.svg' : 'icons/bookmark.svg'} alt={message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'} /></span>
                    {message.bookmark ? 'Odebrat ze záložek' : 'Přidat do záložek'}
                </button>
                <button className="icon-button icon-button--red" onClick={() => onClickDelete(message.id)}>
                  <span className="icon-button__icon"><img src="icons/trash.svg" alt="Smazat zprávu" /></span>
                  Smazat zprávu
                </button>
              </footer>
            </div>
          </article>
        )
      }
    </>
  )
}