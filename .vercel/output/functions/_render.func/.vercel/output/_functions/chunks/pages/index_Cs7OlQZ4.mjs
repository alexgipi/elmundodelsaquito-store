/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { b as $$Jumbotron, $ as $$Layout, A as API_URL, d as formatDate, f as formatCurrency, a as getCategoryProducts } from './404_BNLLaKx8.mjs';
import { $ as $$SecondaryNav, O as ORDER_STATUS_VALUES } from './_id__DJgVOUTP.mjs';
/* empty css                          */
/* empty css                          */
import { $ as $$FormLayout } from './complete_BPI2afhF.mjs';
import { $ as $$CategoryGrid } from './encuentranos-en-ferias_CNnFejvr.mjs';
import { $ as $$ProductGrid } from './_category__CZnnHGJY.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$5 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  const identityCookieValue = Astro2.cookies.get("identity")?.value;
  let identity = null;
  try {
    if (identityCookieValue) {
      identity = JSON.parse(identityCookieValue);
      console.log(identity);
    }
  } catch (error) {
    console.error("Error al analizar el valor de la cookie:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Finalizar compra", "color": "color-dark", "desc": "Antes de confirmar tu pedido, te animamos a revisar con atenci\xF3n los detalles de tu compra y asegurarte de que todo est\xE9 perfecto. Para completar el proceso, por favor, rellena el breve formulario a continuaci\xF3n con tus datos." })} <div class="container flex-dir-column"> ${renderComponent($$result2, "OrderSummary", null, { "identity": identity, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/www/astro/src/components/OrderSummary.svelte", "client:component-export": "default" })} </div> </main> ` })}`;
}, "C:/www/astro/src/pages/finalizar-compra/index.astro", void 0);

const $$file$4 = "C:/www/astro/src/pages/finalizar-compra/index.astro";
const $$url$4 = "/finalizar-compra";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$3;
  const identityCookieValue = Astro2.cookies.get("identity")?.value;
  let identity = null;
  let token = null;
  let orders = [];
  try {
    if (identityCookieValue) {
      identity = JSON.parse(identityCookieValue);
      token = identity.token;
      orders = await userOrders();
    }
  } catch (error) {
    console.error("Error al analizar el valor de la cookie:", error);
  }
  async function userOrders() {
    try {
      const res = await fetch(
        `${API_URL}/orders`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          }
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-i6uwmksp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-i6uwmksp> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Mis pedidos", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!", "data-astro-cid-i6uwmksp": true })} <div class="my-account container align-it-flex-start" data-astro-cid-i6uwmksp> ${renderComponent($$result2, "SecondaryNav", $$SecondaryNav, { "data-astro-cid-i6uwmksp": true })} <div class="my-account-content padding-0" data-astro-cid-i6uwmksp> <table class="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table" data-astro-cid-i6uwmksp> <thead data-astro-cid-i6uwmksp> <tr data-astro-cid-i6uwmksp> <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number" data-astro-cid-i6uwmksp><span class="nobr" data-astro-cid-i6uwmksp>Pedido</span></th> <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date" data-astro-cid-i6uwmksp><span class="nobr" data-astro-cid-i6uwmksp>Fecha</span></th> <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status" data-astro-cid-i6uwmksp><span class="nobr" data-astro-cid-i6uwmksp>Estado</span></th> <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total" data-astro-cid-i6uwmksp><span class="nobr" data-astro-cid-i6uwmksp>Total</span></th> <th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions" data-astro-cid-i6uwmksp><span class="nobr" data-astro-cid-i6uwmksp>Acciones</span></th> </tr> </thead> <tbody data-astro-cid-i6uwmksp> ${orders.map((order) => renderTemplate`<tr class="woocommerce-orders-table__row woocommerce-orders-table__row--status-completed order" data-astro-cid-i6uwmksp> <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Pedido" data-astro-cid-i6uwmksp> <a${addAttribute("/mi-cuenta/pedidos/" + order.orderNumber, "href")} data-astro-cid-i6uwmksp>
#${order.orderNumber} </a> </td> <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date" data-title="Fecha" data-astro-cid-i6uwmksp> <time${addAttribute(order.createdAt, "datetime")} data-astro-cid-i6uwmksp>${formatDate(order.createdAt)}</time> </td> <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status" data-title="Estado" data-astro-cid-i6uwmksp> ${ORDER_STATUS_VALUES[order.status]["es"]} </td> <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total" data-title="Total" data-astro-cid-i6uwmksp> <span class="woocommerce-Price-amount amount" data-astro-cid-i6uwmksp> ${formatCurrency(order.total)} </span>
para ${Object.keys(order.items).length} artículos
</td> <td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions" data-title="Acciones" data-astro-cid-i6uwmksp> <a${addAttribute("/mi-cuenta/pedidos/" + order.orderNumber, "href")} class="woocommerce-button button view" data-astro-cid-i6uwmksp>Ver</a> </td> </tr>`)} </tbody> </table> </div> </div> </main> ` })} `;
}, "C:/www/astro/src/pages/mi-cuenta/pedidos/index.astro", void 0);

