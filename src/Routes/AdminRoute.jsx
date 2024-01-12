import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' />
};
AdminRoute.propTypes = {
    children: PropTypes.node
}

export default AdminRoute;