document.addEventListener('DOMContentLoaded', function () {
    let cardItems = document.querySelectorAll('.FreeQuiz');
    cardItems.forEach(function (cardItem) {
        let category = cardItem.getAttribute('data-category');
        updateCard(cardItem, category);
    });
});

function updateCard(cardItem, category) {
    let iconElement = cardItem.querySelector('#addIcon');
    let cardBody = cardItem.querySelector('.myCard');

    switch (category) {
        case 'Linux':
            iconElement.innerHTML = '<i class="fa-brands fa-linux fa-2x text-white"></i>';
            cardBody.style.backgroundImage = 'url(/images/linux.jpg)';
            break;
        case 'bash':
            iconElement.innerHTML = '<i class="fa-solid fa-terminal fa-2x text-white"></i>';
            cardBody.style.backgroundImage = 'url(/images/bash.jpg)';
            break;
        case 'uncategorized':
            iconElement.innerHTML = '<i class="fa-solid fa-icons text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/uncategorized.jpg)';
            break;
        case 'Docker':
            iconElement.innerHTML = '<i class="fa-brands fa-docker text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/docker.jpg)';
            break;
        case 'SQL':
            iconElement.innerHTML = '<i class="fa-solid fa-database text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/sql.jpg)';
            break;
        case 'CMS':
            iconElement.innerHTML = '<i class="fa-solid fa-cogs text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/cms.jpg)';
            break;
        case 'Code':
            iconElement.innerHTML = '<i class="fa-solid fa-code text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/code.jpg)';
            break;
        case 'DevOps':
            iconElement.innerHTML = '<i class="fa-solid fa-server text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/devops.jpg)';
            break;
        case 'React':
            iconElement.innerHTML = '<i class="fa-brands fa-react text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/react.jpg)';
            break;
        case 'Laravel':
            iconElement.innerHTML = '<i class="fa-brands fa-laravel text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/laravel.jpg)';
            break;
        case 'Postgres':
            iconElement.innerHTML = '<i class="fa-solid fa-database text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/postgres.jpg)';
            break;
        case 'Django':
            iconElement.innerHTML = '<i class="fa-brands fa-python text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/django.jpg)';
            break;
        case 'cPanel':
            iconElement.innerHTML = '<i class="fa-brands fa-cpanel text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/cpanel.jpg)';
            break;
        case 'NodeJs':
            iconElement.innerHTML = '<i class="fa-brands fa-node text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/nodejs.jpg)';
            break;
        case 'WordPress':
            iconElement.innerHTML = '<i class="fa-brands fa-wordpress text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/wordpress.jpg)';
            break;
        case 'Next.js':
            iconElement.innerHTML = '<i class="fa-brands fa-js text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/nextjs.jpg)';
            break;
        case 'VueJS':
            iconElement.innerHTML = '<i class="fa-brands fa-vuejs text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/vuejs.jpg)';
            break;
        case 'Apache Kafka':
            iconElement.innerHTML = '<i class="fa-solid fa-bars-staggered text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/kafka.jpg)';
            break;
        default:
            iconElement.innerHTML = '<i class="fa-solid fa-question text-white fa-2x"></i>';
            cardBody.style.backgroundImage = 'url(/images/default.jpg)';
            break;
    }
    cardBody.style.backgroundSize = 'cover';
    cardBody.style.backgroundPosition = 'center';
    cardBody.style.backgroundRepeat = 'no-repeat';
}
