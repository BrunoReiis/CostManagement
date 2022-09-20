import "./Card.css";

// Colocando CSS juntos

const Card = (props) => {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;