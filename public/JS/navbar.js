// Load the navbar dynamically on all pages
document.getElementById("navbar-container").innerHTML = `
    <nav class="navbar">
        <div class="logo">📚 BookStore</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="profile.html">Profile</a></li>
              <li><a href="catalog.html">Catalog</a></li>
            <li><a href="cart.html">Cart</a></li>
             <li><a href="payment.html">Payment</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
            
        </ul>
    </nav>
`;

// Hide homepage content on non-home pages
if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
    const heroSection = document.querySelector(".hero");
    const featuredBooks = document.querySelector(".featured-books");

    if (heroSection) heroSection.style.display = "none";
    if (featuredBooks) featuredBooks.style.display = "none";
}

