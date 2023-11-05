import {useEffect, useState,useRef} from 'react'
import axios from 'axios'


const Home = ()=>{
const [sites,setSite] = useState([]);
const [appointDate,setDate] = useState();
// const appointDate = useRef();

const getSites = async ()=>{
    const result = await axios.get('http://localhost:4000/get-data');
    setSite(result.data)

}

useEffect(
    ()=>{
        getSites();

    }
)

const handleAppoint =async ()=>{
    console.log(appointDate,">>>>>>>>>>>>>>>>>>>")
    await axios.patch('http://localhost:4000/update-appointment', {appointDate});

}
    return(
        <>
        <h1>Welcome to Electrician Management System</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
                <th>Installation Date</th>
                <th>Grievance</th>
                <th>Action</th>
            </thead>

            <tbody>
                {
                   sites.length>0 && sites.map((site)=>{
                    return (
                        <tr>
                            <td>{site.name}</td>
                            <td>{site.phone}</td>
                            <td>{site.city}</td>
                            <td><input type="date" onChange={(e)=>setDate(e.target.value)} ></input></td>
                            <td>{site.grievance ? "Grievance" :"General"}</td>
                            <td>
                                <button onClick={handleAppoint}>Appoint Electrician</button>
                            </td>
                        </tr>

                    )
                        
                    
                   })

                }
               
                

            </tbody>

        </table>
        </>
    )
}


export default Home