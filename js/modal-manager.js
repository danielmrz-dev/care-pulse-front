const dialog = document.querySelector("[data-id='modal']");
const button = document.querySelector("[data-id='open-modal']");
const closeModalButton = document.querySelector("[data-id='close-modal']");

button?.addEventListener("click", () => {
  console.log("logou");
  dialog.showModal();
});

closeModalButton?.addEventListener("click", () => {
  dialog.close();
});

export function showModal() {
  dialog.showModal();
}

export function closeModal() {
  dialog.close();
}