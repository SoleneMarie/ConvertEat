export const hover = (triggerSelector, targetSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);
  const target = document.getElementById(targetSelector);

  const styles = getComputedStyle(document.documentElement);
  const hoverColor = styles.getPropertyValue("--button-hover-color").trim();
  const initialColor = styles.getPropertyValue("--legal-mention-color").trim();

  triggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", function () {
      target.style.color = hoverColor; // Change la couleur du texte quand on survole l'image
    });

    trigger.addEventListener("mouseleave", function () {
      target.style.color = initialColor; // Restaure la couleur initiale quand la souris quitte l'image
    });
  });
};
