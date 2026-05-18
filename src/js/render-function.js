import { fetchCategories } from './api';
import { refs } from './refs';

// Масив зображень по порядку
const categoryImages = [
  '../img/our-furniture/img1.webp', // Всі товари
  '../img/our-furniture/img2.webp',
  '../img/our-furniture/img3.webp',
  '../img/our-furniture/img4.webp',
  '../img/our-furniture/img5.webp',
  '../img/our-furniture/img6.webp',
  '../img/our-furniture/img7.webp',
  '../img/our-furniture/img8.webp',
  '../img/our-furniture/img9.webp',
  '../img/our-furniture/img10.webp',
  '../img/our-furniture/img11.webp',
  '../img/our-furniture/img12.webp',
  '../img/our-furniture/img13.webp',
];

export async function renderCategories() {
  try {
    const categories = await fetchCategories();
    const container = refs.categoriesList;

    // "Всі товари"
    const allItem = createCategoryItem({
      name: 'Всі товари',
      _id: '',
      image: categoryImages[0],
    });
    container.appendChild(allItem);

    // Категорії з бекенду
    categories.forEach((cat, index) => {
      const imageIndex = index + 1;
      const imageSrc = categoryImages[imageIndex] || categoryImages[0];

      const item = createCategoryItem({
        name: cat.name,
        _id: cat._id,
        image: imageSrc,
      });
      container.appendChild(item);
    });
  } catch (error) {
    console.error('Помилка при рендері категорій:', error);
  }
}

function createCategoryItem({ name, _id, image }) {
  const li = document.createElement('li');
  li.className = 'category-card';
  li.dataset.category = _id || '';

  li.innerHTML = `
    <picture>
      <source srcset="${image.replace('.webp', '@2x.webp')}" media="(min-resolution: 2dppx)">
      <img src="${image}" alt="${name}" class="category-img" loading="lazy">
    </picture>
    <div class="category-overlay">
      <h3 class="category-name">${name}</h3>
    </div>
  `;

  return li;
}
