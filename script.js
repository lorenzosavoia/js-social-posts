// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


const arrayData = [
    {
        nomeAutore: 'Phil Mangione',
        profilePhoto: 'https://picsum.photos/id/1/300/300',
        data: '5 / 21 / 2021',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?',
        likesNumber: 96,
    },
    {
        nomeAutore: 'Lorenzo Savoia',
        profilePhoto: 'https://picsum.photos/id/1000/300/300',
        data: '12 / 25 / 2021',
        postText: 'Buon Natale a tutti i ragazzi di boolean',
        image: 'https://unsplash.it/600/300?',
        likesNumber: 12,
    },
    {
        nomeAutore: 'Matteo La Cara',
        profilePhoto: 'https://picsum.photos/id/15/300/300',
        data: '10 / 1 / 2021',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?',
        likesNumber: 60,
    },
    {
        nomeAutore: 'Diego Marenghi',
        profilePhoto: 'https://picsum.photos/id/100/300/300',
        data: '7 / 15 / 2021',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?',
        likesNumber: 23,
    },
    
];

const container = document.getElementById('container');


for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i];
    const postTemplate = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.profilePhoto}" alt="${element.nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.nomeAutore}</div>
                        <div class="post-meta__time">${element.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.postText}</div>
            <div class="post__image">
                <img src="${element.image} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"  data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likesNumber}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    
    `
    container.innerHTML += postTemplate;

}



const button = document.querySelectorAll('.js-like-button');
let likeNumber = document.querySelectorAll('.js-likes-counter');
for (let i = 0; i < arrayData.length; i++) {

    button[i].addEventListener('click', function(){
        button[i].classList.toggle('like-button--liked')
        if (button[i].classList.contains('like-button--liked') == true) {
            likeNumber[i].innerHTML = arrayData[i].likesNumber += 1;
        }else{
            likeNumber[i].innerHTML = arrayData[i].likesNumber -= 1;
        }
        
    }); 
}



