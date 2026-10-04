// localStorage.removeItem("eventhub_events");

let events = JSON.parse(localStorage.getItem("eventhub_events")) || [
  {
    id: 1,
    title: "JavaScript Workshop",
    description: "Grundlagen von JavaScript für Anfänger und Fortgeschrittene.",
    date: "2026-10-15",
    time: "14:00",
    location: "Duisburg",
    category: "Workshop",
    status: "Offen",
    currentParticipants: 14,
    maxParticipants: 20,
  },
  {
    id: 2,
    title: "Web Development Meetup",
    description: "Austausch und Networking für Webentwickler.",
    date: "2026-11-25",
    time: "18:30",
    location: "Dortmund",
    category: "Meetup",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 30,
  },

  {
    id: 3,
    title: "IT-Sicherheit Schulung",
    description: "Schulung zu IT-Sicherheitsthemen.",
    date: "2026-11-21",
    time: "09:30",
    location: "Bonn",
    category: "Schulung",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 25,
  },

  {
    id: 4,
    title: "Business Networking Event",
    description: "Kontakte knüpfen und Geschäftsmöglichkeiten .",
    date: "2026-11-01",
    time: "16:30",
    location: "Köln",
    category: "Networking",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 50,
  },
  {
    id: 5,
    title: "React Networking Meetup",
    description: "Austausch über moderne Frontend-Entwicklung und Frameworks.",
    date: "2026-12-01",
    time: "18:30",
    location: "Frankfurt",
    category: "Meetup",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 50,
  },
  {
    id: 6,
    title: "Python Coding Workshop",
    description: "Austausch über moderne Frontend-Entwicklung und Frameworks.",
    date: "2026-12-04",
    time: "15:30",
    location: "Frankfurt",
    category: "Workshop",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 25,
  },
];

const eventsContainer = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const sortFilter = document.getElementById("sortFilter");

function renderEvents(eventsToDisplay) {
  eventsContainer.innerHTML = null;

  eventsToDisplay.forEach((item) => {
    const card = generate_event_card(item);
    eventsContainer.appendChild(card);
  });
}

function generate_event_card(eventItem) {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    status,
    currentParticipants,
    maxParticipants,
  } = eventItem;

  const card = document.createElement("div");

  card.classList.add(
    "card",
    "bg-base-100",
    "shadow-xl",
    "border",
    "border-base-200",
  );

  const card_body = document.createElement("div");
  card_body.classList.add("card-body");
  card.appendChild(card_body);

  const header = document.createElement("div");
  header.classList.add("flex", "justify-between", "items-start");
  card_body.appendChild(header);

  const h2 = document.createElement("h2");
  h2.classList.add("card-title", "text-lg", "font-bold");
  h2.innerText = title;
  header.appendChild(h2);

  const category_badge = document.createElement("span");
  category_badge.classList.add("badge");
  if (category === "Workshop") {
    category_badge.classList.add("badge-primary");
  } else if (category === "Meetup") {
    category_badge.classList.add("badge-secondary");
  } else if (category === "Schulung") {
    category_badge.classList.add("badge-accent");
  }
  if (category === "Networking") {
    category_badge.classList.add("badge-info");
  }
  if (category === "Intern") {
    category_badge.classList.add("badge-neutral");
  }
  category_badge.innerText = category;
  header.appendChild(category_badge);

  const p = document.createElement("p");
  p.classList.add("text-sm", "text-gray-500");
  p.innerText = description;
  card_body.appendChild(p);

  const info = document.createElement("div");
  info.classList.add("text-xs", "space-y-1", "my-2", "text-gray-600");
  card_body.appendChild(info);

  const date_text = document.createElement("p");
  date_text.innerText = `📅 ${new Date(date).toLocaleDateString("de-DE")} • ${time} Uhr`;
  info.appendChild(date_text);

  const location_text = document.createElement("p");
  location_text.innerText = `📍${location}`;
  info.appendChild(location_text);

  const participant_container = document.createElement("div");
  participant_container.classList.add("mt-2");
  card_body.appendChild(participant_container);

  const participant_header = document.createElement("div");
  participant_header.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "text-xs",
    "mb-1",
  );
  participant_container.appendChild(participant_header);

  const status_badge = document.createElement("span");
  status_badge.classList.add("badge", "badge-sm");

  if (status === "Offen") {
    status_badge.classList.add("badge-success");
  } else if (status === "Ausgebucht") {
    status_badge.classList.add("badge-error");
  }

  status_badge.innerText = status;
  participant_header.appendChild(status_badge);

  const participant_text = document.createElement("span");
  participant_text.classList.add("font-semibold", "text-gray-600");
  participant_text.innerText = `${currentParticipants} / ${maxParticipants} Teilnehmer`;
  participant_header.appendChild(participant_text);

  const progress = document.createElement("progress");
  progress.classList.add("progress", "progress-primary", "w-full");
  progress.value = currentParticipants;
  progress.max = maxParticipants;
  participant_container.appendChild(progress);

  const card_actions = document.createElement("div");
  card_actions.classList.add(
    "card-actions",
    "justify-between",
    "items-center",
    "mt-4",
    "pt-2",
    "border-t",
    "border-base-200",
  );
  card_body.appendChild(card_actions);

  const join = document.createElement("div");
  join.classList.add("join");
  card_actions.appendChild(join);

  const btn_minus = document.createElement("button");
  btn_minus.classList.add("btn", "btn-xs", "join-item");
  btn_minus.innerText = "-";
  join.appendChild(btn_minus);

  const btn_plus = document.createElement("button");
  btn_plus.classList.add("btn", "btn-xs", "join-item");
  btn_plus.innerText = "+";
  join.appendChild(btn_plus);

  const action_buttons = document.createElement("div");
  action_buttons.classList.add("flex", "gap-2");
  card_actions.appendChild(action_buttons);

  const btn_edit = document.createElement("button");
  const bearbeitungsmodal = document.querySelector("#änderungstask_task");
  btn_edit.classList.add(
    "btn",
    "btn-square",
    "btn-ghost",
    "btn-xs",
    "text-info",
  );
  btn_edit.innerText = "✏️";

  action_buttons.appendChild(btn_edit);
  // Verknüpfen Sie die Schaltfläche „Bearbeiten“.
  btn_edit.addEventListener("click", () => {
    openEditModal(eventItem);
  });

  const btn_delete = document.createElement("button");
  btn_delete.classList.add(
    "btn",
    "btn-square",
    "btn-ghost",
    "btn-xs",
    "text-error",
  );
  btn_delete.innerText = "🗑️";
  action_buttons.appendChild(btn_delete);

  // Verbinden Sie die Schaltfläche „-“.
  btn_minus.addEventListener("click", () => {
    changeParticipantCount(id, -1);
  });

  // Verbinden Sie die Schaltfläche „+“.
  btn_plus.addEventListener("click", () => {
    changeParticipantCount(id, 1);
  });

  // Verbinden Sie die Schaltfläche „Löschen“.
  btn_delete.addEventListener("click", () => {
    deleteEvent(id);
  });
  return card;
}

