import ParkItem from "./ParkItem";
import classes from './ParkList.module.css';
const ParkList = () => {

  const DUMMY_PARKS = [
    {
      id: 'p1', 
      image: 'https://s28489.pcdn.co/wp-content/uploads/2021/04/Dog-park-2-May-16.jpg.optimal.jpg', 
      name: 'Fun dog park', 
      address: 'Street 1, City, Post Code', 
      description: 'This is a very fun dog park', 
      enclosed: true, 
      openspaced: false,
      agility: true,
    },
    {
      id: 'p2', 
      image: 'https://i.imgur.com/DHfxUyW.jpg', 
      name: 'Great park for puppies', 
      address: 'Street 2, City 2, Some Post Code', 
      description: 'This is amazing for puppies',
      enclosed: true, 
      openspaced: false,
      agility: false, 
    }
  ]
  return (
    <ul className={classes.list}>
      {DUMMY_PARKS.map((park) => (
        <ParkItem 
        key={park.id}
        id={park.id}
        image={park.image}
        name={park.name}
        address={park.address}
        enclosed={park.enclosed}
        openspaced={park.openspaced}
        agility={park.agility}  />
      ))}
    </ul>
  );
};

export default ParkList;