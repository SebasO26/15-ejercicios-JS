
const tsk = document.getElementById('task');
const desc = document.getElementById('description');
const select = document.getElementById('priority');
const create = document.getElementById('create');
const cards = document.getElementById('cards');
const pendiente = document.getElementById('pendientes');

let task = {};

let storageKey = "content";

function obtainContent() {
    return JSON.parse(
        localStorage.getItem(storageKey) || "[]"
    );
}

const contents = obtainContent();
let objects = contents;

const idGenerated = createIdGenerator(
    Math.max(0, ...contents.map(content => content.id))
);

function createIdGenerator(inicio = 0) {
    let contador = inicio;
    return () => ++contador;
}

function updatePending() {
    const pendingTasks = objects.filter(
        content => content.estado === 'Pendiente'
    );

    pendiente.textContent = pendingTasks.length;
}

function renderTask(content) {
    let prio = "";

    if (content.prioridad == "1") {
        prio = "Baja";
    } else if (content.prioridad == "2") {
        prio = "Media";
    } else {
        prio = "Alta";
    }

    let completed = content.estado === 'Completada';

    let contenido = `
        <div class="border-1 ${completed ? 'border-green-500 bg-green-100' : 'border-violet'} flex flex-col gap-5 text-xl rounded-lg items-center justify-center p-4">
            <h2>${content.tarea}</h2>
            <p>${content.descripcion}</p>
            <p>${prio}</p>
            ${completed ? '' : `
                <button id="${content.id}" class="complete border-1 border-blue-500 cursor-pointer p-1 bg-blue-300 rounded-lg text-lg">
                    Marcar como completada
                </button>
            `}
            <button data-id="${content.id}" class="delete border-1 border-red-500 cursor-pointer p-1 bg-red-300 rounded-lg text-lg">
                Eliminar
            </button>
        </div>
    `;

    cards.innerHTML += contenido;
}

function completeTask(id) {
    const task = objects.find(
        content => content.id === Number(id)
    );

    if (!task) return;

    task.estado = 'Completada';

    localStorage.setItem(storageKey, JSON.stringify(objects));

    const button = document.getElementById(id);
    const card = button.parentElement;

    card.classList.remove('border-violet');
    card.classList.add('border-green-500', 'bg-green-100');

    button.remove();

    updatePending();
}

function deleteTask(id) {
    objects = objects.filter(
        content => content.id !== Number(id)
    );

    localStorage.setItem(storageKey, JSON.stringify(objects));

    const button = cards.querySelector(`.delete[data-id="${id}"]`);

    button.parentElement.remove();

    updatePending();
}

contents.forEach(content => {
    renderTask(content);
});

updatePending();

cards.addEventListener('click', (e) => {
    if (e.target.classList.contains('complete')) {
        completeTask(e.target.id);
    }

    if (e.target.classList.contains('delete')) {
        deleteTask(e.target.dataset.id);
    }
});

create.addEventListener('click', () => {
    if (
        tsk.value.trim() !== "" &&
        desc.value.trim() !== "" &&
        select.value !== ""
    ) {
        task = {
            id: idGenerated(),
            tarea: tsk.value,
            descripcion: desc.value,
            prioridad: select.value,
            estado: 'Pendiente'
        };

        renderTask(task);

        objects.push(task);

        localStorage.setItem(storageKey, JSON.stringify(objects));

        updatePending();

        tsk.value = "";
        desc.value = "";
        select.value = "";

    } else {
        alert('Debe llenar todos los campos');
    }
});