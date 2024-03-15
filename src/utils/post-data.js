import axios from "axios";

let postUrl = "https://twitter-api-6zi0.onrender.com/api/tweets/add";

async function postData(tweet) {
  try {
    const response = await axios.post(postUrl, tweet);
    alert("le tweet a ete envoyer");
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    alert("Une erreur s'est produite lors de l'envoi des données");
  }
}

export default postData;  
