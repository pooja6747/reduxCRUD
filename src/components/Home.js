
import List from "./List";
import { useSelector } from "react-redux";

const Home = () => {
  const userList = useSelector((state)=>{
    console.log(state);
    return state.user.items;
   
  })


  return (
    <div className="container">
      <div className="row login homepage">
        <div>&nbsp;</div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
          <table style={{border :'1px solid black'}} className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            
              {userList.map((userData) => (
                <List user={userData} />
                
              ))}
              
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
