import Image from 'next/image'
import classes from './ParkItem.module.css';

const ParkItem = (props) =>{
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image src={props.image} alt={props.title}/>
      </div>
      <div className={classes.description}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
    </li>
  );
};

export default ParkItem;