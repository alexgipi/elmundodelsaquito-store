/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { A as API_URL, b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
/* empty css                                    */

const $$Astro = createAstro();
const $$PedidoRecibido = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PedidoRecibido;
  const key = Astro2.url.searchParams.get("key") || void 0;
  console.log(key);
  const identityCookieValue = Astro2.cookies.get("identity")?.value;
  let identity = null;
  let token = null;
  let order = null;
  let orderItems = [];
  try {
    if (identityCookieValue) {
      identity = JSON.parse(identityCookieValue);
      token = identity.token;
    }
    order = await getOrder(key);
    console.log(order);
    if (order?.items)
      orderItems = Object.values(order.items);
  } catch (error) {
    console.error("Error al analizar el valor de la cookie:", error);
  }
  async function getOrder(orderNumber) {
    try {
      const res = await fetch(`${API_URL}/orders/${orderNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-r6ff2xfo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-r6ff2xfo> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Pedido recibido", "color": "color-dark", "desc": "Tu pedido se ha procesado con \xE9xito. Gracias por elegirnos.", "data-astro-cid-r6ff2xfo": true })} <div class="container flex-dir-column" data-astro-cid-r6ff2xfo> ${order && renderTemplate`${renderComponent($$result2, "OrderDetails", null, { "order": order, "client:only": "svelte", "client:component-hydration": "only", "data-astro-cid-r6ff2xfo": true, "client:component-path": "C:/www/astro/src/components/OrderDetails.svelte", "client:component-export": "default" })}`} </div> </main> ` })} `;
}, "C:/www/astro/src/pages/finalizar-compra/pedido-recibido.astro", void 0);

const $$file = "C:/www/astro/src/pages/finalizar-compra/pedido-recibido.astro";
const $$url = "/finalizar-compra/pedido-recibido";

export { $$PedidoRecibido as default, $$file as file, $$url as url };
