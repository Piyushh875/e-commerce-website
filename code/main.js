// Modal functionality
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const cartModal = document.getElementById('cart-modal');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const cartIcon = document.getElementById('cart-icon');
const showRegisterLink = document.getElementById('show-register-link');
const showLoginLink = document.getElementById('show-login-link');
const closeButtons = document.querySelectorAll('.close-modal');

// Open modals
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'flex';
});

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        cartModal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
});

// Form submissions
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate authentication
    if(email && password) {
        alert(`Welcome back! You're now signed in as ${email}`);
        loginModal.style.display = 'none';
    }
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('register-email').value;
    
    // Simulate account creation
    if(firstName && email) {
        alert(`Thank you for registering, ${firstName}! A verification email has been sent to ${email}`);
        registerModal.style.display = 'none';
    }
});

// Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let cartItemsCount = 3;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemsCount++;
        cartCount.textContent = cartItemsCount;
        
        // Animation effect
        button.textContent = 'Added!';
        button.style.background = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = 'var(--charcoal)';
        }, 2000);
    });
});

// Cart item quantity adjustment
const quantityBtns = document.querySelectorAll('.quantity-btn');
quantityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const quantityElement = btn.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        
        if (btn.textContent === '+') {
            quantity++;
        } else {
            if (quantity > 1) quantity--;
        }
        
        quantityElement.textContent = quantity;
    });
});

// Remove item from cart
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const cartItem = btn.closest('.cart-item');
        cartItem.style.animation = 'fadeOut 0.3s forwards';
        
        setTimeout(() => {
            cartItem.remove();
            cartItemsCount--;
            cartCount.textContent = cartItemsCount;
            
            // Update cart title
            document.querySelector('.modal-title').textContent = 
                `Your Shopping Bag (${cartItemsCount})`;
        }, 300);
    });
});

// Add animation for fadeOut
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);

// Checkout button
document.querySelector('.cart-summary .btn').addEventListener('click', () => {
    alert('Redirecting to secure checkout...');
    cartModal.style.display = 'none';
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    if(email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our exclusive offers soon.`);
        e.target.reset();
    }
});