import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'http://github.com/inezcalazans.png',
        name: 'Inez Calazans',
        role: 'Aspirante a web developer',
      },
      content: [
        { type: 'paragraph', content: 'Olá!' },
        { type: 'paragraph', content: '👍Este é meu primeiro projeto reactjs.'},
        { type: 'paragraph', content: 'Tenho certeza que virão muitos pela frente!'},
      ],
      //publishedAt: new Date('2024-21-10 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'http://github.com/folfer.png',
        name: 'Victor Calazans',
        role: 'Web developer e CEO Innovats',
      },
      content: [
        { type: 'paragraph', content: 'E aí, blz!' },
        { type: 'paragraph', content: 'Hj o dia foi manso!' },
      ],
      //publishedAt: new Date('2024-21-10 21:30:00'),
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
