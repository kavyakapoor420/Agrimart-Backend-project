

const isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl; // Save the original URL in the session
        return res.redirect('/user/login')
    }
    next()
}

module.exports=isLoggedIn;

// This middleware checks if the user is authenticated.
// If the user is not authenticated, it saves the original URL in the session and redirects to the login page.
// If the user is authenticated, it calls the next middleware or route handler.
// This is useful for protecting routes that require authentication, ensuring that users are redirected to the login page if they are not logged in.
// It also saves the URL the user was trying to access, so they can be redirected back after logging in.
// This middleware is typically used in routes that require user authentication, such as accessing a user's profile or making a purchase.
// It ensures that only authenticated users can access certain parts of the application, enhancing security and user experience.        
