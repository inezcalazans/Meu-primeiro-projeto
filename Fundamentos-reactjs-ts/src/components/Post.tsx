//import PropTypes from 'prop-types';
import { useState, ChangeEvent, FormEvent, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR }  from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string
    },
    content: {
        type: 'paragraph' | 'link';
        content: string
    }[],
    publishedAt: Date
}
    
export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
        'Notícia legal! Show!'
    ])
    
    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Por favor, preencha este campo');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }
    
    const isNewCommentEmpty = newCommentText.length === 0;
        
    
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                   
                <Avatar src={author.avatarUrl} />
                    
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time
    title={publishedDateFormatted}
    dateTime={publishedAt ? publishedAt.toISOString() : undefined}>
    {publishedDateRelativeToNow}
</time>

        </header>

        <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>;
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback!</strong>

            <textarea
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
            />

            <footer>
                <button type="submit" disabled={isNewCommentEmpty}>
                    Publicar
                </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>
    </article>
);
}

//Para validar as props
/*Post.propTypes = {
    author: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
    publishedAt: PropTypes.instanceOf(Date),
    content: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};
*/