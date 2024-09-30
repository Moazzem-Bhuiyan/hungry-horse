import SectionTitle from '../../../component/sectiontitle/SectionTitle';
import useHooks from '../../../hooks/useHooks';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiossecure';
import { Link } from 'react-router-dom';

const MannageItem = () => {
    const [menu, isLoading, refetch] = useHooks(); // Make sure to destructure refetch here
    const axiosSecure = useAxiosSecure();

    const handledelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch(); // This should work now to refetch the updated menu
                    Swal.fire('Deleted!', 'Your item has been deleted.', 'success'); // Changed alert to Swal for consistency
                }
            }
        });
    }

    if (isLoading) return <div>Loading...</div>; // Show loading state

    return (
        <div className=' md:w-full '>
            <section>
                <SectionTitle subheading={"What Look"} heading={'Manage Item'} />
            </section>
            <div className="overflow-x-auto md:ml-10  m-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className='bg-orange-400'>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id}>
                                <th className='bg-slate-300'>{index + 1}</th>
                                <td><img className='w-10' src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateitem/${item._id}`}>
                                        <button>
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handledelete(item)}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MannageItem;
