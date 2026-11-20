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

const contents = obtainContent() || [];
let objects = contents;

const idGenerated = createIdGenerator(
    Math.max(0, ...contents.map(content => content.id))
);

if (contents != null) {
    contents.forEach(content => {
        let prio = "";

        if (content.prioridad == "1") {
            prio = "Baja"
        } else if (content.prioridad == "2") {
            prio = "Media"
        } else {
            prio = "Alta"
        }

        let contenido = `
        <div class="border-1 border-violet flex flex-col gap-5 text-xl rounded-lg items-center justify-center">
            <h2>${content.tarea}</h2>
            <p>${content.descripcion}</p>
            <p>${prio}</p>
            <button id="${content.id}" class="border-1 border-blue-500 cursor-pointer p-1 bg-blue-300 rounded-lg text-lg">Marcar como completada</button>
        </div>
        `
        cards.innerHTML += contenido;
    });
    pendiente.textContent = contents.length;
}

function createIdGenerator(inicio = 0) {
    let contador = inicio;
    return () => ++contador;
}

create.addEventListener('click', () => {
    if (tsk.value != "" && desc.value != "" && select.value != "") {
        task = {
            'id': idGenerated(),
            'tarea': tsk.value,
            'descripcion': desc.value,
            'prioridad': select.value,
            'estado': 'Pendiente'
        }

        let prio = "";

        if (task.prioridad == "1") {
            prio = "Baja";
        } else if (task.prioridad == "2") {
            prio = "Media";
        } else {
            prio = "Alta";
        }

        let contenido = `
        <div class="border-1 border-violet flex flex-col gap-5 text-xl rounded-lg items-center justify-center">
            <h2>${task.tarea}</h2>
            <p>${task.descripcion}</p>
            <p>${prio}</p>
            <button id="${task.id}" class="border-1 border-blue-500 cursor-pointer p-1 bg-blue-300 rounded-lg text-lg">Marcar como completada</button>
        </div>
        `
        cards.innerHTML += contenido;

        objects.push(task)
        localStorage.setItem(storageKey, JSON.stringify(objects))
        pendiente.textContent = contents.length;

    } else {
        alert('Debe llenar todos los campos');
    }
})