const $$file$3 = "C:/www/astro/src/pages/mi-cuenta/pedidos/index.astro";
const $$url$3 = "/mi-cuenta/pedidos";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const identityCookieValue = Astro2.cookies.get("identity")?.value;
  let identity = null;
  try {
    if (identityCookieValue) {
      identity = JSON.parse(identityCookieValue);
    }
  } catch (error) {
    console.error("Error al analizar el valor de la cookie:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-r3ks7bnu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-r3ks7bnu> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Mi cuenta", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!", "data-astro-cid-r3ks7bnu": true })} <div class="container" data-astro-cid-r3ks7bnu> ${renderComponent($$result2, "SecondaryNav", $$SecondaryNav, { "data-astro-cid-r3ks7bnu": true })} <div class="my-account-content" data-astro-cid-r3ks7bnu> <p data-astro-cid-r3ks7bnu>
Hola <strong data-astro-cid-r3ks7bnu>${identity?.username}</strong>
(¿no eres <strong data-astro-cid-r3ks7bnu>${identity?.username}</strong>?
<a href="/logout" data-astro-prefetch="load" data-astro-cid-r3ks7bnu>
Cerrar sesión
</a>
)
</p> <p data-astro-cid-r3ks7bnu>
Desde el escritorio de tu cuenta puedes ver tus <a href="/mi-cuenta/pedidos/" data-astro-cid-r3ks7bnu>pedidos recientes</a>, gestionar tus <a href="https://elmundodelsaquito.es/mi-cuenta/edit-address/" data-astro-cid-r3ks7bnu>direcciones de envío y facturación</a> y <a href="https://elmundodelsaquito.es/mi-cuenta/edit-account/" data-astro-cid-r3ks7bnu>editar tu contraseña y los detalles de tu cuenta</a>.
</p> </div> </div> </main> ` })} `;
}, "C:/www/astro/src/pages/mi-cuenta/index.astro", void 0);

