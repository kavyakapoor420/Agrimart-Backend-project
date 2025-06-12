
const saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl 
    }
    next() 
}

module.exports = saveRedirectUrl;
// This middleware saves the redirect URL in the session for later use.
// It checks if there is a redirect URL stored in the session and makes it available in `res.locals`.
// If a redirect URL exists, it will be accessible in the response locals, allowing you to use it in your views or further middleware.


// module.exports.saveRedirectUrl=(req,res,next)=>{
//     // first  Check if the request is a POST request
//     if (req.method === 'POST') {
//         // Save the original URL in the session
//         req.session.redirectUrl = req.originalUrl;
//     }
//     // If the request is a GET request, check if there's a redirect URL in the session
//     else if (req.method === 'GET' && req.session.redirectUrl) {
//         // Redirect to the saved URL
//         const redirectUrl = req.session.redirectUrl;
//         delete req.session.redirectUrl; // Clear the redirect URL after using it
//         return res.redirect(redirectUrl);
//     }
//     // If there's no redirect URL, continue to the next middleware or route handler
//     else if (req.method === 'GET') {
//         // Clear any existing redirect URL in case it was set previously
//         delete req.session.redirectUrl;
//     }
//     // If the request is neither GET nor POST, just continue
//     else {
//         delete req.session.redirectUrl; // Clear any existing redirect URL
//     }
//     // Ensure the session is saved before proceeding
//     req.session.save((err) => {
//         if (err) {
//             console.error('Error saving session:', err);
//         }
//     });
//     // Call the next middleware or route handler
//     next();
// }