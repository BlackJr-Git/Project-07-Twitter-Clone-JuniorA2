// import { initialData } from ".";
// async function fetchData()  {
//     const response = await fetch('src/utils/initial-data.json');
//     const data = await response.json()
//     return data
// }
const initialData = "src/utils/initial-data.json"

async function fetchData() {
    try {
      const response = await fetch(initialData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      throw error; 
    }
  }
  
//   export { fetchData };
  

export { fetchData } ; 