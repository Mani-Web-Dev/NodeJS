// @description Auth user/set token
// route POST /api/users/auth
// @access Public (no password is required to access this route)

const authUser = async (req, res) => {
    res.status(200).json({ message: "Auth User" });
}

export { authUser };