// Require both choices before revealing tutorial steps. Keep choices per page.
const choices = document.querySelectorAll('[data-tutorial-choice]');

if (choices.length) {
  const selected = {};

  function updateGuide() {
    document.querySelectorAll('[data-platform-guide]').forEach((guide) => {
      guide.hidden = !(selected.platform && selected['work-location']);
    });
    document.querySelectorAll('[data-platform]').forEach((section) => {
      section.hidden = section.dataset.platform !== selected.platform;
    });
    document.querySelectorAll('[data-work-location]').forEach((section) => {
      section.hidden = section.dataset.workLocation !== selected['work-location'];
    });

    // Derive the contents from visible headings so their labels stay in sync.
    document.querySelectorAll('[data-tutorial-contents]').forEach((contents) => {
      contents.replaceChildren();
      const guide = contents.closest('[data-platform-guide]');
      guide.querySelectorAll('h2[id]').forEach((heading) => {
        if (heading.closest('[hidden]')) return;
        const label = heading.cloneNode(true);
        label.querySelectorAll('.anchor-link').forEach((anchor) => anchor.remove());
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = label.textContent.replace(/^\d+\.\s*/, '');
        const item = document.createElement('li');
        item.append(link);
        contents.append(item);
      });
    });
  }

  choices.forEach((choice) => {
    choice.querySelectorAll('input').forEach((input) => {
      input.checked = false;
      input.addEventListener('change', () => {
        selected[input.name] = input.value;
        updateGuide();
      });
    });
    choice.hidden = false;
  });
  updateGuide();
  document.querySelectorAll('[data-platform-fallback]').forEach((message) => {
    message.hidden = true;
  });
}
