/* organização do app */

import { useState } from 'react'
import "./global.css"


import styles from "./App.module.css"


import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'


// export componente 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Luisero.png",
      name: 'Teste',
      role: 'Web Developer'
    },
    content : [
      { type : 'paragraph', content : 'Fala Galera'},
      { type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type : 'link', content: 'jane.design/doctorcare'}
    ],
    publisheAd: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maryane-castro.png",
      name: 'Teste2',
      role: 'CT2O'
    },
    content : [
      { type : 'paragraph', content : 'Fala Galera'},
      { type : 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type : 'link', content: 'jane.design/doctorcare'}
    ],
    publisheAd: new Date('2022-05-13 20:00:00')
  },
]


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>
      <main>
        {posts.map(post => {
            return(
              <Post 
                author={post.author}
                content={post.content}
                publisheAd={post.publisheAd}
              />
            )
          })}
      </main>
        
      </div>

    </div>
  )
}

