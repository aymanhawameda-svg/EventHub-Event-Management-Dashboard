# EventHub - Event Management Dashboard

## Projektbeschreibung

EventHub ist eine webbasierte Anwendung zur Verwaltung und Organisation von Veranstaltungen.

Mit der Anwendung können Events übersichtlich dargestellt, gesucht, gefiltert, sortiert, erstellt, bearbeitet und gelöscht werden. Zusätzlich kann die Anzahl der Teilnehmer eines Events über die Benutzeroberfläche erhöht oder verringert werden.

Die Events werden im Browser im `localStorage` gespeichert, sodass Änderungen auch nach einem Neuladen der Seite erhalten bleiben.

### Funktionen

- Übersicht aller vorhandenen Events
- Anzeige von:
  - Titel
  - Beschreibung
  - Datum und Uhrzeit
  - Veranstaltungsort
  - Kategorie
  - Status
  - Teilnehmerzahl
- Suche nach Titel, Beschreibung und Ort
- Filterung nach Kategorie
- Filterung nach Status
- Sortierung nach:
  - Datum aufsteigend
  - Datum absteigend
  - Titel
- Erstellen neuer Events
- Bearbeiten bestehender Events
- Löschen von Events
- Erhöhen und Verringern der Teilnehmerzahl
- Automatische Anzeige des Status „Ausgebucht“
- Fortschrittsanzeige der Teilnehmerzahl
- Dashboard mit Statistiken
- Speicherung der Daten im Browser über `localStorage`

---

## Verwendete Technologien

Das Projekt wurde mit folgenden Technologien umgesetzt:

- **HTML5** – Semantische Strukturierung der Benutzeroberfläche
- **CSS3 & Tailwind CSS / DaisyUI** – Responsive Styling und UI-Komponenten
- **JavaScript (ES6+)** – Anwendungslogik, DOM-Manipulation und Datenverwaltung
- **Browser LocalStorage** – Lokale Speicherung der Event-Daten
- **Git & GitHub** – Versionskontrolle und Zusammenarbeit im Team

### JavaScript

JavaScript übernimmt unter anderem:

- Laden und Speichern der Events
- Erstellen der Event-Karten
- Suchfunktion
- Filterfunktion
- Sortierung
- Erstellen neuer Events
- Bearbeiten von Events
- Löschen von Events
- Änderung der Teilnehmerzahlen
- Aktualisierung der Dashboard-Statistiken

---

## Installation / Start des Projekts

### Voraussetzungen

Benötigt wird lediglich ein moderner Webbrowser, zum Beispiel:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Falls das Projekt über einen lokalen Entwicklungsserver ausgeführt wird, kann beispielsweise **VS Code mit Live Server** verwendet werden.

### Projekt starten

Da es sich um ein reines Frontend-Projekt handelt, ist keine serverseitige Installation oder Node.js-Umgebung erforderlich.

1. **Repository klonen:**
   git clone [https://github.com/aymanhawameda-svg/EventHub-Event-Management-Dashboard.git](https://github.com/aymanhawameda-svg/EventHub-Event-Management-Dashboard.git)

2. **Projekt öffnen:**
   Die Datei `index.html` direkt im Browser öffnen oder über Live Server in VS Code starten.

---

## Bekannte Einschränkungen

- **Reine Client-seitige Speicherung:** Die Speicherung der Daten erfolgt ausschließlich im `localStorage` des Browsers.
- **Keine Backend-Anbindung:** Es gibt keine serverseitige Datenbank und keine Benutzerauthentifizierung.

---

## Teammitglieder & Aufgabenverteilung

| Teammitglied | Hauptaufgaben & Zuständigkeiten                                   | Zugewiesene Funktionen                                                         |
| :----------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Yulia**    | Rendering der Event-Karten, Dashboard-Statistiken & LocalStorage  | `renderEvents()`, `updateDashboardStats()`, `saveEventsToLocalStorage()`       |
| **Ayman**    | Filterung, Sortierung, Event-Erstellung & Bearbeitungs-Modal      | `filterAndSortEvents()`, `handleCreateEvent()`, `handleEditEvent()`            |
| **Kawa**     | Event-Listener (Suche/Filter), Teilnehmerzahl-Anpassung & Löschen | `setupSearchAndFilterListeners()`, `changeParticipantCount()`, `deleteEvent()` |

---

## Code-Struktur & Funktionen

// ==========================================
// Yulia
// ==========================================

// Zeigt die Events als Karten im HTML (#eventsContainer) an.
function renderEvents(eventsToDisplay) {
// TODO: HTML-Karten generieren und einfügen.
}

// Aktualisiert die 4 Zahlen in den Statistik-Karten oben.
function updateDashboardStats() {
// TODO: Statistiken berechnen und im DOM anzeigen.
}

// Speichert das `events`-Array im localStorage.
function saveEventsToLocalStorage() {
localStorage.setItem("eventhub_events", JSON.stringify(events));
}

// ==========================================
// Ayman
// ==========================================

// Filtert und sortiert die Events nach Suche, Kategorie und Status.
function filterAndSortEvents() {
// TODO: Array filtern/sortieren und renderEvents() aufrufen.
}

// Erstellt ein neues Event aus den Formular-Eingaben im Modal.
function handleCreateEvent(e) {
// TODO: Formulardaten auslesen, neues Event erstellen & speichern.
}

// Bearbeitet ein bestehendes Event.
function handleEditEvent(e) {
// TODO: Event aktualisieren und Änderungen speichern.
}

// ==========================================
// Kawa
// ==========================================

// Aktiviert die Event-Listener für Suchfeld und Filter-Dropdowns.
function setupSearchAndFilterListeners() {
// TODO: Listener für `input` und `change` hinzufügen.
}

// Ändert die Teilnehmerzahl eines Events um +1 oder -1.
function changeParticipantCount(eventId, amount) {

}

// Löscht ein Event anhand seiner ID aus dem Array.
function deleteEvent(eventId) {

}
