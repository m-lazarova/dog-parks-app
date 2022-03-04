const NewParkForm = () => {
  return (
    <form>
      <div>
        <label>Park Name</label>
        <input type="text" required id="name" />
      </div>
      <div>
        <label>Park Image</label>
        <input type="text" required id="image" />
      </div>
      <div>
        <label>Address</label>
        <input type="text" required id="address" />
      </div>
      <div>
        <label>Description</label>
        <input type="text" required id="description" />
      </div>
      <div>
        <button>Add a new park!</button>
      </div>
    </form>
  )
}

export default NewParkForm;