
import SectionTitle from "../../../component/sectiontitle/SectionTitle";
import Menuitem from "../../Shared/menuitem/Menuitem";
import useHooks from "../../../hooks/useHooks";
import { Link } from "react-router-dom";

const PopularItem = () => {

  const[menu]=useHooks()
  const popularitem = menu.filter(item=> item.category==='popular' )

    // const [menu,setMenu]=useState([])

    // useEffect(()=>{

    //     fetch('/menujson/menu.json')
    //     .then(res=> res.json())
    //     .then(data=>{ 
    //         const popularitem = data.filter(item=> item.category ==='popular');
    //         setMenu(popularitem)})
    // },[])

  return (
    <div>


      <div>
        <section>
          <SectionTitle
            subheading={"check it Out"}
            heading={"From Our menu"}
          ></SectionTitle>
        </section>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-10 mt-10">
       
                
            {
                popularitem.map(item=><Menuitem key={item._id} item={item}></Menuitem>)

            }
            
               
      </div>

      <div className=" flex justify-center  "> <Link className=' uppercase shadow-md text-center my-10 bg-white w-1/6 rounded-lg py-1 border-b-4 border-black' to ='/ourmenu'><button >View full menu</button></Link></div>
     


    </div>
  );
};

export default PopularItem;
