// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
        return;
      }

      if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        msg.textContent = "Invalid email format.";
        msg.style.color = "red";
        return;
      }

      msg.textContent = "Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    });
  }
});

// To-Do List Functions
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    input.value = "";
  }
}
