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

  {
    id: 3,
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

  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  status_badge.classList.add("badge", "badge-success", "badge-sm");
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
  btn_edit.addEventListener("click", () => {
    bearbeitungsmodal.showModal();
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
