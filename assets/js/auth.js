// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to handle join button click
function handleJoinClick(event) {
    event.preventDefault();
    
    if (!isLoggedIn()) {
        // User is not logged in, redirect to login page with return URL
        const returnUrl = encodeURIComponent(window.location.href);
        window.location.href = `auth.html?form=login&redirect=join&return=${returnUrl}`;
    } else {
        // User is logged in, proceed to join page
        window.location.href = 'join.html';
    }
} 