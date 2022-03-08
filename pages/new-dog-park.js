import Router, { useRouter } from 'next/router';
import NewParkForm from "../components/parks/NewParkForm";
function NewDogPark(){
  async function addParkHandler(enteredParkData)  {
    const response = await fetch('/api/new-dog-park', {
      method: 'POST',
      body: JSON.stringify(enteredParkData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }); 
    

    const data = await response.json();
    console.log(data);

    Router.replace('/');
  };
  
  return <NewParkForm onAddPark={addParkHandler}/>
}

export default NewDogPark;