
document.addEventListener('DOMContentLoaded', function () {



   
    var cat = document.getElementById('contactosc');

    // Asegurar que el elemento con ID "catalogoc" existe
        if (cat) {
            cat.classList.add('active'); // Agrega la clase "active" al elemento específico
    
            // Selecciona todos los elementos con la clase "navselect"
            var navItems = document.querySelectorAll('.navselect');
    
            // Recorre todos los elementos y elimina la clase "active" excepto en "catalogoc"
            navItems.forEach(function(item) {
                if (item !== cat) {
                    item.classList.remove('active');
                }
            });
        }
    


   
    const form = document.getElementById('feedbackForm');

    const thankYou = document.querySelector('.thank-you');
    
    // Handle rating buttons
    document.querySelectorAll('.rating-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const group = e.target.closest('.rating-group');
            group.querySelectorAll('.rating-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            e.target.classList.add('selected');
        });
    });

    // Update progress bar as user fills out form
    const updateProgress = () => {
        const totalFields = form.querySelectorAll('input, select, textarea').length;
        const filledFields = [...form.querySelectorAll('input, select, textarea')].filter(field => {
            if (field.type === 'checkbox') return field.checked;
            return field.value.trim() !== '';
        }).length;
        
        const progress = (filledFields / totalFields) * 100;
    
    };

    form.addEventListener('input', updateProgress);

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Add rating values
        document.querySelectorAll('.rating-group').forEach(group => {
            const selected = group.querySelector('.selected');
            if (selected) {
                data[group.dataset.rating] = selected.dataset.value;
            }
        });

        // Here you would typically send the data to your server
        console.log('Form data:', data);

        // Show thank you message
        form.style.display = 'none';
        thankYou.style.display = 'block';
        thankYou.classList.add('animate-in');
    });

    // Add animation classes to sections as they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

})
