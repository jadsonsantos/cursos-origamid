interface Course {
  nome: string
  horas: number
  aulas: number
  gratuito: boolean
  tags: string[]
  idAulas: number[]
  nivel: "iniciante" | "avancado"
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json")
  const data = await response.json()
  mostrarCursos(data)
}

fetchCursos()

function mostrarCursos(courses: Course[]) {
  console.log(typeof courses)

  courses.map((course) => {
    const color = course.nivel === "iniciante" ? "red" : "blue"

    document.body.innerHTML += `
    <div>
      <h2 style="color: ${color}">${course.nome}</h2>
      <p>${course.nivel}</p>
      <p>Tags: ${course.tags.join(", ")}</p>
      <p>Aulas: ${course.idAulas.join(" | ")}</p>
    </div>
    `
  })
}
