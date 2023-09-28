import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, teste, category, details, photo } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, teste, category, details, photo };
        console.log(updateCoffee)
        fetch(`http://localhost:2211/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Succees!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset()
            })
    }
    return (
        <div>
            <div className='w-[900px] mx-auto mt-10 bg-[#E3B577] p-10 mb-10'>
                <h2 className='text-4xl mb-5 text-center mt-5 text-white'><span className='font-semibold text-[#EA4744]'>UPDATE A COFFEE --</span> {name}</h2>
                <form onSubmit={handleUpdateCoffee}>
                    <div>
                        {/* form row 1 start */}
                        <div className='md:flex gap-14'>
                            <div className='w-1/2'>
                                <label>Name</label>
                                <br />
                                <input type="text" placeholder="Enter Coffee Name"
                                    name="name" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={name} />
                            </div>
                            <div className='w-1/2'>
                                <label>Available Quantity</label>
                                <br />
                                <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={quantity} />
                            </div>
                        </div>
                        {/* form row 1 end */}
                        {/* form row 2 start */}
                        <div className='md:flex gap-14'>
                            <div className='w-1/2'>
                                <label>Supplier</label>
                                <br />
                                <input type="text" placeholder="Enter Coffee Supplier" name="supplier" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={supplier} />
                            </div>
                            <div className='w-1/2'>
                                <label>Taste</label>
                                <br />
                                <input type="text" placeholder="Enter coffee taste" name="teste" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={teste} />
                            </div>
                        </div>
                        {/* form row 2 end */}
                        {/* form row 3 start */}
                        <div className='md:flex gap-14'>
                            <div className='w-1/2'>
                                <label>Category</label>
                                <br />
                                <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={category} />
                            </div>
                            <div className='w-1/2'>
                                <label>Details</label>
                                <br />
                                <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={details} />
                            </div>
                        </div>
                        {/* form row 3 end */}
                        {/* form row 4 start */}
                        <div className='mb-9'>
                            <div className='md:w-full w-1/2'>
                                <label>Photo URL</label>
                                <br />
                                <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered input-warning bg-gray-50 w-full" required defaultValue={photo} />
                            </div>
                        </div>
                        {/* form row 4 end */}
                        <input className='text-white btn md:btn-block' type="submit" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;