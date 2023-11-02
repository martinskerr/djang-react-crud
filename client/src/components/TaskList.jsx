import { useEffect } from "react"
import { getAllTasks } from "../api/tasks.api"
import { useState } from "react"


export function TaskList(){

    const [tasks, setTasks] = useState([]);

    useEffect(() =>{

            async function loadTasks(){
                const res = await getAllTasks()
                console.log(res);
                setTasks(res.data)
            }

            loadTasks()
    }, [])


    return <div>  

        {tasks.map(tasks =>(
            <div key={tasks.id}>
                <h1>{tasks.title}</h1>
                <p>{tasks.description}</p>
            </div>
        ))}

    </div>
}