/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    cursor: none;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
}

/* Efectos de fondo */
.background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    overflow: hidden;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.8;
}

.animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(45deg, 
        rgba(255, 0, 128, 0.2) 0%, 
        rgba(0, 191, 255, 0.2) 50%, 
        rgba(138, 43, 226, 0.2) 100%);
    background-size: 400% 400%;
    animation: gradientFlow 15s ease infinite;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Efectos de luz */
.light-effects-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
}

.light-effect {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(173, 216, 230, 0.8) 0%, rgba(173, 216, 230, 0) 70%);
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.7;
    transform: translate(-50%, -50%);
    transition: transform 0.1s linear;
}

.light-effect-2 {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 105, 180, 0.6) 0%, rgba(255, 105, 180, 0) 70%);
    border-radius: 50%;
    filter: blur(15px);
    opacity: 0.5;
    transform: translate(-50%, -50%);
    transition: transform 0.3s linear;
}

.light-effect-3 {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 70%);
    border-radius: 50%;
    filter: blur(25px);
    opacity: 0.3;
    transform: translate(-50%, -50%);
    transition: transform 0.5s linear;
}

/* Efectos glassmorphism */
.glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
    transition: all 0.3s ease;
}

.glass:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
}

.glass-light {
    background: rgba(255, 255, 255, 0.15);
}

.glass-dark {
    background: rgba(0, 0, 0, 0.25);
}

/* Header */
header {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 30px;
    width: auto;
    transition: all 0.3s ease;
}

.logo-img:hover {
    transform: scale(1.05);
    opacity: 0.9;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 2rem;
    position: relative;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    position: relative;
}

nav ul li a:hover {
    color: lightblue;
    background-color: rgba(255, 255, 255, 0.15);
}

nav ul li a.active {
    color: #ff69b4;
    background-color: rgba(255, 255, 255, 0.25);
}

nav ul li a.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background-color: #ff69b4;
    animation: underlineGrow 0.3s ease-out;
}

@keyframes underlineGrow {
    from { width: 0%; }
    to { width: 60%; }
}

/* Contenido principal */
.content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 2rem;
    position: relative;
    z-index: 1;
}

.main-text {
    padding: 2rem;
    max-width: 800px;
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Tipografía */
h1, h2, h3 {
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 600;
}

h1 { 
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ff69b4, #8a2be2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
}

h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Botones */
.btn {
    display: inline-block;
    background: linear-gradient(135deg, rgba(173, 216, 230, 0.9) 0%, rgba(100, 200, 255, 0.9) 100%);
    color: #333;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.btn:hover {
    background: linear-gradient(135deg, rgba(173, 216, 230, 1) 0%, rgba(100, 200, 255, 1) 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(1px);
}

.btn i {
    margin-right: 0.5rem;
}

/* Selector de planes */
.plan-toggle-container {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 5px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
}

.plan-toggle {
    flex: 1;
    padding: 0.8rem 1rem;
    border: none;
    background: transparent;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    font-size: 0.95rem;
}

.plan-toggle.active {
    background: linear-gradient(135deg, rgba(255, 105, 180, 0.9) 0%, rgba(138, 43, 226, 0.9) 100%);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: white;
}

.plan-toggle:not(.active):hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ff69b4;
}

/* Contenedor de planes */
.pricing-plans {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    margin: 2rem 0;
}

.annual-plans {
    display: none;
    animation: fadeIn 0.5s ease-out;
}

.plan-option {
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    position: relative;
    transition: all 0.3s ease;
}

.plan-option:hover {
    transform: translateY(-5px);
}

.plan-radio {
    position: absolute;
    opacity: 0;
}

.plan {
    padding: 1.8rem;
    text-align: left;
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.plan-radio:checked + .plan {
    border: 2px solid #ff69b4;
    background: rgba(255, 105, 180, 0.1);
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(255, 105, 180, 0.2);
}

.price {
    font-size: 2.2rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem;
    color: #ff69b4;
    display: flex;
    align-items: flex-start;
    line-height: 1;
}

.price span {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 0.3rem;
    margin-top: 0.3rem;
}

.savings {
    color: #4CAF50;
    font-size: 0.9rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    display: inline-block;
    background: rgba(76, 175, 80, 0.15);
    padding: 0.2rem 0.5rem;
    border-radius: 50px;
}

.plan-details {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-grow: 1;
}

.features {
    list-style: none;
}

.features li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
    text-align: left;
    line-height: 1.4;
}

.features i {
    margin-right: 0.8rem;
    color: #ff69b4;
    min-width: 20px;
    margin-top: 0.2rem;
}

/* CAPTCHA */
.captcha-container {
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
}

.fake-captcha {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    width: 100%;
    max-width: 300px;
}

.fake-captcha:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.captcha-image {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.captcha-text {
    background: #f0f0f0;
    color: #555;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    letter-spacing: 3px;
    padding: 12px 25px;
    margin-bottom: 12px;
    border-radius: 6px;
    font-size: 1.2rem;
    user-select: none;
}

.captcha-checkbox {
    display: flex;
    align-items: center;
    padding: 10px;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.captcha-checkbox:hover {
    background: #f5f5f5;
}

.captcha-checkbox .checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 3px;
    margin-right: 10px;
    position: relative;
    transition: all 0.2s ease;
}

.captcha-checkbox input[type="checkbox"]:checked + .checkbox {
    background: #4285F4;
    border-color: #4285F4;
}

.captcha-checkbox .checkbox::after {
    content: '✓';
    position: absolute;
    color: #fff;
    font-size: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}

.captcha-checkbox input[type="checkbox"]:checked + .checkbox::after {
    display: block;
}

input[type="checkbox"]:checked ~ .checkbox {
    animation: pulse 0.5s ease;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.captcha-checkbox span {
    color: #333;
    font-size: 14px;
    user-select: none;
}

/* Formulario de pago */
.payment-form {
    margin-top: 2rem;
    padding: 2rem;
    animation: fadeIn 0.5s ease-out;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.payment-form h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.payment-form h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff69b4, #8a2be2);
    border-radius: 3px;
}

.payment-form h2 i {
    margin-right: 0.5rem;
    color: #ff69b4;
}

.form-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.form-group {
    flex: 1;
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
}

.form-group label i {
    margin-right: 0.5rem;
    width: 20px;
    text-align: center;
    color: #ff69b4;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.9rem 1.2rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    transition: all 0.3s;
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.2);
    background: white;
}

.form-group input::placeholder {
    color: rgba(0, 0, 0, 0.4);
}

/* Campos específicos */
.phone-input-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.country-code {
    padding: 0.9rem 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    width: 120px;
    cursor: pointer;
    font-size: 1rem;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.7rem center;
    background-size: 1rem;
}

.country-code:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.2);
}

