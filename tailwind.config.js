/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'category_image': "url('/category/banner-clearance-sale.jpg')",
        'location_image': "url('/location/cua-hang-nha-xinh-1400x690.jpg')",
        'shop360_phongan': "url('/shop360/Ghe-an-cabo-vai-MB204117-2.jpg')",
        'shop360_phongngu': "url('/shop360/giuong-iris-dep-gia-tot-hoc-keo-1200x800.jpg')",
        'shop360_phongkhach': "url('/shop360/Sofa-Poppy-2.5-cho-vai-vang-5.jpg')",
        'sales_sofa': "url('/sales/0210-2-800x800.jpg')",
        'sales_banan': "url('/sales/ghe-an-pio-2-533x800.jpg')",
        'sales_giuongngu': "url('/sales/mau-phong-ngu-16-5-23.jpg')",
        'sales_thietkenoithat': "url('/sales/armchair-maxine-neww-800x800.jpeg')",
        'inspiration_camhung1': "url('/inspiration/bo-suu-tap-osaka-moi-nha-xinh-6522-1346x800.jpg')",
        'inspiration_camhung2': "url('/inspiration/armchair-dep-mau-hong-hien-dai-13522-305x400.jpg')",
        'inspiration_camhung3': "url('/inspiration/GIUONG-DEP-GIA-TOT-IRIS-1-400x400.jpg')",
        'about_vechungtoi': "url(https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-lich-su-hinh-thanh-21.jpg)",
        'collection': "url(https://nhaxinh.com/wp-content/uploads/2021/10/elegance-bo-suu-tap-dep.jpg)",
        'design': "url(https://nhaxinh.com/wp-content/uploads/2023/05/nha-xinh-thiet-ke-noi-that-ecopark-16523.jpg)",
      },

      boxShadow: {
        'input_field': '0px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.1)'
      },

      screens: {
        'average': { 'max': '850px' },
        // => @media (max-width: 850px) { ... }

        'small': { 'max': '425px' },
        // => @media (max-width: 425px) { ... }
      },
      borderColor: {
        "border_button_about": "#7a9c59",
      },

      backgroundColor: {
        "support_background": "#F6F7F8",
        "hotline_background": "#A5886F",
        "about_background": "#e6e6e6",
        "button_about": "#7a9c59",
        "hover_button_about": "#66824a",
      },

      colors: {
        "cur-lang": "#ccc",
        "gioi_thieu": "#8D8D8D",
        "about_text": "rgb(83, 80, 80)",
        "gallery_text_link": "#A9A9B2",
        "button_about": "#7a9c59",
        "design_arcodion_1": "#7A9C59",
        "design_arcodion_2": "#2F809D",
        "design_arcodion_3": "#879654",
      },
      fontSize: {
        'span': '1.15em'
      },
      fontWeight: {
        'span': '600'
      },
      lineHeight: {
        'span': '1.05'
      },
      letterSpacing: {
        'span': '.05em'
      }
    },
  },
  plugins: [],
};
