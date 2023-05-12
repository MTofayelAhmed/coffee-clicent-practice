import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

  const coffeeUpdate = useLoaderData()
  const {  _id, name, chef, supplier, taste, category, details, photo } = coffeeUpdate
  console.log(coffeeUpdate)

  const handleUpdateCoffee= event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
  const update = {name, chef, supplier, taste, category, details, photo}
  console.log(update)
  fetch(`http://localhost:5000/coffees/${_id}`, {
    method: 'PUT',
    headers: {
      'content-type': "application/json"
    },
    body: JSON.stringify(update)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  
    if(data.modifiedCount ){
    Swal.fire({
      title: 'Success!',
      text: 'updated successfully Successfully',
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
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-4 ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                defaultValue={name}
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
                defaultValue={chef}
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
                defaultValue={supplier}
                
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
          </div>
          
        </div>
        
        <input  className="btn btn-block" type="submit" value="Update Coffee" />
      </form>
    </div>
  </div>
  );
};

export default UpdateCoffee;