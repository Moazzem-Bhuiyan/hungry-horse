
import SectionTitle from '../../../component/sectiontitle/SectionTitle';
import useCart from '../../../hooks/useCart';

import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiossecure from '../../../hooks/useAxiossecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart,refetch]=useCart();
    
    const totalPrice = cart.reduce((total,item)=> total + item.price,0)
    const axiosSecure=useAxiossecure();

    const handleDelete = id =>{


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

           
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
               if(res.data.deletedCount > 0){
                    refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
    


               }
            })


            }
          });



    }

    return (
        <div className=' md:w-full h-screen p-1'>

            <section className=' mt-10'>
                <SectionTitle subheading={'My CART'} heading={' add more?'}></SectionTitle>
            </section> 

            <div className='lg:flex justify-evenly uppercase rounded-md py-2 ml-5  md:ml-5'>

                <h1 className='lg:text-4xl mt-10'>Items : {cart.length}</h1>
                <h1 className='md:text-4xl'>Total Price: {totalPrice}</h1>

           { cart.length ?  <Link className='' to = '/dashboard/payment'> <button className=' btn bg-orange-500 text-white '>Pay</button></Link>
           
           :

           <button className='btn bg-green-400 text-black '>Pay</button>
           
           }


            </div>

            {/* table */}

            <div className="md:overflow-x-auto lg:w-full w-[30%] ml-5 ">
  <table className="table md:ml-5 lg:w-full w-[30%] m-auto">
    {/* head */}
    <thead>
      <tr className='bg-orange-400 text-black'>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      
      </tr>
    </thead>
    <tbody>

        {
            cart.map((item,index)=> 
                <tr key={item.index}>
                  <th className='bg-slate-300'>
                  {index+1}
                  </th>
                  <td>
                    <div className="md:flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 md:w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>

                  </td>

                  <td>
                   
                   {item.name}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500"> <FaTrashAlt></FaTrashAlt> </button>
                  </th>
                </tr>)
        }




    </tbody>
  
  
  </table>
</div>
          
            
        </div>
    );
};

export default Cart;