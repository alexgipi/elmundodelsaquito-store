/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderComponent } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { A as API_URL, b as $$Jumbotron, d as formatDate, f as formatCurrency, $ as $$Layout } from './404_BNLLaKx8.mjs';
import 'clsx';
/* empty css                             */
/* empty css                         */

const $$Astro$1 = createAstro();
const $$SecondaryNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SecondaryNav;
  const currentUrl = Astro2.url;
  const pages = [
    {
      pathname: "/mi-cuenta",
      name: "Escritorio"
    },
    {
      pathname: "/mi-cuenta/pedidos",
      name: "Mis pedidos"
    },
    {
      pathname: "/mi-cuenta/direcciones",
      name: "Direcciones"
    },
    {
      pathname: "/mi-cuenta/metodos-de-pago",
      name: "M\xE9todos de pago"
    },
    {
      pathname: "/mi-cuenta/detalles",
      name: "Detalles de mi cuenta"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="secondary-nav"> ${pages.map((page) => renderTemplate`<li> <a${addAttribute(page.pathname, "href")}${addAttribute(currentUrl.pathname === page.pathname ? "active" : "", "class")}> ${page.name} </a> </li>`)} </nav> `;
}, "C:/www/astro/src/components/SecondaryNav.astro", void 0);

const ORDER_STATUS_VALUES = {
  "processing": {
    es: "Procesando",
    en: "Processing"
  },
  "completed": {
    es: "Completado",
    en: "Completed"
  }
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const identityCookieValue = Astro2.cookies.get("identity")?.value;
  let identity = null;
  let token = null;
  let order = null;
  let orderItems = [];
  try {
    if (identityCookieValue) {
      identity = JSON.parse(identityCookieValue);
      token = identity.token;
      order = await getOrder(id);
      if (order?.items)
        orderItems = Object.values(order.items);
    }
  } catch (error) {
    console.error("Error al analizar el valor de la cookie:", error);
  }
  async function getOrder(orderNumber) {
    try {
      const res = await fetch(`${API_URL}/orders/${orderNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-zll3gpsq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zll3gpsq> ${order && renderTemplate`${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center large-desc", "backPath": "/mi-cuenta/pedidos", "title": "Pedido #" + id, "color": "color-dark", "desc": `El pedido #${order.orderNumber} se realiz\xF3 el ${formatDate(order.createdAt)} y est\xE1 actualmente '${ORDER_STATUS_VALUES[order?.status]?.es}'.`, "data-astro-cid-zll3gpsq": true })}`} <div class="container align-it-flex-start" data-astro-cid-zll3gpsq> ${renderComponent($$result2, "SecondaryNav", $$SecondaryNav, { "data-astro-cid-zll3gpsq": true })} <div class="my-account-content padding-0" data-astro-cid-zll3gpsq> <table class="woocommerce-table woocommerce-table--order-details shop_table order_details" data-astro-cid-zll3gpsq> <thead data-astro-cid-zll3gpsq> <tr data-astro-cid-zll3gpsq> <th class="woocommerce-table__product-name product-name" data-astro-cid-zll3gpsq>Producto</th> <th class="woocommerce-table__product-table product-total" data-astro-cid-zll3gpsq>Total</th> </tr> </thead> <tbody data-astro-cid-zll3gpsq> ${orderItems.map((item) => renderTemplate`<tr class="woocommerce-table__line-item order_item" data-astro-cid-zll3gpsq> <td class="woocommerce-table__product-name product-name" data-astro-cid-zll3gpsq> <a href="https://elmundodelsaquito.es/producto/antifaz-relajante-notas-musicales/" data-astro-cid-zll3gpsq> ${item.name} </a> <strong class="product-quantity" data-astro-cid-zll3gpsq>× ${item.quantity}</strong> </td> <td class="woocommerce-table__product-total product-total" data-astro-cid-zll3gpsq> <span class="woocommerce-Price-amount amount" data-astro-cid-zll3gpsq> ${formatCurrency(item.price * item.quantity)} </span> </td> </tr>`)} </tbody> <tfoot data-astro-cid-zll3gpsq> <tr data-astro-cid-zll3gpsq> <th scope="row" data-astro-cid-zll3gpsq>Subtotal:</th> <td data-astro-cid-zll3gpsq> <span class="woocommerce-Price-amount amount" data-astro-cid-zll3gpsq> ${formatCurrency(order?.subtotal || 0)} </span> </td> </tr> <tr data-astro-cid-zll3gpsq> <th scope="row" data-astro-cid-zll3gpsq>Envío:</th> <td data-astro-cid-zll3gpsq> <span class="woocommerce-Price-amount amount" data-astro-cid-zll3gpsq> ${formatCurrency(order?.shippingCost || 0)} </span>
&nbsp;
<small class="shipped_via" data-astro-cid-zll3gpsq>
vía ${order?.shippingType} </small> </td> </tr> <tr data-astro-cid-zll3gpsq> <th scope="row" data-astro-cid-zll3gpsq>Método de pago:</th> <td data-astro-cid-zll3gpsq>Tarjeta de crédito (Stripe)</td> </tr> <tr data-astro-cid-zll3gpsq> <th scope="row" data-astro-cid-zll3gpsq>Total:</th> <td data-astro-cid-zll3gpsq> <span class="woocommerce-Price-amount amount" data-astro-cid-zll3gpsq> ${formatCurrency(order?.total || 0)} </span> </td> </tr> </tfoot> </table> </div> </div> </main> ` })} `;
}, "C:/www/astro/src/pages/mi-cuenta/pedidos/[id].astro", void 0);

const $$file = "C:/www/astro/src/pages/mi-cuenta/pedidos/[id].astro";
const $$url = "/mi-cuenta/pedidos/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SecondaryNav as $, ORDER_STATUS_VALUES as O, _id_ as _ };
