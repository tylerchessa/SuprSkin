import { useState, useEffect } from "react";
import axios from "axios";

// State management
export default function useApplicationData() {
  // console.log("Start Application Data");
  const [initialData, setInitialData] = useState({
    regimens: [],
    categories: [],
    products: []
  });

  //Requests for data on first page load.
  useEffect(() => {
      Promise.all([
        axios.get("/regimen/all"),
        axios.get("/categories/all"),
        axios.get("/products/all"),
      ]).then((res) => {
        // console.log('Application data - axios success');
        if (res) {
        // console.log(res.data)
        setInitialData((prev) => ({
          ...prev,
          regimens: res[0].data,
          categories: res[1].data,
          products: res[2].data,
        }));
      }
      });
    // }
  }, []);

  return {
    initialData
  };
}
