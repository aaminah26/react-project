import {useState} from "react";
import StudentCard from "./StudentCard";

function Toggle(){
  const [value,setValue]=useState(false);

  return(
    <>
      <button onClick={()=>setValue(!value)}>
        {value?"Hide Student":"Show Student"}
      </button>

      {value && (
        <StudentCard name="aaminah" age={19} email="aaminahhaniya26@gmail.com"  city="Kuppam"
        />
      )}
    </>
  );
}

export default Toggle;