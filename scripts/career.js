const form = document.querySelector("form");


function validateField(field) {
    const group = field.closest(".form-group");
    const errorEl = group.querySelector(".error-message")
    
  if (!field.validity.valid) {
        if (errorEl) {
            if (field.type === "file" && field.validity.valueMissing) {
                errorEl.textContent = "Bitte laden Sie Ihren Lebenslauf hoch.";
            } else {
                errorEl.textContent = field.dataset.error || "Ungültige Eingabe.";
            }
        } 
    } else {
        if(errorEl) {
            errorEl.textContent = "";
        }
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    const fields = form.querySelectorAll("input, select")
    fields.forEach((field) => {
            console.log(field.name);
            const fieldValid = validateField(field);
        if(!fieldValid) {
            isValid = false
        }
    })
    

})