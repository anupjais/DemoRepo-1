$(document).ready(function() {
    // GitHub OAuth settings
    const clientId = 'YOUR_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/callback'; // Set your redirect URI

    // GitHub OAuth URL
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    // Handle click event on GitHub login button
    $('#githubLoginBtn').click(function() {
        // Redirect the user to GitHub authorization page
        window.location.href = githubAuthUrl;
    });
});
