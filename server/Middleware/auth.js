const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	// Get token from header
	const token = req.header("auth-token");

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}

	// Verify token
	try {
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				return res.status(401).json({ msg: "Token is not valid" });
			} else {
				req.user = decoded.user;
				console.log("Auth Middlerware", req.user);
				next();
			}
		});
	} catch (err) {
		console.error("something wrong with auth middleware");
		res.status(500).json({ msg: "Server Error" });
	}
};

const isAdmin = (req, res, next) => {
	console.log(req.user);
	// Check if user is admin
	if (req.user.role === "Admin") {
		next();
	} else {
		res.status(403).json({ msg: "Forbidden" });
	}
};

const isRecruiter = (req, res, next) => {
	console.log(req.user);
	// Check if user is recruiter
	if (req.user.role === "Recruiter") {
		next();
	} else {
		res.status(403).json({ msg: "Forbidden" });
	}
};

module.exports = {
	auth,
	isAdmin,
	isRecruiter,
};
