import { useEffect } from "react";

export const useTitle = (title) => {
  
    useEffect(() => {
        document.title = `${title} - eBookHub`;
    },[title]);
  
    return null;
}
