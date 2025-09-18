const form = document.querySelector("form");


function validateField(field) {
    const group = field.closest(".form-group");
    const errorEl = group?.querySelector(".error-message");

    if (field.type === "file") {
        // Case 1: no file selected but required
        if (field.validity.valueMissing) {
            if (errorEl) errorEl.textContent = "Bitte laden Sie Ihren Lebenslauf hoch.";
            return false;
        }

        // Case 2: wrong file type
        if (!validateFile(field)) {
            if (errorEl) errorEl.textContent = "Bitte nur xls, xlsx, ods, pdf, jpeg, jpg, gif oder png hochladen.";
            return false;
        }

        // Case 3: valid
        if (errorEl) errorEl.textContent = "";
        return true;
    }

    // All other input types
    if (!field.validity.valid) {
        if (errorEl) errorEl.textContent = field.dataset.error || "Ungültige Eingabe.";
        return false;
    } else {
        if (errorEl) errorEl.textContent = "";
        return true;
    }
}


form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", () => {
            validateField(input)
    })
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    const fields = form.querySelectorAll("input, select")
    fields.forEach((field) => {
            console.log(field.value);
            const fieldValid = validateField(field);
        if(!fieldValid) {
            isValid = false
        }
    });
    console.log(isValid);
    
    if(isValid) {
        form.reset();
    } else {
        form.querySelector(":invalid").focus();
    }
});

function validateFile(field) {
    if(!field.files || field.files.length === 0) {
        return false;
    }
    
    const allowedExtensions = [
    "xls", "xlsx", "ods", "pdf",
    "jpeg", "jpg", "gif", "png"
    ];

    const file = field.files[0];
    const fileName = file.name.toLowerCase();
    const extension = fileName.split(".").pop();
    return allowedExtensions.includes(extension)

}