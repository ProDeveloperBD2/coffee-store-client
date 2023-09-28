import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, teste, photo } = coffee;
    const handleDelete = _id => {
        console.log('Delete', _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2211/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="mt-14 card card-side w-[520px] h-[270px] bg-white shadow-xl">
            <figure><img className='w-80 h-full' src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 pl-3 mt-20">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold text-[#E3B577]'>Quantity:</span> {quantity}</p>
                    <p><span className='font-semibold text-[#E3B577]'>Supplier:</span> {supplier}</p>
                    <p><span className='font-semibold text-[#E3B577]'>Teste:</span> {teste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical -mt-6 space-y-4 w-16">
                        <button className="btn bg-[#E3B577] text-2xl text-white"><FaEye></FaEye></button>
                        <Link to={`/updateCoffee/${_id}`} className="btn text-white text-2xl"><FaPencilAlt></FaPencilAlt></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] text-white text-2xl"><FaTrash></FaTrash></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCards;