import { useEffect, useState } from "react";

function Animasi() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds +1);
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return ( 
        <div className="ml-8 mt-8">
            Detik : {seconds}
        </div>
     );
}

export default Animasi;