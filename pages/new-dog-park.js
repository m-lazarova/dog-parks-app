import NewParkForm from "../components/parks/NewParkForm";
const NewDogPark = () => {

  const addParkHandler = () => {
    console.log('Adding some parks');
  };
  
  return <NewParkForm onAddPark={addParkHandler}/>
}

export default NewDogPark;