.phone-input-container input[type="tel"] {
    flex: 1;
    padding: 0.9rem 1.2rem;
}

.card-input-container {
    position: relative;
}

.card-icons {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: 8px;
}

.card-icon {
    font-size: 1.8rem;
    color: #555;
    transition: all 0.3s;
}

.fa-cc-visa {
    color: #1a1f71;
}

.fa-cc-mastercard {
    color: #eb001b;
}

.fa-cc-amex {
    color: #016fd0;
}

.fa-credit-card {
    color: #555;
}

/* Botón de confirmación */
.confirm-btn {
    position: relative;
    overflow: hidden;
    padding: 1rem 2.5rem;
    margin-top: 1rem;
    width: 100%;
    background: linear-gradient(135deg, #ff69b4 0%, #8a2be2 100%);
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
}

.confirm-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
}

.confirm-btn:active {
    transform: translateY(1px);
}

.btn-reflect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    transition: 0.7s;
}

.confirm-btn:hover .btn-reflect {
    left: 100%;
}

.confirm-btn i {
    margin-right: 0.5rem;
}

/* Footer */
footer {
    padding: 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-top: auto;
    color: white;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: white;
    font-size: 1.1rem;
}

.contact-item i {
    font-size: 1.3rem;
    color: #ff69b4;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
}

.social-links a {
    color: white;
    font-size: 1.7rem;
    transition: all 0.3s;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
}

.social-links a:hover {
    transform: translateY(-5px) scale(1.1);
    color: white;
    background: linear-gradient(135deg, rgba(255, 105, 180, 0.9) 0%, rgba(138, 43, 226, 0.9) 100%);
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
}

.copyright {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.7);
}

/* Formulario de login */
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
}

.login-form input {
    padding: 0.9rem 1.2rem;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    transition: all 0.3s;
    color: #333;
    width: 100%;
}

.login-form input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(173, 216, 230, 0.5);
    background: white;
}

/* Responsive */
@media (max-width: 768px) {
    .form-row {
        flex-direction: column;
        gap: 0;
    }
    
    nav ul li {
        margin-left: 1rem;
    }
    
    .main-text {
        padding: 1.5rem;
    }
    
    .plan {
        padding: 1.2rem;
    }
    
    .plan-toggle {
        padding: 0.7rem 0.8rem;
        font-size: 0.9rem;
    }
    
    .pricing-plans {
        flex-direction: column;
        align-items: center;
    }
    
    .plan-option {
        width: 100%;
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    header {
        flex-direction: column;
        padding: 1rem;
    }
    
    nav ul {
        margin-top: 1rem;
    }
    
    nav ul li {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    
    .content {
        padding: 1rem;
    }
    
    .phone-input-container {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .country-code {
        width: 100%;
    }
    
    .social-links a {
        width: 40px;
        height: 40px;
        font-size: 1.4rem;
    }
}

/* Animaciones adicionales */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

.floating {
    animation: float 6s ease-in-out infinite;
}

/* Efectos de focus para accesibilidad */
:focus-visible {
    outline: 3px solid #ff69b4;
    outline-offset: 2px;
}

/* Modo de alto contraste */
@media (prefers-contrast: more) {
    .glass {
        background: rgba(255, 255, 255, 0.3) !important;
        border: 2px solid white !important;
    }
    
    .btn {
        border: 2px solid white !important;
    }
}

/* Reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
