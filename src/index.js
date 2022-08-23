document.addEventListener('DOMContentLoaded', () => {
    const breedArr = [];
    const ul = document.querySelector('#dog-breeds');
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(arr => arr.message.forEach(element => {
        const img = document.createElement('img');
        img.setAttribute('src', element);
        document.querySelector('div#dog-image-container').appendChild(img);
    }));

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(obj => {
        for(const property in obj.message) {
            breedArr.push(property);
            const li = document.createElement('li');
            li.setAttribute('class', property);
            li.textContent = property;
            ul.appendChild(li);
            if(obj.message[property].length != 0){
                obj.message[property].forEach( (ele) =>{
                    const liChild = document.createElement('li');
                    liChild.setAttribute('class', property);
                    liChild.textContent = ele;
                    li.appendChild(liChild);
                })
            }
        }
    })

    ul.addEventListener('click', (e) =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        e.target.setAttribute('style', `color:#${randomColor}`);
    })
    const selection = document.querySelector('select');
    selection.addEventListener('change', () =>{
        const selectedLetter = selection.options[selection.selectedIndex].text

        switch(selectedLetter){
            case 'a':
                ul.innerHTML = '';
                breedArr.filter((ele) => {
                if(ele.startsWith(selectedLetter)){
                    const liChild = document.createElement('li');
                    liChild.setAttribute('class', ele);
                    liChild.textContent = ele;
                    ul.appendChild(liChild);
                }
            })
                break;
            case 'b':
                ul.innerHTML = '';
                breedArr.filter((ele) => {
                if(ele.startsWith(selectedLetter)){
                    const liChild = document.createElement('li');
                    liChild.setAttribute('class', ele);
                    liChild.textContent = ele;
                    ul.appendChild(liChild);
                }
            })
                break;
            case 'c':
                ul.innerHTML = '';
                breedArr.filter((ele) => {
                if(ele.startsWith(selectedLetter)){
                    const liChild = document.createElement('li');
                    liChild.setAttribute('class', ele);
                    liChild.textContent = ele;
                    ul.appendChild(liChild);
                }
            })
                break;
            case 'd':
                ul.innerHTML = '';
                breedArr.filter((ele) => {
                if(ele.startsWith(selectedLetter)){
                    const liChild = document.createElement('li');
                    liChild.setAttribute('class', ele);
                    liChild.textContent = ele;
                    ul.appendChild(liChild);
                }
            })
                break;

        }
    })

})