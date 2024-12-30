import React from 'react';

const Allvisas = () => {
    return (
        <div>
            <h1>Hello I am, from All Visas</h1>
        </div>
    );
};

export default Allvisas;


// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Visa from "./Visa/Visa";
// import Swal from 'sweetalert2'

// const Allvisas = () => {
//     const showVisas = useLoaderData();
//     const [visas, setVisas]= useState(showVisas);
//     const handleDeltebtn = _id =>{
//         fetch(`http://localhost:3000/visas/${_id}`,{
//             method: "DELETE",
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data);
//             if(data.deletedCount > 0){
//                 const remaining = visas.filter(currentvisa=>currentvisa._id!==_id);
//                 setVisas(remaining);
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Visa has been Deleted from list successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Ok'
//                   })
//             }
//         })
//     }
//     return (
//         <div>
//             <h1>Visa Added total : {visas.length}</h1>
//             <div className="card grid md:grid-cols-3  gap-12">
//                 {
//                     visas.map(vissa=> <Visa key={vissa._id} handleDeltebtn={handleDeltebtn} vissa={vissa}></Visa>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Allvisas;