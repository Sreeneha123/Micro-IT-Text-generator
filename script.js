function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  function addToWishlist(name) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.includes(name)) {
      wishlist.push(name);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${name} added to wishlist!`);
    }
  }
  