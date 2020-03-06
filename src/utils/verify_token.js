const verifyToken = () => {
    return localStorage.getItem('token');
};

export default verifyToken;
