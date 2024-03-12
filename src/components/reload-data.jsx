import Button from "./button";

function ReloadData({reloadPage}) {
    // function reloadPage() {
    //     location.reload()
    // }
  return (
    <div className="w-96 m-auto p-6">
        <p className="text-center py-3">Un probleme est survenu lors de la recuperation de donne </p> 
        <p className="text-center py-6">verfifier votre connexion internet et reesayer </p>
      <Button texte={'Try Again'} className={"button nav-button w-40"} handleClick={reloadPage}></Button>
    </div>
  );
}

export default ReloadData;
