import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';


class Mydata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, 
      posts: [], 
      loading: null,
      postsPerPage: 3 
      };
  }

 
  componentDidMount() { 
    this.setState({loading: true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(data => {
        this.setState({ posts: data });
        this.setState({loading: false})
    })
  }

  render() {
    //Get currentPosts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

    //Implement page numbers
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(this.state.posts.length / this.state.postsPerPage); i++) {
      pageNumbers.push(i);
    }

    //Set current page
    const setPage = (pageNum) => {
      this.setState({currentPage: pageNum})
    }

    return (<>
      <div className="w-5/6 mx-auto">
        <b className="text-4xl">LeadZen Project By Prithvi Kushwah</b>
      

        {
          this.state.loading === true
            ? <div className="w-full h-screen flex items-center justify-center">
               
            </div>
          :          
          currentPosts.map((post, id) => (
            
              <div key={id} style={{ marginBottom: "50px", marginTop: "20px" }}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><table>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginLeft: "20px", width: "200px" }} ><h6>NAME</h6></div>
                                    <div style={{ marginLeft: "180px", width: "200px" }} ><h6>CITY</h6></div>
                                    <div style={{ marginLeft: "180px", width: "200px" }} ><h6>PHONE</h6></div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ marginLeft: "20px", width: "200px" }} ><p>{post.name}</p></div>
                                    <div style={{ marginLeft: "180px", width: "200px" }} ><p>{post.address.city}</p></div>
                                    <div style={{ marginLeft: "180px", width: "200px" }} ><p>{post.phone}</p></div>
                                </div>


                            </table></Accordion.Header>
                            <Accordion.Body>

                                <div style={{ marginLeft: "20px" }} ><p><b>Description : </b>{post.company.catchPhrase}</p></div>
                                <div style={{ display:"flex" }}>
                              <div style={{ marginLeft: "20px" }}>
                             <div><tr><th >Company</th></tr><tr><td>{post.company.name}</td></tr></div> 
                             <div><tr><th >Email</th></tr><tr><td>{post.email}</td></tr></div> 
                             <div><tr><th >Phone</th></tr><tr><td>{post.phone}</td></tr></div> 

                              </div>
                              <div style={{ marginLeft: "400px" }}>
                             <div><tr><th >Street</th></tr><tr><td>{post.address.street}</td></tr></div> 
                             <div><tr><th >Suite</th></tr><tr><td>{post.address.suite}</td></tr></div> 
                             <div><tr><th >Zipcode</th></tr><tr><td>{post.address.zipcode}</td></tr></div> 
                             <div><tr><th >City</th></tr><tr><td>{post.address.city}</td></tr></div> 

                              </div>
                              </div>
                                
                               
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
           
          ))
        }

        <div className="w-full flex justify-around">
          {
            pageNumbers.map((pageNum, index) => (
              <span key={index} className={pageNum === this.state.currentPage ? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 text-white" : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full"} onClick={() => {setPage(pageNum)}}>
                {pageNum}
              </span>
            ))
          }
        </div>
          </div>
      </>
    );
  }
}

export default Mydata;