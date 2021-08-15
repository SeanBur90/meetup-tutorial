import classes from "./MeetupItem.module.css";
import pic from "./download.jpeg";
import pic2 from "./downloadd.jpeg";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favoites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
