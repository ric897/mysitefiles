

const articleList = document.getElementById('articleList');
let allTheArticles = [];
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredArticles = allTheArticles.filter((allArticles) => {
        return (
            allArticles.title.toLowerCase().includes(searchString) ||
            allArticles.category.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredArticles);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('/articles');
        allTheArticles = await res.json();
        displayCharacters(allTheArticles);
    } catch (err) {
        console.log(yoyo);
    }
};

const displayCharacters = (allArticles) => {
    const htmlString = allArticles
        .map((allArticles) => {
            return `
            <div class=" divide-y-2 divide-gray-100">
             <div class="py-8 px-5 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">${allArticles.category}</span>
                
                
              </div>
              <div class="md:flex-grow px-5">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${allArticles.title}</h2>
                <p class="leading-relaxed">${allArticles.description}</p>
                <a  href="../articles/${allArticles.slug}" class="text-indigo-500 inline-flex items-center mt-4">Read ->
                  
                </a>
              </div>
            </div>
            
        `;
        })
        .join('');
    articleList.innerHTML = htmlString;
};

loadCharacters();

