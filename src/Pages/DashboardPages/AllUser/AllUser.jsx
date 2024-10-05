import { useQuery } from '@tanstack/react-query';
import useAxiossecure from '../../../hooks/useAxiossecure';
import { FaUser } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
    const axiosSecure = useAxiossecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} Became an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className='lg:w-[80%] w-full mx-auto p-'>
            <div className='text-center mt-10'>
                <h1 className='text-2xl md:text-3xl font-bold my-5'>
                    Total Users: {users.length}
                </h1>
            </div>

            <div className="overflow-x-auto mx-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='bg-orange-400 text-left text-black '>
                            {/* <th className='px-4 py-2'>#</th> */}
                            {/* <th className='px-4 py-2'>Name</th> */}
                            <th className='px-4 py-2'>Email</th>
                            <th className='px-4 py-2'>Role</th>
                            <th className='px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-slate-200">
                                {/* <td className='px-4 py-2 bg-slate-300'>{index + 1}</td> */}
                                {/* <td className='px-4 py-2'>{user.name}</td> */}
                                <td className='px-4 bg-white py-2'>{user.email}</td>
                                <td className='px-4 bg-white py-2'>
                                    {user.role === 'admin' ? 'Admin' :
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <FaUser />
                                        </button>
                                    }
                                </td>
                                <td className='px-4  bg-white py-2'>
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="text-red-500 bg-white hover:text-red-700"
                                    >
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

export default AllUser;
