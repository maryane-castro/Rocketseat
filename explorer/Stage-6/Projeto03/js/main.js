
import { GithubUser } from "./GithubSearch.js"

class Favoritos{
    constructor(root){
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector('table tbody')

        this.load()
        this.update()
        this.onadd()


        

        
        
    }

 

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }


    async add(username){
        try{

            const userExists = this.entries.find(entry => entry.login === username)
            

            if (userExists){
                throw new Error('Usuário já cadastrado')
            }

            const user = await GithubUser.search(username)
            if (user.login === undefined){
                throw new Error('Usuário não encontrado')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch(error) {
            alert(error.message)
        }
        
    }


    onadd(){
        const addButton = this.root.querySelector('#search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('#search input')

            this.add(value)
        }
    }

    delete(user){
        const filter = this.entries
            .filter(entry => entry.login !== user.login)
        
        this.entries = filter
        this.update()
        this.save()
        
    }

    update(){
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()
            console.log(user)

            
            row.querySelector('#user img').src = `https://github.com/${user.login}.png`
            row.querySelector('#user img').alt = `Imagem de ${user.login}`
            row.querySelector('#user a').href = `https://github.com/${user.login}`
            row.querySelector('#user p').textContent = user.name
            row.querySelector('#user span').textContent = user.login
            row.querySelector('#repositories').textContent = user.public_repos
            row.querySelector('#followers').textContent = user.followers


            row.querySelector('#remove').onclick = () => {
                this.delete(user)
            }

            this.tbody.append(row)
        })
        
        // console.log(this.entries)


        if (this.entries.length == ""){
            document.querySelector('.screen1').classList.remove('hide')
            document.querySelector('.screen2').classList.add('hide')
        } else{
            document.querySelector('.screen1').classList.remove('hide')
            document.querySelector('.screen2').classList.add('hide')
        }
    

        
    }



    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <tr>
            <td id="user">
                <img src="" alt="">
                <a href="">
                    <p>Maryane Castro</p>
                    <span>maryane-castro</span>
                </a>
            </td>
            <td id="repositories"> 123 </td>
            <td id="followers">1234</td>
            <td id="remove">
                <button>Remover</button>
            </td>
        </tr>
        `

        return tr
    }


    removeAllTr(){
        const tbody = this.root.querySelector('table tbody.screen1')

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}


new Favoritos("#app")