/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import { $ as $$SecondaryNav } from './_id__DJgVOUTP.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$Direcciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Direcciones;
  console.log(Astro2.cookies.get("Hola"));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-kiciqxac": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-kiciqxac> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Direcciones", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!", "data-astro-cid-kiciqxac": true })} <div class="container" data-astro-cid-kiciqxac> ${renderComponent($$result2, "SecondaryNav", $$SecondaryNav, { "data-astro-cid-kiciqxac": true })} <div class="my-account-content padding-0" data-astro-cid-kiciqxac> <div class="u-columns woocommerce-Addresses col2-set addresses" data-astro-cid-kiciqxac> <div class="shadow u-column1 col-1 address-element" data-astro-cid-kiciqxac> <header class="address-element-title title" data-astro-cid-kiciqxac> <h3 data-astro-cid-kiciqxac>Dirección de facturación</h3> <a href="https://elmundodelsaquito.es/mi-cuenta/edit-address/facturacion/" class="edit" data-astro-cid-kiciqxac>
Editar
</a> </header> <address data-astro-cid-kiciqxac>
alex gimenez<br data-astro-cid-kiciqxac>c/ divina pastora 41<br data-astro-cid-kiciqxac>17820 Banyoles<br data-astro-cid-kiciqxac>Gerona </address> </div> <div class="shadow u-column2 col-2 address-element" data-astro-cid-kiciqxac> <header class="address-element-title title" data-astro-cid-kiciqxac> <h3 data-astro-cid-kiciqxac>Dirección de envío</h3> <a href="https://elmundodelsaquito.es/mi-cuenta/edit-address/envio/" class="edit" data-astro-cid-kiciqxac>Editar</a> </header> <address data-astro-cid-kiciqxac>
alex gimenez<br data-astro-cid-kiciqxac>c/ divina pastora 41<br data-astro-cid-kiciqxac>17820 Banyoles<br data-astro-cid-kiciqxac>Gerona </address> </div> </div> </div> </div> </main> ` })} `;
}, "C:/www/astro/src/pages/mi-cuenta/direcciones.astro", void 0);

const $$file = "C:/www/astro/src/pages/mi-cuenta/direcciones.astro";
const $$url = "/mi-cuenta/direcciones";

export { $$Direcciones as default, $$file as file, $$url as url };
