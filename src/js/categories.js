const categories = [
    {
        id: 1,
        name: 'Coffee Beans',
        description: 'Fresh and premium coffee beans.',
        image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L2Rlc2lnbndpdGhtZTA5X3JlYWxpc3RpY19jb2ZmZWVfcG93ZGVyX2V4cGxvc2lvbl9fd2l0aF9jb2ZmZWVfYl9kMTlkZjhmNy05NDZiLTQ2ZGQtYTRmMy0wYTAwNThlMDZlNjcucG5n.png',
    },
    {
        id: 2,
        name: 'Hot Coffee',
        description: 'Warm coffee for your perfect day.',
        image: 'https://png.pngtree.com/png-clipart/20250106/original/pngtree-hot-coffee-latte-isolated-png-image_18811568.png',
    },
    {
        id: 3,
        name: 'Cold Coffee',
        description: 'Refreshing coffee for every moment.',
        image: 'https://png.pngtree.com/png-clipart/20250502/original/pngtree-iced-coffee-splash-with-milk-and-beans-explosion-png-image_20931070.png',
    },
    {
        id: 4,
        name: 'Coffee Desserts',
        description: 'Delicious sweets and tasty treats.',
        image: 'https://img.magnific.com/free-psd/indulge-luxurious-hot-chocolate-experience-creamy-rich-topped-with-chocolate-shavings_191095-83178.jpg?semt=ais_hybrid&w=740&q=80',
    },

];
const categoryContainer = document.getElementById('category-container');
console.log('Category Container:', categoryContainer);
categories.forEach((category) => {
    categoryContainer.innerHTML += `<div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

                    <div class="overflow-hidden">
                        <img src="${category.image}"
                            alt="${category.name}"
                            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500">
                    </div>

                    <div class="p-6 text-center">
                        <h3 class="text-xl font-bold text-[#5b3825]">
                            ${category.name}
                        </h3>

                        <p class="text-gray-500 text-sm mt-2">
                           ${category.description}
                        </p>

                        <a id="categories-4" href="#products"
                            class="inline-block mt-5 text-[#b77945] font-semibold hover:text-[#5b3825]">
                            Explore More →
                        </a>
                    </div>

                </div>`;

});
