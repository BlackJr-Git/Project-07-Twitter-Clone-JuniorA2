import axios from 'axios';


async function  postData(tweet)  {
try {
    const response = await axios.post("https://65bb938b52189914b5bc8c0a.mockapi.io/data", tweet);
    alert('le tweet a ete envoyer'
    );
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    alert("Une erreur s'est produite lors de l'envoi des données");
  }
}


export default postData ; 