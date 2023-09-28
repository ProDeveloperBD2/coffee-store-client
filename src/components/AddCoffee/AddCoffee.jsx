import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, teste, category, details, photo };
        console.log(newCoffee)
        fetch('http://localhost:2211/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Succees!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset()
            })
    }
    return (
        <div className='w-[900px] mx-auto mt-10 bg-[#E3B577] p-10 mb-10'>
            <h1 className='text-4xl font-extrabold text-center mb-4 text-war'>Add New Coffee</h1>
            <p className='text-center mb-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                <div>
                    {/* form row 1 start */}
                    <div className='md:flex gap-14'>
                        <div className='w-1/2'>
                            <label>Name</label>
                            <br />
                            <input type="text" placeholder="Enter Coffee Name"
                                name="name" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                        <div className='w-1/2'>
                            <label>Available Quantity</label>
                            <br />
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                    </div>
                    {/* form row 1 end */}
                    {/* form row 2 start */}
                    <div className='md:flex gap-14'>
                        <div className='w-1/2'>
                            <label>Supplier</label>
                            <br />
                            <input type="text" placeholder="Enter Coffee Supplier" name="supplier" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                        <div className='w-1/2'>
                            <label>Taste</label>
                            <br />
                            <input type="text" placeholder="Enter coffee taste" name="teste" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                    </div>
                    {/* form row 2 end */}
                    {/* form row 3 start */}
                    <div className='md:flex gap-14'>
                        <div className='w-1/2'>
                            <label>Category</label>
                            <br />
                            <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                        <div className='w-1/2'>
                            <label>Details</label>
                            <br />
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                    </div>
                    {/* form row 3 end */}
                    {/* form row 4 start */}
                    <div className='mb-9'>
                        <div className='md:w-full w-1/2'>
                            <label>Photo URL</label>
                            <br />
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered input-warning bg-gray-50 w-full" required />
                        </div>
                    </div>
                    {/* form row 4 end */}
                    <input className='text-white btn md:btn-block' type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;