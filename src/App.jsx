
import "./App.css";
import Swal from 'sweetalert2'

function App() {

const handleAddCoffee= event =>{
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const chef = form.chef.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
const newCoffee = {name, chef, supplier, taste, category, details, photo}
console.log(newCoffee)
fetch('http://localhost:5000/coffees', {
  method: 'POST',
  headers: {
    'content-type': "application/json"
  },
  body: JSON.stringify(newCoffee)
})
.then(res => res.json())
.then(data => {
  console.log(data)

  if(data.insertedId){
  Swal.fire({
    title: 'Success!',
    text: 'inserted Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
}


 
})
form.reset()
}



  return (
    <div className="m-20">
      <h1 className=" text-5xl text-orange-600 font-bold">Add Coffee</h1>
      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="md:flex gap-4 ">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  
                  className="input input-bordered w-full"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Chef Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Chef Name"
                  className="input input-bordered w-full"
                  name="chef"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 ">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Supplier"
                  
                  className="input input-bordered w-full"
                  name="supplier"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                  name="taste"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 ">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  
                  className="input input-bordered w-full"
                  name="category"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full"
                  name="details"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 mb-10 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo"
                  
                  className="input input-bordered w-full"
                  name="photo"
                />
              </label>
            </div>
            
          </div>
          
          <input  className="btn btn-block" type="submit" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
}

export default App;
