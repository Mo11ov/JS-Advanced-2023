class Contact{
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value){
        this._online = value;
        if (this.divTitle != null) {
            this.divTitle.className = this._online ? 'title online' : 'title';
        } 
    }

    render(id) {
        this.divMain = document.getElementById(id);
        // creating article with neede elements
        this.article = document.createElement('article');
        this.divTitle = document.createElement('div');
        this.btn = document.createElement('button');
        this.divInfo  = document.createElement('div');
        this.phoneSpan = document.createElement('span');
        this.emailSpan = document.createElement('span');

        // setting data
        this.divTitle.className = this._online == true ? 'title online' : 'title';
        this.divTitle.textContent = this.firstName + ' ' + this.lastName;
        this.btn.innerHTML = '&#8505';
        this.phoneSpan.innerHTML = '&#9742 ' + this.phoneNumber;
        this.emailSpan.innerHTML = '&#9993 ' + this.email;
        this.divInfo.className = 'info';
        this.divInfo.style.display = 'none';
        // appending structure of HTML
        this.article.appendChild(this.divTitle);
        this.divTitle.appendChild(this.btn);
        
        this.article.appendChild(this.divInfo);
        this.divInfo.appendChild(this.phoneSpan);
        this.divInfo.appendChild(this.emailSpan);

        this.divMain.appendChild(this.article);

        this.btn.addEventListener('click', () => {
            this.divInfo.style.display == 'none'? 
            this.divInfo.style.display = 'block' : 
            this.divInfo.style.display = 'none';
        })
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  