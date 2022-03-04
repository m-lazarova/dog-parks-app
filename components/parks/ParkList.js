import ParkItem from "./ParkItem";
import classes from './ParkList.module.css';
const ParkList = () => {

  const DUMMY_PARKS = [
    {id: 'p1', image: 'https://s28489.pcdn.co/wp-content/uploads/2021/04/Dog-park-2-May-16.jpg.optimal.jpg', title: 'Fun dog park', address: 'Street 1, City, Post Code', description: 'This is a very fun dog park'},
    {id: 'p2', image: 'https://i.imgur.com/DHfxUyW.jpg', title: 'Great park for puppies', address: 'Street 2, City 2, Some Post Code', description: 'This is amazing for puppies'}
  ]
  return (
    <ul className={classes.list}>
      {DUMMY_PARKS.map((park) => (
        <ParkItem 
        key={park.id}
        id={park.id}
        image={park.image}
        title={park.title}
        address={park.address}/>
      ))}
    </ul>
  );
};

export default ParkList;