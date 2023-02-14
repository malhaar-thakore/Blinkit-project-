const sidebar = document.getElementsByClassName('sidebar')[0];

const sidebarContent = [
    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'All'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Fresh Vegetables'
    },

    {
        categoryImage: 'images/fresh-fruits.jpeg',
        categoryText:  'Fresh Fruits'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Exotics'
    },

    {
        categoryImage: 'images/potato-img.png',
        categoryText:  'Seasonal'
    },

    {
        categoryImage: 'images/organic-hydroponic.jpeg',
        categoryText:  'Organic & Hydroponic'
    },

    {
        categoryImage: 'images/freshly-cut-sprouts.webp',
        categoryText:  'Freshly Cut & Sprouts'
    },
]

sidebarContent.forEach(({ categoryImage, categoryText }) => {
   const categoryButton = document.createElement('button');
   categoryButton.className = 'sidebar-button';

   const appendingImage = document.createElement('img');
   const appendingText = document.createElement('p');

   appendingImage.className = 'sidebar-image';
   appendingText.className = 'sidebar-text';

   appendingImage.src = categoryImage;
   appendingText.innerHTML = categoryText;

   categoryButton.append(appendingImage, appendingText);
   sidebar.append(categoryButton);
});

// 1. Was appending the [{}] (Array of objects) to HTML Element
// 2. classname is wrong, its className

// 3. Think about why className is used instead of class?