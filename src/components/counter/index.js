import { useEffect, useState } from "react";

function Counter() {
    // useState mengembalikan sepasang value(array) : [0,fuction()]
    const[angka,setAngka] = useState(0);

    function addAngka() {
        setAngka(angka + 1 );
    }

    function updateDOM() {
        console.log("Lifecycle: Component dimount");
        // melakukan side effect : acces dom.
        // mengubah title documet setiap state berubah
        document.title = `Result :${angka}`;
    }

    // useEffect: Melakukan side effect
    useEffect(updateDOM,[angka]);

    console.log("lifecycle :Component dirender");

    return (
        <div>
            <p>Hasil : {angka} </p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;

