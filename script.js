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
    title: "React Networking Meetup",
    description: "Austausch über moderne Frontend-Entwicklung und Frameworks.",
    date: "2026-11-01",
    time: "18:30",
    location: "Frankfurt",
    category: "Meetup",
    status: "Offen",
    currentParticipants: 10,
    maxParticipants: 10,
  },
];

const eventsContainer = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const sortFilter = document.getElementById("sortFilter");

const createEventForm = document.getElementById("createEventForm");
const createModal = document.getElementById("create_event_modal");

// //Yulia
// Zeigt die Events als Karten im HTML (#eventsContainer) an.
function renderEvents(eventsToDisplay) {
  // TODO: HTML-Karten generieren und einfügen.
}

// //Yulia
// Aktualisiert die 4 Zahlen in den Statistik-Karten oben.
function updateDashboardStats() {
  // TODO: Statistiken berechnen und im DOM anzeigen.
}

// //Yulia
// das ist schon implementiert, du musst es nur aufrufen, wenn sich die events ändern
// Speichert das `events`-Array im localStorage.
function saveEventsToLocalStorage() {
  // TODO: events mit JSON.stringify speichern.
  localStorage.setItem("eventhub_events", JSON.stringify(events));
}

// //Ayman
// Filtert und sortiert die Events nach Suche, Kategorie und Status.
function filterAndSortEvents() {
  // TODO: Array filtern/sortieren und renderEvents() aufrufen.
}

// //Kawa
// Aktiviert die Event-Listener für Suchfeld und Filter-Dropdowns.
function setupSearchAndFilterListeners() {
  // TODO: Listener für `input` und `change` hinzufügen.
}

// //Ayman
// Erstellt ein neues Event aus den Formular-Eingaben im Modal.
function handleCreateEvent(e) {
  // TODO: Formulardaten auslesen, neues Event erstellen & speichern.
}

// //Kawa
// Ändert die Teilnehmerzahl eines Events um +1 oder -1.
function changeParticipantCount(eventId, amount) {
  // TODO: Teilnehmerzahl anpassen, speichern & neu rendern.
}

// //Kawa
// Löscht ein Event anhand seiner ID aus dem Array.
function deleteEvent(eventId) {
  // TODO: Event entfernen, speichern & neu rendern.
}

document.addEventListener("DOMContentLoaded", () => {});
