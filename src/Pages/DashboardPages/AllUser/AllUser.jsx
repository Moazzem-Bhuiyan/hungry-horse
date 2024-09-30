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

            // ponditi koresiiiii

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
        <div className='lg:w-full w-[80%] '>
            <div className='  mt-20'>
               
                <h1 className='text-3xl md:ml-10 my-2'>Total Users : {users.length}</h1>
            </div>

            <div className="overflow-x-auto md:ml-10 w-full m-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr className='bg-orange-400'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th className='bg-slate-300'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : 
                                        <button onClick={() => handleMakeAdmin(user)}>
                                            <FaUser />
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)}>
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
