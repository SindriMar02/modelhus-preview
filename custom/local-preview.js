// Preview forms never send data to the template author's Webflow account.
document.addEventListener('submit', event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  let status = form.querySelector('[data-local-status]');
  if (!status) {
    status = document.createElement('p');
    status.dataset.localStatus = '';
    status.setAttribute('role', 'status');
    status.style.cssText = 'margin-top:1em;font:inherit';
    form.append(status);
  }
  status.textContent = 'Local preview: your information has not been sent. Connect your own form endpoint before publishing.';
}, true);
