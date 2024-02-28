/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderComponent } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { k as getCategories, a as getCategoryProducts, U as UPLOADS_URL, b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CategoryGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryGrid;
  const { objectFit } = Astro2.props;
  const categories = await getCategories();
  categories.forEach((category) => {
    category.totalProducts = categoryProductsCount(category.slug);
  });
  async function categoryProductsCount(categorySlug) {
    const catProducts = await getCategoryProducts(categorySlug) || [];
    return catProducts.length;
  }
  return renderTemplate`${maybeRenderHead()}<div class="category-grid"> ${categories.length === 4 && categories.map((category) => renderTemplate`<a${addAttribute("/" + category.slug, "href")} class="card category-card hover-img-brightness hover-img-rotate"${addAttribute("cat-" + category.slug, "id")} style="background:#eee;"> <picture class="with-gradient"> <img width="302" height="408"${addAttribute(objectFit || "object-fit-contain", "class")}${addAttribute(category.name, "alt")}${addAttribute(UPLOADS_URL + "thumbnail/" + category.images[0]?.file, "src")}> </picture> <div class="card-body"> <h4 class="card-title text-align-center">${category.name}</h4> <span class="card-subtitle text-align-center color-white text-sm font-weight-semibold mb-0">
Ver ${category.totalProducts} productos &gt;
</span> </div> </a>`)} </div> `;
}, "C:/www/astro/src/components/CategoryGrid.astro", void 0);

const $$Astro = createAstro();
const $$EncuentranosEnFerias = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EncuentranosEnFerias;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "title": "Encu\xE9ntranos en ferias", "desc": "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.", "btnValue": "Encu\xE9ntranos en ferias", "class": "bg-home with-mask bg-position-center", "bgUrl": "https://demos.creative-tim.com/astro-ecommerce/images/bg2.jpg" })} <div class="container flex-dir-column"> <section> <div class="d-block"> <h3 class="d-block-title">
Próximas ferias
</h3> <a class="text-dark font-weight-bold" href="#" style="text-decoration: none; font-weight: 500; color: #919191">Browse all categories &gt;</a> </div> ${renderComponent($$result2, "CategoryGrid", $$CategoryGrid, {})} <section> <div class="d-block"> <h3 class="d-block-title">
Product list
</h3> <a class="text-dark font-weight-bold" href="#" style="text-decoration: none; font-weight: 500; color: #919191">Browse all categories &gt;</a> </div> <div class="product-grid"> <div class="card product-card"> <picture> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/suit-3.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title text-align-center">Silk Dresses</h4> <div class="color-selector"> <span></span> <span></span> <span></span> </div> </div> </div> <div class="card product-card"> <picture> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/suit-1.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title text-align-center">Silk Dresses</h4> <div class="color-selector"> <span></span> <span></span> <span></span> </div> </div> </div> <div class="card product-card"> <picture> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/suit-2.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title text-align-center">Silk Dresses</h4> <div class="color-selector"> <span></span> <span></span> <span></span> </div> </div> </div> <div class="card product-card"> <picture> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/suit-5.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title text-align-center">Silk Dresses</h4> <div class="color-selector"> <span></span> <span></span> <span></span> </div> </div> </div> <div class="card product-card"> <picture> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/suit-1.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title text-align-center">Silk Dresses</h4> <div class="color-selector"> <span></span> <span></span> <span></span> </div> </div> </div> </div> </section> </section></div> </main> ` })} `;
}, "C:/www/astro/src/pages/encuentranos-en-ferias.astro", void 0);

const $$file = "C:/www/astro/src/pages/encuentranos-en-ferias.astro";
const $$url = "/encuentranos-en-ferias";

const encuentranosEnFerias = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EncuentranosEnFerias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CategoryGrid as $, encuentranosEnFerias as e };
