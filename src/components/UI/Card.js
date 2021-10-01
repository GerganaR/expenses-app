import './Card.css';

const Card = (props) => {
    //to be able to put classes on the card component
    const classes = 'card ' + props.className;
    return(
        
        <div className={classes}>{props.children}</div>
    );
}

  export default Card;