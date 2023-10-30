const el = document.getElementById("origamid")

if (el instanceof HTMLAnchorElement)
  el.href = el.href.replace("http://", "https://")
