document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const messageList = document.getElementById("messageList");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            // Crear un nuevo elemento para el mensaje
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            messageDiv.textContent = messageText;

            // Añadir el mensaje a la lista
            messageList.appendChild(messageDiv);

            // Limpiar el campo de entrada
            messageInput.value = "";
        }
    });
});
