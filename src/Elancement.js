import { useState } from "react";


function my_elancement(longueur, largeur) {
  if (isNaN (longueur) || isNaN (largeur) || largeur === 0) {
    return "Attention on ne connait pas l'élancement !";
  } else if (longueur / largeur >= 2) {
    return "Le bâtiment respecte la condition d'élancement";
  } else {
    return "Le bâtiment ne respecte pas la condition d'élancement";
  }
}

function MyComponent() {

  const [elanc, setElanc] = useState ("...?...")

  const setElancement = () => {
    var long = parseFloat (document.getElementById ("Long").value);
    var larg = parseFloat (document.getElementById ("Larg").value);
    setElanc (my_elancement (long, larg));
    }
    
   return (
        <div id="calcul_elancement">
      Ici a lieu le calcul de l'élancement du bâtiment:<br/><br/><br/>
        <label for="name">Longueur du bâtiment :</label>
        <input type="number" id="Long" name="Longueur"
                onChange={setElancement}/> <br/> <br/>
        <label for="name">Largeur du bâtiment :</label>
        <input type="number" id="Larg" name="Largeur"
                onChange={setElancement}/> <br/> <br/>
        {/* <button onClick={ setElancement }>Check</button> */}
        <h3>La conclusion sur l'élancement est  : <br/> <br/>  { elanc }</h3>
        </div>);
  }

export default MyComponent
