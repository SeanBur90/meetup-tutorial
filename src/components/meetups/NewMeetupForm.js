import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label> Meetup Title</label>
          <input type="text" required id="title" />
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
