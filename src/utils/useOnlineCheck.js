import { useEffect, useState } from "react";

const useRestaurantCheck=()=>{
  const [isOnline, setIsOnline] = useState(true)
  console.log("checking online status="+isOnline)

  useEffect(()=>{
    console.log("online status inside useEffect")
    window.addEventListener("offline",()=>{
      console.log("you are offliune");
      setIsOnline(false);
    })


    window.addEventListener("online",()=>{
      console.log("you are online");
      setIsOnline(true)
    });
  },[isOnline])
  return isOnline
}

export default useRestaurantCheck;