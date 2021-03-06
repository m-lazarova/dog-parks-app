import { useRef } from 'react';

import classes from './NewParkForm.module.css';

const NewParkForm = (props) => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const enclosedInputRef = useRef();
  const openspacedInputRef = useRef();
  const agilityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredEnclosed = enclosedInputRef.current.value;
    const enteredOpenSpaced = openspacedInputRef.current.value;
    const enteredAgility = agilityInputRef.current.value;

    const parkData = {
      name: enteredName,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      enclosed: enteredEnclosed,
      openSpaced: enteredOpenSpaced,
      agility: enteredAgility,
    };

    props.onAddPark(parkData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Park Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Park Image</label>
        <input type="text" required id="image" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input type="text" required id="description" ref={descriptionInputRef}  />
      </div>
      <div className={classes.checkbox}>
        <p>What kind of park is it?</p>
        <label htmlFor="enclosed">Enclosed</label>
        <input type="checkbox" id="enclosed" ref={enclosedInputRef}/>
        <label htmlFor="openspaced">Open Spaced</label>
        <input type="checkbox" id="openspaced" ref={openspacedInputRef}/>
        <label htmlFor="agility">Agility</label>
        <input type="checkbox" id="agility" ref={agilityInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Add a new park!</button>
      </div>
    </form>
  )
}

export default NewParkForm;