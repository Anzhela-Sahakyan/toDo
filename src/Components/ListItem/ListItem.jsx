import styles from './List.module.css'

function ListItem(props){
    return (
        <li className = {styles.ListItem}>{props.item}</li>
    )
}

export default ListItem