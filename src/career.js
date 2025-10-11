import { API_BASE_URL, APPLY_URL } from "./config";

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

export function getInputCareerValue() {
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
}


export function submitApply() {
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
    } else {
      firstInvalidField.focus();
    }
  });
}

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

const dialog = document.querySelector(".dialog");
const dialogContent = document.querySelector(".dialog-content");
const cancelBtn = document.querySelectorAll(".cancel-button");
const confirmBtn = document.querySelector(".confirm-button");

const labels = {
  "title": "Anrede",
  "first-name": "Vorname",
  "last-name": "Nachname",
  "email": "E-Mail-Adresse",
  "phonenumber": "Telefonnummer",
  "file": "Lebenslauf",
  "file2": "Andere Anhänge",
  "file3": "Andere Anhänge",
  "checkbox": "Datenschutzerklärung"
};


// Collect form data
function showDialog() {
  const formData = new FormData(form);
  let html = "";
  formData.forEach((value, key) => {
     const label = labels[key] || key;
    
    if (key === "checkbox") {
      html += `<p><strong class="title">${label}:</strong> bestätigt</p>`;
    } else if (value instanceof File) {
      if (value.name) {
        html += `<p><strong class="title">${label}:</strong> ${value.name}</p>`;
      }
    } else {
      html += `<p><strong class="title">${label}:</strong> ${value}</p>`;
    }
  });
  
    dialogContent.innerHTML = html;
    dialog.showModal();
    dialog.classList.add("opened")
}

cancelBtn.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.close();
    dialog.classList.remove("opened")
  })
})


export function confirmApply() {
    confirmBtn.addEventListener("click", () => {
        dialog.close();
        dialog.classList.remove("opened");

        const formData = new FormData(form);
        sendData(formData)
    });
}

async function sendData(formData) {
  try {
    const res = await fetch(`${API_BASE_URL}${APPLY_URL}`, {
        method: "POST",
        body: formData,
    });
    const firstname = formData.get("first-name"); 

    if (!res.ok) {
      location.href = "error.html";
      return
    }

    form.reset();
    location.href = `confirmation.html?firstname=${encodeURIComponent(firstname)}`;

  } catch (error) {
      location.href = "error.html";
  }
}
