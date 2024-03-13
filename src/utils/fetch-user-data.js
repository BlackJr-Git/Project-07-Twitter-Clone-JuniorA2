// const initialData = "https://65bb938b52189914b5bc8c0a.mockapi.io/data";:
// const axios = require("axios"); 
import axios from "axios";
const initialData = "http://localhost:3000/api/user/1";

async function fetchUserData(initialData) {
    try {
        const response = await fetch(initialData);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
      }
}

export default fetchUserData;
