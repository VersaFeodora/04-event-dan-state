'use client'
export default function Tombol1(){
    function handleMouseOver(){
        alert("Eits, mau mencet tombol ya?");
      }
    function handleClick(){
        alert("Tombol sudah ditekan!");
    }
    
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
        onClick={handleClick} 
        onMouseLeave={() => {alert("Loh, kok sudah pergi!!!")}}
        //onMouseOver={handleMouseOver}
        >
            Ini tombol
        </button>
    );
}