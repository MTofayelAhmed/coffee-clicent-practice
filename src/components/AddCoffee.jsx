import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const AddCoffee = () => {



  const coffees = useLoaderData()
  const [newCoffees, setNewCoffees]= useState( coffees)
  console.log(coffees)
  return (
    <div className="m-15">
    <h2 className="text-center text-3xl text-red-600 font-bold mb-10">
        Coffee Cards
      </h2>
     <div className="grid md:grid-cols-2 gap-6">
      {newCoffees.map(coffee => <CoffeeCard key ={coffee._id} coffee={coffee} setNewCoffees={setNewCoffees} newCoffees={newCoffees} ></CoffeeCard>)}
     </div>
    </div>
  );
};

export default AddCoffee;