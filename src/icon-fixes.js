const ICONS = {
  "↗": {
    name: "external",
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
  },
  "→": {
    name: "right",
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
  },
  "▶": {
    name: "play",
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m8 5 11 7-11 7Z"/></svg>',
  },
};

const ICON_PATTERN = /[↗→▶]/g;

function createIcon(char) {
  const config = ICONS[char];
  const icon = document.createElement("span");
  icon.className = `site-inline-icon site-inline-icon--${config.name}`;
  icon.dataset.siteIcon = config.name;
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = config.svg;
  return icon;
}

function replaceTextNode(node) {
  const value = node.nodeValue;
  if (!value || !ICON_PATTERN.test(value)) {
    ICON_PATTERN.lastIndex = 0;
    return;
  }
  ICON_PATTERN.lastIndex = 0;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;

  value.replace(ICON_PATTERN, (char, index) => {
    if (index > lastIndex) {
      fragment.append(document.createTextNode(value.slice(lastIndex, index)));
    }
    fragment.append(createIcon(char));
    lastIndex = index + char.length;
    return char;
  });

  if (lastIndex < value.length) {
    fragment.append(document.createTextNode(value.slice(lastIndex)));
  }

  node.replaceWith(fragment);
}

function processNode(root) {
  if (!root || root.nodeType !== Node.ELEMENT_NODE) return;
  if (root.matches?.("[data-site-icon], svg, script, style, textarea, input")) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("[data-site-icon], svg, script, style, textarea, input")) {
        return NodeFilter.FILTER_REJECT;
      }
      return /[↗→▶]/.test(node.nodeValue || "")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const matches = [];
  while (walker.nextNode()) matches.push(walker.currentNode);
  matches.forEach(replaceTextNode);
}

export function installIconFixes() {
  const root = document.getElementById("root");
  if (!root) return;

  processNode(root);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (/[↗→▶]/.test(node.nodeValue || "")) replaceTextNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          processNode(node);
        }
      }
    }
  });

  observer.observe(root, { childList: true, subtree: true });
}
