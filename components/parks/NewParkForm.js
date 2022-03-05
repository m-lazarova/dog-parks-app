const NewParkForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Park Name</label>
        <input type="text" required id="name" />
      </div>
      <div>
        <label htmlFor="image">Park Image</label>
        <input type="text" required id="image" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" required id="description" />
      </div>
      <div>
        <p>What kind of park is it?</p>
        <label htmlFor="enclosed">Enclosed</label>
        <input type="checkbox" id="enclosed"/>
        <label htmlFor="openspaced">Open Spaced</label>
        <input type="checkbox" id="openspaced" />
        <label htmlFor="agility">Agility</label>
        <input type="checkbox" id="agility" />
      </div>
      <div>
        <button>Add a new park!</button>
      </div>
    </form>
  )
}

export default NewParkForm;