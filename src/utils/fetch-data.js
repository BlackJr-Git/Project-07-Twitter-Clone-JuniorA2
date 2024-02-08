const initialData = "https://65bb938b52189914b5bc8c0a.mockapi.io/data" 

async function fetchData() {
    try {
      const response = await fetch(initialData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`) ;
      }
  
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error) ;
      throw error; 
    }
  }

export { fetchData } ; 