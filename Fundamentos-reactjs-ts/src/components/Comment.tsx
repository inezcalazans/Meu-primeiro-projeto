//import PropTypes from 'prop-types';
import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}
    
export function Comment({ content, onDeleteComment }: CommentProps) {
    const[likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
    
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="http://github.com/folfer.png"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTimeHeader}>
                            <strong>Victor Calazans</strong>
                            <time title="18 de Outubro às 21:50h" dateTime="2024-18-10T21:50:40">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}

//Para validar as props
/*Comment.propTypes = {
    content: PropTypes.string.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
};*/