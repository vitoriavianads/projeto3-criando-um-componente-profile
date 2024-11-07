import styles from './style.module.css'

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img src={props.img} />
            <h1>{props.name}</h1>
            <hr />
            <p>{props.bio}</p>
            <hr />
            <p>{props.phone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
            <button><a href={props.githubUrl}>Github</a></button>
            
            <button><a href={props.instaUrl}>Instagram</a></button>
        </div>
    )
}