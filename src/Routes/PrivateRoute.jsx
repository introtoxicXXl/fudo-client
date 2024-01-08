import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;