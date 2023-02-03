import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Mydata = () => {
    const [data, setData] = useState([]);

    const mydata = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        //  console.log(response.data);
    };

    useEffect(() => {
        mydata();

    }, []);

    return (
        <>{
            data.map((entry) => {
                return (<div style={{ marginBottom: "50px", marginTop: "20px" }}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><table>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginLeft: "20px", width: "200px" }} ><h6>NAME</h6></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><h6>CITY</h6></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><h6>PHONE</h6></div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginLeft: "20px", width: "200px" }} ><p>{entry.name}</p></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><p>{entry.address.city}</p></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><p>{entry.phone}</p></div>
                                </div>


                            </table></Accordion.Header>
                            <Accordion.Body>

                                <div style={{ marginLeft: "20px" }} ><p><b>Description : </b>{entry.company.catchPhrase}</p></div>


                                {/* <div style={{ }}>
                                    <div style={{ marginLeft: "20px", width: "200px" }} ><p>{entry.name}</p></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><p>{entry.address.city}</p></div>
                                    <div style={{ marginLeft: "200px", width: "200px" }} ><p>{entry.phone}</p></div>
                                </div> */}
                                <div style={{ display:"flex" }}>
                              <div style={{ marginLeft: "20px" }}>
                             <div><tr><th >Company</th></tr><tr><td>{entry.company.name}</td></tr></div> 
                             <div><tr><th >Email</th></tr><tr><td>{entry.email}</td></tr></div> 
                             <div><tr><th >Phone</th></tr><tr><td>{entry.phone}</td></tr></div> 

                              </div>
                              <div style={{ marginLeft: "400px" }}>
                             <div><tr><th >Street</th></tr><tr><td>{entry.address.street}</td></tr></div> 
                             <div><tr><th >Suite</th></tr><tr><td>{entry.address.suite}</td></tr></div> 
                             <div><tr><th >Zipcode</th></tr><tr><td>{entry.address.zipcode}</td></tr></div> 
                             <div><tr><th >City</th></tr><tr><td>{entry.address.city}</td></tr></div> 

                              </div>
                              </div>
                                
                               
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
                )


            })
        }

        </>
    )
}

export default Mydata