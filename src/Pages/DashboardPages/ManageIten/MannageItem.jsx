import SectionTitle from '../../../component/sectiontitle/SectionTitle';
import useHooks from '../../../hooks/useHooks';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiossecure';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu, isLoading, refetch] = useHooks();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
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
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                }
            }
        });
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='p-5 w-full mx-auto'>
            <section>
                <SectionTitle subheading={"What Look"} heading={'Manage Item'} />
            </section>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-black table-auto">
                    <thead>
                        <tr className='bg-orange-400 text-black'>
                            <th className='px-4 py-2 text-left'>#</th>
                            <th className='px-4 py-2 text-left'>Item Image</th>
                            <th className='px-4 py-2 text-left'>Item Name</th>
                            <th className='px-4 py-2 text-left'>Price</th>
                            <th className='px-4 py-2 text-center'>Edit</th>
                            <th className='px-4 py-2 text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id} className="border-b">
                                <th className='px-4 py-2 bg-slate-300'>{index + 1}</th>
                                <td className='px-4 py-2'>
                                    <img className='w-16 h-16 object-cover' src={item.image} alt={item.name} />
                                </td>
                                <td className='px-4 py-2'>{item.name}</td>
                                <td className='px-4 py-2'>${item.price}</td>
                                <td className='text-center px-4 py-2'>
                                    <Link to={`/dashboard/updateitem/${item._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td className='text-center px-4 py-2'>
                                    <button onClick={() => handleDelete(item)} className="text-red-500 hover:text-red-700">
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

export default ManageItem;
