

const ItemCover = ({img,title,des}) => {


    return (

        <div className=" itemcover my-10   " style={{backgroundImage: `url("${img}")`}}>

            <div className="itemcover-text bg-black bg-opacity-50 py-10 px-20 space-y-4 w-[70%]">

                <h1 className="text-center text-white uppercase text-4xl">{title}</h1>
                <p className="text-center text-white">{des}</p>

            </div>
           
        </div>

    ); 

};

export default ItemCover;