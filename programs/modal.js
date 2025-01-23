export const modal = () => {
  const modalElement = document.getElementById("modalMentions");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closePrivacyModal");

  // Function to change modal content according to the chosen language
  const switchLanguageContent = () => {
    const frenchContent = document.getElementById("mentions-legales-fr");
    const englishContent = document.getElementById("mentions-legales-en");

    if (document.getElementById("fr").classList.contains("selected")) {
      frenchContent.style.display = "block";
      englishContent.style.display = "none";
    } else {
      frenchContent.style.display = "none";
      englishContent.style.display = "block";
    }
  };

  return { modalElement, openModal, closeModal, switchLanguageContent };
};
