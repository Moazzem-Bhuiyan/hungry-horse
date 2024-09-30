import React from 'react';

const SectionTitle = ({subheading,heading}) => {


    return (

        <div className='text-center md:w-3/12 mx-auto'>

            <p className='text-yellow-500'>---  {subheading}  --- </p>
            <h1 className='text-3xl uppercase border-y-2  my-3 py-2  text-center'>{heading}</h1>

            
        </div>

    );
};

export default SectionTitle;