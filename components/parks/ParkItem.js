const ParkItem = (props) =>{
  return (
    <li>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.image} alt={props.title}/>
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
    </li>
  );
};

export default ParkItem;