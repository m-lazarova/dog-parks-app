import classes from './ParkItem.module.css';

const ParkItem = (props) =>{
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.image} alt={props.name}/>
      </div>
      <div className={classes.description}>
        <h3>{props.name}</h3>
        <address>{props.address}</address>
      </div>
    </li>
  );
};

export default ParkItem;