const cardName = document.querySelector('.name')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const repositories = document.querySelector('.repositories')
const company = document.querySelector('.company')
const where = document.querySelector('.location')
const input = document.querySelector('.input_search')
const form = document.querySelector('.form')
const perfilPicture = document.querySelector('.gitImage')

const color = getComputedStyle(document.documentElement).getPropertyValue(
  '--hue'
)
const colorChangeInput = document.querySelector('.colorChangeInput')

function cardColorChange() {
  console.log(colorChangeInput.value)
  const colorValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--hue')

  document.documentElement.style.setProperty('--hue', colorChangeInput.value)
}

const fetchGit = async user => {
  const APIResponse = await fetch(`https://api.github.com/users/${user}`)

  const data = await APIResponse.json()
  return data
}

const renderCard = async user => {
  const data = await fetchGit(user)

  user = input.value

  console.log(data)
  cardName.innerHTML = `${data.login} (${data.name})`
  followers.innerHTML = `<img src="./assets/following.svg" />${data.followers} Seguidores`
  following.innerHTML = ` <img src="./assets/following.svg"  />${data.following} Seguindo`
  repositories.innerHTML = `<img src="./assets/repositories.svg" />${data.public_repos} Repositorios`
  company.innerHTML = `${
    data.company
      ? `<img src="./assets/company.svg" /> ${data.company}`
      : `<img src="./assets/company.svg" />`
  }`
  where.innerHTML = `<img src="./assets/local.svg" alt="" />${data.location}`
  perfilPicture.src = data.avatar_url
  form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(input.value)
    renderCard(input.value)
  })
}
renderCard('Stuutis')