renderEvents(events);

const openButton = document.querySelector("#newEvent");
const modal = document.querySelector("#new_task");

openButton.addEventListener("click", () => {
  modal.showModal();
});

function updateDashboardStats() {
  let total = 0;
  let openEvents = 0;
  let participants = 0;
  let fullEvents = 0;

  events.forEach((event) => {
    total++;

    participants += event.currentParticipants;

    if (event.status === "Offen") {
      openEvents++;
    }

    if (event.currentParticipants >= event.maxParticipants) {
      fullEvents++;
    }
  });

  document.querySelector("#stat-total").textContent = total;
  document.querySelector("#stat-open").textContent = openEvents;
  document.querySelector("#stat-participants").textContent = participants;
  document.querySelector("#stat-full").textContent = fullEvents;
}
updateDashboardStats();

function saveEventsToLocalStorage() {
  localStorage.setItem("eventhub_events", JSON.stringify(events));
}

// Filtert und sortiert die Events nach Suche, Kategorie und Status.
function filterAndSortEvents() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const selectedStatus = statusFilter.value;
  const selectedSort = sortFilter.value;

  let filteredEvents = events.filter((event) => {
    // Search filter (Title or Location or Description)
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm);

    // Category filter
    const matchesCategory =
      selectedCategory === "Alle" || event.category === selectedCategory;

    // Status filter
    const matchesStatus =
      selectedStatus === "Alle" || event.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sorting
  filteredEvents.sort((a, b) => {
    if (selectedSort === "date-asc") {
      return new Date(a.date) - new Date(b.date);
    } else if (selectedSort === "date-desc") {
      return new Date(b.date) - new Date(a.date);
    } else if (selectedSort === "title-asc") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  renderEvents(filteredEvents);
}

// Aktiviert die Event-Listener für Suchfeld und Filter-Dropdowns.
function setupSearchAndFilterListeners() {
  searchInput.addEventListener("input", filterAndSortEvents);
  categoryFilter.addEventListener("change", filterAndSortEvents);
  statusFilter.addEventListener("change", filterAndSortEvents);
  sortFilter.addEventListener("change", filterAndSortEvents);
}

// Erstellt ein neues Event aus den Formular-Eingaben im Modal.
function handleCreateEvent(e) {
  e.preventDefault();

  const form = e.target;
  const title = form.querySelector("#title").value.trim();
  const description = form.querySelector("#description").value.trim();
  const dateInput = form.querySelector("input[type='date']").value;
  const time = form.querySelector("#time").value;

  // Eingaben nach Reihenfolge in HTML abrufen
  const textInputs = form.querySelectorAll("input[type='text']");
  const location = textInputs[2] ? textInputs[2].value.trim() : "";
  const category = textInputs[3] ? textInputs[3].value.trim() : "Workshop";

  const participantsInput = form.querySelector(".join input");
  const maxParticipants = participantsInput
    ? parseInt(participantsInput.value) || 10
    : 10;

  if (!title || !dateInput || !time) {
    alert("Bitte füllen Sie alle Pflichtfelder aus!");
    return;
  }

  const newEventObj = {
    id: Date.now(),
    title: title,
    description: description,
    date: dateInput,
    time: time,
    location: location || "Unbekannt",
    category: category || "General",
    status: "Offen",
    currentParticipants: 0,
    maxParticipants: maxParticipants,
  };

  events.push(newEventObj);
  saveEventsToLocalStorage();
  filterAndSortEvents(); // oder renderEvents(events)
  updateDashboardStats();

  form.reset();
  document.querySelector("#new_task").close();
}
// //Kawa
// Ändert die Teilnehmerzahl eines Events um +1 oder -1.
function changeParticipantCount(eventId, amount) {
  // TODO: Teilnehmerzahl anpassen, speichern & neu rendern.
  const event = events.find((e) => e.id === eventId);
  if (!event) return;

  const newCount = event.currentParticipants + amount;

  if (newCount >= 0 && newCount <= event.maxParticipants) {
    event.currentParticipants = newCount;

    // Aktualisiere den Status automatisch, wenn der Zähler voll ist
    if (event.currentParticipants === event.maxParticipants) {
      event.status = "Ausgebucht";
    } else if (
      event.status === "Ausgebucht" &&
      event.currentParticipants < event.maxParticipants
    ) {
      event.status = "Offen";
    }

    saveEventsToLocalStorage();
    filterAndSortEvents();
    updateDashboardStats();
  }
}

// //Kawa
// Löscht ein Event anhand seiner ID aus dem Array.
function deleteEvent(eventId) {
  // TODO: Event entfernen, speichern & neu rendern.
  if (confirm("Möchten Sie dieses Event wirklich löschen?")) {
    events = events.filter((e) => e.id !== eventId);
    saveEventsToLocalStorage();
    filterAndSortEvents();
    updateDashboardStats();
  }
}
// 1. D Funktion zum Öffnen des Bearbeitungsmodals und Füllen der Felder mit den Daten des aktuellen Events
function openEditModal(event) {
  const modal = document.querySelector("#änderungstask_task");

  document.querySelector("#edit-id").value = event.id;
  document.querySelector("#edit-title").value = event.title;
  document.querySelector("#edit-description").value = event.description || "";
  document.querySelector("#edit-date").value = event.date;
  document.querySelector("#edit-time").value = event.time;
  document.querySelector("#edit-location").value = event.location;
  document.querySelector("#edit-category").value = event.category;
  document.querySelector("#edit-maxParticipants").value = event.maxParticipants;

  modal.showModal();
}

// 2. D Funktion zum Speichern der Änderungen beim Einreichen des Bearbeitungsformulars (Submit)
function handleEditEvent(e) {
  e.preventDefault();

  const id = parseInt(document.querySelector("#edit-id").value);
  const event = events.find((item) => item.id === id);

  if (!event) return;

  // Jeden Sie die neue Wert für die maximale Anzahl an Teilnehmern
  const newMaxParticipants = parseInt(
    document.querySelector("#edit-maxParticipants").value,
  );

  // Nachweispflicht: Es ist nicht gestattet, die maximale Anzahl an Reservierungen unter das derzeitige Limit zu senken.
  if (newMaxParticipants < event.currentParticipants) {
    alert(
      `Fehler: Die maximale Teilnehmerzahl (${newMaxParticipants}) kann nicht kleiner sein als die bereits gebuchten Plätze (${event.currentParticipants}).`,
    );
    return; // Verhindern Sie die Ausführung der Funktion und speichern Sie die Änderungen nicht.
  }

  // aktualisieren Sie die übrigen Felder
  event.title = document.querySelector("#edit-title").value.trim();
  event.description = document.querySelector("#edit-description").value.trim();
  event.date = document.querySelector("#edit-date").value;
  event.time = document.querySelector("#edit-time").value;
  event.location = document.querySelector("#edit-location").value.trim();
  event.category = document.querySelector("#edit-category").value.trim();

  // aktualisieren Sie die Benutzeroberfläche
  event.maxParticipants = newMaxParticipants;

  // Finden der passenden Event-Status nach Änderung des maximalen Teilnehmerzahls
  if (event.currentParticipants >= event.maxParticipants) {
    event.status = "Ausgebucht";
  } else if (
    event.status === "Ausgebucht" &&
    event.currentParticipants < event.maxParticipants
  ) {
    event.status = "Offen";
  }

  // Speichern und aktualisieren Sie die Benutzeroberfläche
  saveEventsToLocalStorage();
  filterAndSortEvents();
  updateDashboardStats();

  // Modul schließen
  document.querySelector("#änderungstask_task").close();
}

// 3. Ereignisverknüpfung zum Modifikationsmodell
const editEventForm = document.querySelector("#edit-task-form");
if (editEventForm) {
  editEventForm.addEventListener("submit", handleEditEvent);
}
const newEventForm = document.querySelector("#new-task-form");
if (newEventForm) {
  newEventForm.addEventListener("submit", handleCreateEvent);
}
document.addEventListener("DOMContentLoaded", () => {
  setupSearchAndFilterListeners();
  filterAndSortEvents();
  updateDashboardStats();
});
