'use client'
import { sculptureList } from "@/data/article";
import { useState } from "react";

export default function Gallery(){
    const [index, setIndex] = useState(0);
    
    function nextButton(){
        setIndex(index + 1);
        if(index >= sculptureList.length - 1){
            setIndex(0);
        }
    }
    function backButton(indexList:any){
        setIndex(indexList - 1);
        if(index <= 0){
            setIndex(sculptureList.length - 1);
        }
    }
    let sculpture = sculptureList[index];

    return(
        <>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
                onClick={backButton}>Artikel Sebelumnya</button>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
                onClick={nextButton}>Artikel Selanjutnya</button>
            <h2><i>{sculpture.name} oleh {sculpture.artist}</i></h2>
            <h3>({index+1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </>
    );
}