const $$file$2 = "C:/www/astro/src/pages/mi-cuenta/index.astro";
const $$url$2 = "/mi-cuenta";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  let alertMessage = {
    status: null,
    message: null
  };
  const errors = { invalidEmail: false, invalidPassword: false };
  let email = "";
  const isLoggedIn = Astro2.cookies.has("identity");
  console.log({ isLoggedIn });
  if (isLoggedIn)
    return Astro2.redirect("/");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      email = formData.get("email");
      const forgotPasswordResponse = await forgotPassword(email);
      if (forgotPasswordResponse.ok) {
        alertMessage.status = "success";
        alertMessage.message = "Enlace enviado correctamente";
      } else {
        errors.invalidEmail = true;
        alertMessage.status = "error";
        alertMessage.message = "No se ha encontrado ninguna cuenta con estos datos.";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  async function forgotPassword(email2) {
    try {
      const res = await fetch(
        `${API_URL}/users/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: email2 })
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      alertMessage.status = "error";
      alertMessage.message = "Ha hab\xEDdo un problema al intentar restablecer la contrase\xF1a";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Restablecer contrase\xF1a", "color": "color-dark", "desc": "Ind\xEDcanos tu direcci\xF3n de correo electr\xF3nico o nombre de usuario y te enviaremos un enlace para que puedas volver a acceder a tu cuenta." })} <div class="container flex-dir-column"> ${renderComponent($$result2, "FormLayout", $$FormLayout, {}, { "default": ($$result3) => renderTemplate` <form method="POST" class="form login-form"> ${alertMessage.message && renderTemplate`<p${addAttribute("form-alert " + alertMessage.status, "class")}> ${alertMessage?.message} </p>`} <div class="form-element"> <label${addAttribute(errors.invalidEmail ? "invalid" : "", "class")}> <span>Correo electrónico o nombre de usuario</span> <input${addAttribute(email, "value")} name="email" required type="text"> </label> <!-- {errors.email && <p class="field-error">{errors.email}</p>} --> </div> <footer> <button type="submit">
Enviar enlace
</button> <div class="flex flex-col gap-2 mt-4"> <p class="mt-2 text[#626262]">¿Ya tienes tu cuenta?</p> <a href="/login"> Inicia sesión con tu cuenta de El mundo del saquito</a> </div> </footer> </form> ` })} </div> </main> ` })}`;
}, "C:/www/astro/src/pages/reset-password/index.astro", void 0);

const $$file$1 = "C:/www/astro/src/pages/reset-password/index.astro";
const $$url$1 = "/reset-password";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Jumbotron2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Jumbotron2;
  return renderTemplate`${maybeRenderHead()}<section class="jumbotron-hero bg-center bg-no-repeat" data-astro-cid-khhkc5lj> <div class="container py-4 flex-col" data-astro-cid-khhkc5lj> <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl" data-astro-cid-khhkc5lj>Sacos térmicos de semillas</h1> <p class="mb-8 max-w-2xl font-normal text-gray-300 lg:text-xl" data-astro-cid-khhkc5lj>Sumérgete en el abrazo cálido de nuestros sacos térmicos, con una mezcla única de semillas, flores y esencias de lavanda. Diseñados para aliviar dolores musculares y artículares, calmar el frío y brindar una experiencia terapéutica única.</p> <div class="flex gap-3 flex-col items-center sm:flex-row" data-astro-cid-khhkc5lj> <a href="/sacos-termicos" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border border-transparent rounded-lg bg-[--primary-color] focus:ring-4 focus:ring-violet-500 dark:focus:ring-blue-900" data-astro-cid-khhkc5lj>
Sacos térmicos
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" data-astro-cid-khhkc5lj> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" data-astro-cid-khhkc5lj></path> </svg> </a> <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" data-astro-cid-khhkc5lj>
Leer más
</a> </div> </div> </section> `;
}, "C:/www/astro/src/components/ui/Jumbotron2.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const gridLimit = 5;
  const zapatillasTermicas = await getCategoryProducts("zapatillas-termicas", { limit: gridLimit });
  const sacosTermicos = await getCategoryProducts("sacos-termicos", { limit: gridLimit });
  const antifacesRelajantes = await getCategoryProducts("antifaces-relajantes", { limit: gridLimit });
  await getCategoryProducts("sacos-termicos-medianos", { limit: gridLimit });
  const metaTitle = "Los mejores sacos t\xE9rmicos de semillas para aplicar fr\xEDo o calor";
  const metaDescription = "Tu fuente de alivio del dolor: descubre nuestros sacos t\xE9rmicos de semillas, antifaces y zapatillas t\xE9rmicas. Encuentra la soluci\xF3n natural para calmar tus dolores y disfruta de la comodidad que necesitas. Bienvenido a tu refugio del bienestar.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle, "description": metaDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- <Jumbotron
      class="bg-home with-mask bg-position-center"
      title="El Mundo del Saquito"
      desc="Descubre nuestra tienda online de saquitos térmicos elaborados con semillas de trigo, flores y esencias naturales de lavanda. Alivia tus dolencias con calor natural en tan solo unos minutos"
      btnValue="Encuéntranos en ferias"
      btnHref="/encuentranos-en-ferias"
      bgUrl="https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/photo-1568842068488-4c5d327367ea-scaled.webp"
    /> --> ${renderComponent($$result2, "Jumbotron2", $$Jumbotron2, {})} <div class="container flex-dir-column"> <section> <div class="d-block"> <h3 class="d-block-title">Nuestros productos</h3> <span class="font-weight-bold" style="text-decoration: none; font-weight: 500; color: #757575">
Encuentra productos de las siguientes categorías:
</span> </div> ${renderComponent($$result2, "CategoryGrid", $$CategoryGrid, {})} </section> <section> <div class="d-block"> <h2 class="d-block-title">Zapatillas térmicas de semillas</h2> <a class="text-dark font-weight-bold" href="/zapatillas-termicas" style="text-decoration: none; font-weight: 500; color: #757575">Ver todas las zapatillas &gt;</a> </div> ${renderComponent($$result2, "ProductGrid", $$ProductGrid, { "class": "transparent-pictures", "products": zapatillasTermicas })} </section> <section> <div class="d-block"> <h2 class="d-block-title">Sacos térmicos de semillas</h2> <a class="text-dark font-weight-bold" href="/sacos-termicos" style="text-decoration: none; font-weight: 500; color: #757575">Ver todos los sacos térmicos &gt;</a> </div> ${renderComponent($$result2, "ProductGrid", $$ProductGrid, { "products": sacosTermicos })} </section> <section> <div class="d-block"> <h2 class="d-block-title">Antifaces relajantes de semillas</h2> <a class="text-dark font-weight-bold" href="/antifaces-relajantes" style="text-decoration: none; font-weight: 500; color: #757575">Ver todos los antifaces &gt;</a> </div> ${renderComponent($$result2, "ProductGrid", $$ProductGrid, { "products": antifacesRelajantes })} </section> </div> </main> ` })}`;
}, "C:/www/astro/src/pages/index.astro", void 0);

const $$file = "C:/www/astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
