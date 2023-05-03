const ShowElement = (el = []) => {
  for (let i = 0; i < el.length; i += 1) {
    el[i].style.display = 'block';
  }
};

const HideElement = (el = []) => {
  for (let i = 0; i < el.length; i += 1) {
    el[i].style.display = 'none';
  }
};

export { ShowElement, HideElement };