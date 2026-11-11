// document.addEventListener('DOMContentLoaded', () => {
//     const loadBtn = document.getElementById('loadPostsBtn');
//     const postsContainer = document.getElementById('postsContainer');

//     loadBtn.addEventListener('click', async () => {
//         try {
//             // Показываем индикатор загрузки
//             postsContainer.innerHTML = '<p>Загрузка данных...</p>';
            
//             // Делаем запрос к API
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            
//             // Проверяем, успешен ли запрос
//             if (!response.ok) {
//                 throw new Error(`Ошибка HTTP: ${response.status}`);
//             }
            
//             // Парсим полученные данные (массив из 100 постов)
//             const posts = await response.json();
            
//             // Очищаем контейнер от надписи "Загрузка..."
//             postsContainer.innerHTML = '';
            
//             // Создаем фрагмент документа для эффективной вставки множества элементов
//             const fragment = document.createDocumentFragment();
            
//             posts.slice(0, 10).forEach(post => {
//                 // Создаем карточку
//                 const card = document.createElement('div');
//                 card.className = 'post-card';
                
//                 // Заголовок поста
//                 const title = document.createElement('h3');
//                 title.textContent = post.title;
                
//                 // Текст поста
//                 const text = document.createElement('p');
//                 text.textContent = post.body;
                
//                 // Собираем карточку
//                 card.appendChild(title);
//                 card.appendChild(text);
                
//                 // Добавляем карточку во фрагмент
//                 fragment.appendChild(card);
//             });
            
//             // Вставляем все карточки на страницу одной операцией
//             postsContainer.appendChild(fragment);
            
//         } catch (error) {
//             postsContainer.innerHTML = `<p style="color: red;">Ошибка при загрузке данных: ${error.message}</p>`;
//             console.error('Ошибка fetch:', error);
//         }
//     });
// });


const loadBtn = document.getElementById('loadPostsBtn');
    
const postsContainer = document.getElementById('postsContainer');

    loadBtn.addEventListener('click', async () => {
     
           
            
            // Делаем запрос к API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            
            // Проверяем, успешен ли запрос
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            
            // Парсим полученные данные (массив из 100 постов)
            const posts = await response.json();
            
			postsContainer.innerHTML = ''; // Очищаем старые карточки
           
            // Создаем фрагмент документа для эффективной вставки множества элементов
            const fragment = document.createDocumentFragment();
            
            posts.slice(0, 5).forEach(post => {
                // Создаем карточку
                const card = document.createElement('div');
                card.className = 'post-card';
                
                // Заголовок поста
                const title = document.createElement('h3');
                title.textContent = post.title;
                
                // Текст поста
                const text = document.createElement('p');
                text.textContent = post.body;
                
                // Собираем карточку
                card.appendChild(title);
                card.appendChild(text);
                
                // Добавляем карточку во фрагмент
                fragment.appendChild(card);
            });
            
            // Вставляем все карточки на страницу одной операцией
            postsContainer.appendChild(fragment);
		 
		})