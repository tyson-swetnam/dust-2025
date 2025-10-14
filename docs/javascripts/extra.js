/* Custom JavaScript for DUST 2025 Open Science Training */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add "Copy to clipboard" functionality enhancement
  // (Material theme already includes this, but we can enhance it)
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    block.addEventListener('copy', function() {
      // Could add analytics or user feedback here
      console.log('Code copied to clipboard');
    });
  });

  // Track lesson progress (optional - stores in localStorage)
  const lessonLinks = document.querySelectorAll('a[href*="lesson"]');
  lessonLinks.forEach(link => {
    link.addEventListener('click', function() {
      const lessonUrl = this.getAttribute('href');
      const visited = JSON.parse(localStorage.getItem('visitedLessons') || '[]');
      if (!visited.includes(lessonUrl)) {
        visited.push(lessonUrl);
        localStorage.setItem('visitedLessons', JSON.stringify(visited));
      }
    });
  });

  // Add keyboard shortcuts for navigation
  document.addEventListener('keydown', function(e) {
    // Alt + N for next page
    if (e.altKey && e.key === 'n') {
      const nextButton = document.querySelector('.md-footer__link--next');
      if (nextButton) {
        e.preventDefault();
        nextButton.click();
      }
    }
    // Alt + P for previous page
    if (e.altKey && e.key === 'p') {
      const prevButton = document.querySelector('.md-footer__link--prev');
      if (prevButton) {
        e.preventDefault();
        prevButton.click();
      }
    }
    // Alt + H for home
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      window.location.href = '/';
    }
  });

  // Expand/collapse functionality removed per user request
  // (Previously added "Expand All" / "Collapse All" buttons)

  // Reading time estimator
  function estimateReadingTime() {
    const content = document.querySelector('.md-content__inner');
    if (content) {
      const text = content.textContent || '';
      const wordCount = text.trim().split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Average reading speed

      const indicator = document.createElement('div');
      indicator.style.cssText = 'font-size: 0.85rem; color: var(--md-default-fg-color--light); margin-bottom: 1rem;';
      indicator.innerHTML = `<em>Estimated reading time: ${readingTime} minutes</em>`;

      const firstHeading = content.querySelector('h1');
      if (firstHeading && firstHeading.nextSibling) {
        firstHeading.parentNode.insertBefore(indicator, firstHeading.nextSibling);
      }
    }
  }

  // Add reading time to lesson pages
  if (window.location.pathname.includes('lesson')) {
    estimateReadingTime();
  }

  // Print-friendly version button
  function addPrintButton() {
    const toolbar = document.querySelector('.md-header__topic');
    if (toolbar && !document.getElementById('print-button')) {
      const printBtn = document.createElement('button');
      printBtn.id = 'print-button';
      printBtn.className = 'md-button';
      printBtn.innerHTML = '🖨️ Print';
      printBtn.style.cssText = 'position: absolute; right: 1rem; top: 0.5rem;';
      printBtn.onclick = () => window.print();
      toolbar.style.position = 'relative';
      toolbar.appendChild(printBtn);
    }
  }

  // Add print button on lesson pages
  if (window.location.pathname.includes('lesson')) {
    addPrintButton();
  }

  // Analytics for self-assessment completion (privacy-respecting)
  const quizQuestions = document.querySelectorAll('details > summary');
  quizQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Could track quiz interaction here (without collecting PII)
      console.log('Quiz question interacted with');
    });
  });

  // Accessibility: Announce page changes for screen readers
  const announcer = document.createElement('div');
  announcer.setAttribute('role', 'status');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
  document.body.appendChild(announcer);

  // Announce navigation
  window.addEventListener('popstate', function() {
    announcer.textContent = 'Page changed. ' + document.title;
  });

  // Add skip-to-content link for keyboard navigation
  if (!document.getElementById('skip-to-content')) {
    const skipLink = document.createElement('a');
    skipLink.id = 'skip-to-content';
    skipLink.className = 'skip-to-content';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Mark main content for skip link
  const mainContent = document.querySelector('.md-content');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
    mainContent.setAttribute('tabindex', '-1');
  }

});

// Console message for developers
console.log('%cDUST 2025 Open Science Training', 'font-size: 20px; font-weight: bold; color: #3f51b5;');
console.log('%cBuilt with MkDocs Material', 'font-size: 14px; color: #666;');
console.log('%cSource: https://github.com/tswetnam/dust-2025', 'font-size: 12px; color: #999;');
console.log('%cLicense: CC-BY 4.0', 'font-size: 12px; color: #999;');
