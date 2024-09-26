

// Handling CatchBlock error
function serverError(res, error) {
    return res.status(500).json({error:"Internal Server Error", errorData: error});
};

// Hanlding Middleware Authentication Error
function authError(res, message) {
    return res.status(500).json({error: message});
};


export { serverError, authError };