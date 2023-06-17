
// import { useEffect, useState } from "react";
import CatagoryTeacher from "./CatagoryTeacher";
import useCourcess from "../../Hooks/useCourcess";


const Teachers = () => {



    
    const [courcess]=useCourcess()
    const Piano = courcess.filter(item=>item.instrumentName==='Piano')
       console.log(Piano)
       
         
         return (
            <div>

                {
                   Piano.map(teachers=><CatagoryTeacher  key={teachers.id}   teachers={teachers}>


                    

                   </CatagoryTeacher>
                 )
                 } 


            </div>
    );
};

export default Teachers;




