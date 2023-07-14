export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers            
        }))
        //.catch(e => alert('Encontrei um erro', e))
    }
}


export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector('table tbody')


        this.load()

        // GithubUser.search('maryane-castro').then(user => console.log(user))
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }


    //async : codigo assíncrono
    async add(username){
        try{
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


    delete(user){
        const filter = this.entries
            .filter(entry => entry.login !== user.login)
        
        this.entries = filter
        this.update()
        this.save()
        
    }
}


export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.update()
        this.onadd()
    }

    onadd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public
            row.querySelector('.followers').textContent = user.follow

            row.querySelector('.remove').onclick = () => {
                const isOK  = confirm('Tem certeza?')
                if (isOK){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

        

    }


    createRow(){

        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/diego3g.png" alt="">
                <a href="https://github.com/diego3g" target="_blank">
                    <p>Diego Fernandes</p>
                    <span>diego3g</span>
                </a>
            </td>
            <td class="repositories">
                76
            </td>
            <td class="followers">
                0983
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
            `

        return tr
    }


    removeAllTr(){
        const tbody = this.root.querySelector('table tbody')

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}