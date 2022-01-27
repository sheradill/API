const API = "https://randomuser.me/api/?results=";



let  input, btn, output
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')


const searchUser = async () => {
    let text = input.value
    let url = API + text
    let requset = await fetch(url)
    let response = await requset.json() 
    console.log(response.results)
    renderUsers(response.results)
  }


const renderUsers = (result) => {
       output.innerHTML = ''

  result.forEach((el) => {
        let div = document.createElement('div')

        let sex = document.createElement('h5')
        sex.innerHTML = el.gender

        let firstName = document.createElement('h5')
        firstName.innerHTML = el.name.title + ' ' + el.name.first + ' ' + el.name.last

        let adres = document.createElement('h5')
        adres.innerHTML = el.location.street.name + ' ' + el.location.street.number + ', city '+  el.location.city + ', state ' +  el.location.state + ', country ' +  el.location.country 

        let mail = document.createElement('h5')
        mail.innerHTML = el.email
        let images = document.createElement('img')
        images.src = el.picture.large

        div.append(sex, firstName, adres, mail, images)
        output.append(div)
    })
}



btn.addEventListener('click', () => {
    searchUser()
  })







