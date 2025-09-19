const form = document.querySelector("form");

function validateField(field) {
  const group = field.closest(".form-group");
  const errorEl = group.querySelector(".error-message");

  if (field.type === "file") {
    // Case 1: no file selected but required
    if (field.required && field.validity.valueMissing) {
      if (errorEl)
        errorEl.textContent = "Bitte laden Sie Ihren Lebenslauf hoch.";
      return false;
    }

    // Case 2: wrong file type (but only if a file is selected)
    if (field.files.length > 0 && !validateFile(field)) {
      if (errorEl) errorEl.textContent = "Bitte nur PDF hochladen.";
      field.value = "";
      return false;
    }
  }

  // For text/other inputs
  const value = field.value.trim();

  if (value.length === 0 && field.required) {
    if (errorEl) errorEl.textContent = "Dieses Feld darf nicht leer sein.";
    return false;
  }

  if (value.length < 2 && field.required) {
    if (errorEl) errorEl.textContent = "Mindestens 2 Zeichen erforderlich.";
    return false;
  }

  // Fallback to HTML5 validation if needed
  if (!field.validity.valid) {
    if (errorEl)
      errorEl.textContent = field.dataset.error || "Ungültige Eingabe.";
    return false;
  }

  // If everything is fine
  if (errorEl) errorEl.textContent = "";
  return true;
}

form.querySelectorAll("input").forEach((input) => {
  if (input.type === "file") {
    input.addEventListener("change", () => {
      validateField(input);
    });
  } else {
    input.addEventListener("blur", () => {
      validateField(input);
    });
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;
  let firstInvalidField = null;

  const fields = form.querySelectorAll("input, select");
  fields.forEach((field) => {
    const fieldValid = validateField(field);
    if (!fieldValid) {
      isValid = false;
      if (!firstInvalidField) {
        firstInvalidField = field; // remember the first invalid
      }
    }
  });

  if (isValid) {
    showDialog();
    // form.reset();
  } else {
    firstInvalidField.focus();
  }
});

function validateFile(field) {
  if (!field.files || field.files.length === 0) {
    return false;
  }

  const allowedExtensions = ["pdf"];

  const file = field.files[0];
  const fileName = file.name.toLowerCase();
  const extension = fileName.split(".").pop();
  return allowedExtensions.includes(extension);
}

const dialog = document.getElementById("dataDialog");
const dialogContent = document.getElementById("dialogContent");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

// Collect form data
function showDialog() {
  const formData = new FormData(form);
  let html = "";
  formData.forEach((value, key) => {
    if (value instanceof File && value.name) {
      html += `<p><strong>${key}:</strong> ${value.name}</p>`;
    } else {
      html += `<p><strong>${key}:</strong> ${value}</p>`;
    }
  });
  
    dialogContent.innerHTML = html;
    dialog.showModal();
}

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", () => {
  dialog.close();
  form.submit(); // Actually submit form after confirmation
});
