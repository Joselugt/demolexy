document.addEventListener('DOMContentLoaded', function() {
    // Elementos de efecto de luz
    const lightEffect = document.querySelector('.light-effect');
    const lightEffect2 = document.querySelector('.light-effect-2');
    const lightEffect3 = document.querySelector('.light-effect-3');

    // Navegación entre secciones
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = {
        'home': document.getElementById('home-section'),
        'pricing': document.getElementById('pricing-section'),
        'login': document.getElementById('login-section')
    };

    // Función para cambiar de sección
    function switchSection(targetSection) {
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });
        targetSection.style.display = 'block';
    }

    // Configurar navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const section = this.getAttribute('data-section');
            switchSection(sections[section]);
        });
    });

    // Efecto de luz que sigue el puntero
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        lightEffect.style.left = `${x}px`;
        lightEffect.style.top = `${y}px`;
        
        setTimeout(() => {
            lightEffect2.style.left = `${x}px`;
            lightEffect2.style.top = `${y}px`;
        }, 100);
        
        setTimeout(() => {
            lightEffect3.style.left = `${x}px`;
            lightEffect3.style.top = `${y}px`;
        }, 200);
    });

    // Selección de plan y formulario de pago
    const planRadios = document.querySelectorAll('.plan-radio');
    const selectPlanBtn = document.getElementById('select-plan-btn');
    const paymentForm = document.getElementById('payment-form');
    const checkoutForm = document.getElementById('checkout-form');
    const registerLink = document.getElementById('register-link');

    // Validación del campo de teléfono (solo números)
    document.getElementById('phone').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });

    // Mostrar formulario de pago al seleccionar plan
    selectPlanBtn.addEventListener('click', function() {
        if(!document.querySelector('.plan-radio:checked')) {
            alert('Por favor selecciona un plan antes de continuar');
            return;
        }
        
        paymentForm.style.display = 'block';
        paymentForm.scrollIntoView({ behavior: 'smooth' });
    });

    // Redirigir al formulario de pago desde "Regístrate aquí"
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="pricing"]').classList.add('active');
        switchSection(sections['pricing']);
        
        // Simular selección del plan básico
        document.getElementById('basic-plan').checked = true;
        selectPlanBtn.disabled = false;
        
        // Mostrar directamente el formulario de pago
        paymentForm.style.display = 'block';
        paymentForm.scrollIntoView({ behavior: 'smooth' });
    });

    // Validación del formulario de pago
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar teléfono
        const phone = document.getElementById('phone').value;
        if(!/^\d+$/.test(phone)) {
            alert('Por favor ingresa solo números en el campo de teléfono');
            return;
        }
        
        // Validar número de tarjeta
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        if(!/^\d{13,16}$/.test(cardNumber)) {
            alert('Por favor ingresa un número de tarjeta válido (13-16 dígitos)');
            return;
        }
        
        // Validar fecha de vencimiento
        const expiry = document.getElementById('expiry').value;
        if(!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry)) {
            alert('Por favor ingresa una fecha de vencimiento válida (MM/AA)');
            return;
        }
        
        // Validar CVV
        const cvv = document.getElementById('cvv').value;
        if(!/^\d{3,4}$/.test(cvv)) {
            alert('Por favor ingresa un CVV válido (3-4 dígitos)');
            return;
        }
        
        // Simular procesamiento de pago
        alert('¡Pago procesado con éxito! Gracias por tu compra.');
        
        // Resetear formulario
        checkoutForm.reset();
        paymentForm.style.display = 'none';
        document.querySelector('.plan-radio:checked').checked = false;
    });

    // Formatear número de tarjeta
    document.getElementById('card-number').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = value.substring(0, 19);
    });

    // Formatear fecha de vencimiento
    document.getElementById('expiry').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if(value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value.substring(0, 5);
    });

    // Formatear CVV
    document.getElementById('cvv').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '').substring(0, 4);
    });

    // Manejo del formulario de login
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Inicio de sesión simulado. En una implementación real, esto enviaría los datos al servidor.');
        });
    }
});