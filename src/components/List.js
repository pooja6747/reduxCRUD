import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/allAction";

const List = ({ user }) => {
  const dispatch = useDispatch();
  const { name, email, phone, id } = user;
  return (
  
     
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>
            <Link to={`/edit-user/${id}`} state={{ user: user }}>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteUser(id))}
            >
              Delete
            </button>
          </td>
        </tr>
    
  );
};

export default List;
