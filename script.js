let todos = JSON.parse(localStorage.getItem("todos")) || [];

function tampilkanTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.teks;
    li.style.textDecoration = todo.selesai ? "line-through" : "none";

    li.onclick = () => {
      todos[index].selesai = !todos[index].selesai;
      simpanTodos();
      tampilkanTodos();
    };

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = (e) => {
      e.stopPropagation(); // agar tidak mencentang saat klik X
      todos.splice(index, 1);
      simpanTodos();
      tampilkanTodos();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function tambahTodo() {
  const input = document.getElementById("todo-input");
  const nilai = input.value.trim();

  if (nilai) {
    todos.push({ teks: nilai, selesai: false });
    simpanTodos();
    tampilkanTodos();
    input.value = "";
  }
}

function simpanTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

tampilkanTodos();
