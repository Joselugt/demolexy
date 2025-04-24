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

    // Toggle entre planes mensuales/anuales
    const monthlyToggle = document.getElementById('monthly-toggle');
    const annualToggle = document.getElementById('annual-toggle');
    const monthlyPlans = document.querySelector('.monthly-plans');
    const annualPlans = document.querySelector('.annual-plans');

    monthlyToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            annualToggle.classList.remove('active');
            monthlyPlans.style.display = 'flex';
            annualPlans.style.display = 'none';
        }
    });

    annualToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            monthlyToggle.classList.remove('active');
            monthlyPlans.style.display = 'none';
            annualPlans.style.display = 'flex';
            annualPlans.style.animation = 'fadeIn 0.5s ease-out';
        }
    });

    // Selección de plan y formulario de pago
    const selectPlanBtn = document.getElementById('select-plan-btn');
    const paymentForm = document.getElementById('payment-form');
    const checkoutForm = document.getElementById('checkout-form');
    const registerLink = document.getElementById('register-link');

    // Mostrar formulario de pago al seleccionar plan
    selectPlanBtn.addEventListener('click', function() {
        if (!document.querySelector('.plan-radio:checked')) {
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
        document.getElementById('basic-plan-monthly').checked = true;
        selectPlanBtn.disabled = false;
        
        // Mostrar directamente el formulario de pago
        paymentForm.style.display = 'block';
        paymentForm.scrollIntoView({ behavior: 'smooth' });
    });

    // Validación del campo de teléfono
    document.getElementById('phone').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });

    // Detección del tipo de tarjeta
    const cardNumberInput = document.getElementById('card-number');
    const visaIcon = document.getElementById('visa-icon');
    const mastercardIcon = document.getElementById('mastercard-icon');
    const amexIcon = document.getElementById('amex-icon');
    const genericCardIcon = document.getElementById('generic-card');

    cardNumberInput.addEventListener('input', function(e) {
        // Formatear número de tarjeta
        let value = this.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        this.value = value.substring(0, 19);
        
        // Determinar el tipo de tarjeta
        const cardType = detectCardType(value);
        updateCardIcons(cardType);
    });

    function detectCardType(cardNumber) {
        // Visa: empieza con 4
        if (/^4/.test(cardNumber)) {
            return 'visa';
        }
        // Mastercard: empieza con 51-55 o 2221-2720
        else if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
            return 'mastercard';
        }
        // American Express: empieza con 34 o 37
        else if (/^3[47]/.test(cardNumber)) {
            return 'amex';
        }
        return 'generic';
    }

    function updateCardIcons(cardType) {
        // Ocultar todos los iconos primero
        visaIcon.style.display = 'none';
        mastercardIcon.style.display = 'none';
        amexIcon.style.display = 'none';
        genericCardIcon.style.display = 'none';

        // Mostrar solo el icono correspondiente
        switch(cardType) {
            case 'visa':
                visaIcon.style.display = 'inline-block';
                visaIcon.style.color = '#1a1f71';
                break;
            case 'mastercard':
                mastercardIcon.style.display = 'inline-block';
                mastercardIcon.style.color = '#eb001b';
                break;
            case 'amex':
                amexIcon.style.display = 'inline-block';
                amexIcon.style.color = '#016fd0';
                break;
            default:
                genericCardIcon.style.display = 'inline-block';
        }
    }

    // Manejar clic en el CAPTCHA
    document.querySelector('.captcha-checkbox').addEventListener('click', function() {
        const checkbox = document.getElementById('captcha-check');
        checkbox.checked = !checkbox.checked;
        
        // Actualizar visualmente el checkbox
        const checkboxVisual = this.querySelector('.checkbox');
        if (checkbox.checked) {
            checkboxVisual.style.background = '#4285F4';
            checkboxVisual.style.borderColor = '#4285F4';
        } else {
            checkboxVisual.style.background = '';
            checkboxVisual.style.borderColor = '#ccc';
        }
    });

    // Formatear fecha de vencimiento
    document.getElementById('expiry').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value.substring(0, 5);
    });

    // Formatear CVV
    document.getElementById('cvv').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '').substring(0, 4);
    });

    // Validación del formulario de pago
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar CAPTCHA
        const captchaChecked = document.getElementById('captcha-check').checked;
        if (!captchaChecked) {
            alert('Por favor marca la casilla "No soy un robot"');
            return;
        }
        
        // Validar teléfono
        const phone = document.getElementById('phone').value;
        const countryCode = document.getElementById('country-code').value;
        if (!/^\d+$/.test(phone)) {
            alert('Por favor ingresa solo números en el campo de teléfono');
            return;
        }
        
        // Validar número de tarjeta
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        if (!/^\d{13,16}$/.test(cardNumber)) {
            alert('Por favor ingresa un número de tarjeta válido (13-16 dígitos)');
            return;
        }
        
        // Validar fecha de vencimiento
        const expiry = document.getElementById('expiry').value;
        if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry)) {
            alert('Por favor ingresa una fecha de vencimiento válida (MM/AA)');
            return;
        }
        
        // Validar CVV
        const cvv = document.getElementById('cvv').value;
        if (!/^\d{3,4}$/.test(cvv)) {
            alert('Por favor ingresa un CVV válido (3-4 dígitos)');
            return;
        }
        
        // Obtener plan seleccionado
        const selectedPlan = document.querySelector('.plan-radio:checked').value;
        const isAnnual = selectedPlan.includes('annual');
        const planType = isAnnual ? 'Anual' : 'Mensual';
        
        // Simular procesamiento de pago
        alert(`¡Pago procesado con éxito! Plan: ${selectedPlan.replace('-monthly', '').replace('-annual', '')} ${planType}`);
        
        // Resetear formulario
        checkoutForm.reset();
        document.getElementById('captcha-check').checked = false;
        document.querySelector('.checkbox').style.background = '';
        document.querySelector('.checkbox').style.borderColor = '#ccc';
        paymentForm.style.display = 'none';
        document.querySelector('.plan-radio:checked').checked = false;
    });

    // Manejo del formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Inicio de sesión simulado. En una implementación real, esto enviaría los datos al servidor.');
        });
    }

    // Prevenir doble envío del formulario
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
            }
        });
    });
});
