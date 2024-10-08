import { USER } from "../models/user.js";
import { USERRATING } from "../models/userRating.js"

// Getting userdata by Id
function getUserById(userId) {
    return USER.findOne({_id: userId});
};

// Getting userdata by email
function getUserByEmail(req) {
    return USER.findOne({email: req.body.email});
};

// Create New User
function createNewUser(req, hashPass, activateHashKey) {
    return new USER({
        ...req.body,
        password: hashPass,
        activateHash: activateHashKey
    }).save();
};

// Finding User by activateKey
function getUserByActivateHash(activateHashKey) {
    return USER.findOne(
        { activateHash: activateHashKey }
    );
};

// Activating User by activate Key when clicked from Mail.
function userActivation(activateHashKey) {
    return USER.updateOne(
        { activateHash: activateHashKey },
        { isActive: true, activateHash: "Activated" }
    );
}


// Adding Reset Hash Key in User document
function addUserPwdResetHash(req, pwdResetHash) {
    return USER.updateOne(
        { email: req.body.email },
        { resetPassword: pwdResetHash }
    )
};

// Get User Data based on Pwd Reset Hash
function getUserByPwdResetHash(resetPasswordHash) {
    return USER.findOne({resetPassword: resetPasswordHash});
};

// Update New Password based on resethash and empty resethash
function updateNewPwd(resetHashAuth, hashPass) {
    return USER.updateOne(
        { resetPassword: resetHashAuth },
        {
            password: hashPass,
            resetPassword: ""
        }
    )
};


// UserRating Form Hanlding
// Create UserRating
function createRating(req) {
    return new USERRATING(
        {
            ...req.body
        }
    ).save()
};

// Getting the Post belongs to the particular user
function getUniqueUserPost(req) {
    return USERRATING.find({email: req.query.email})
};

// Updating the post
function updateUniqueUserPost(req) {
    return USERRATING.updateOne(
        {_id: req.params.id},
        {...req.body}
    )
};

// Deleting the post
function deleteUniqueUserPost(req) {
    return USERRATING.deleteOne({_id: req.params.id})
};


export {
    getUserById,
    getUserByEmail,
    createNewUser,
    getUserByActivateHash,
    userActivation,
    addUserPwdResetHash,
    getUserByPwdResetHash,
    updateNewPwd,
    createRating,
    getUniqueUserPost,
    updateUniqueUserPost,
    deleteUniqueUserPost,
}