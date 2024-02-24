import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';






export function Post({ author, content, publisheAd}) {

  const [comments, setComments] = useState([
    1,
    2,
  ]
  )



  const publishedDateFormatted = format(publisheAd, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publisheAd, {
    locale: ptBR,
    addSuffix: true
  });



  function handleCreateNewComment(event){
    event.preventDefault()
    setComments([...comments, comments.length + 1])
  }



  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar hasBorder src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publisheAd.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line=>{
          if (line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if(line.type === 'link'){
            return <p><a href="#">{line.content}</a></p>

          }
        })}


      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
            return (
              <Comment 
              />
            )
          })}
      </div>

    </article>
  )
}