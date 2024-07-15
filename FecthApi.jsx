import { useEffect, useState } from "react";
import { json } from "react-router-dom";
const FecthApi = () => {
    const [data, setDAta] = useState([])

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fecth('https://jsonplaceholder.typicode.com/todos');
                const jsonData = await response.json();
                setDAta(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fecthData();
    }, []);

    return ( 
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-2xl font-bold my-4">Fetch Data</h1>
            <ul className="list-disc pl-4">
                {data.map((item) => (
                    <li key={item.id} className="mt-2">{item.title}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default FecthApi;
