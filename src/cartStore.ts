import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  selectedAttributes: any[];
  quantity: number;
}

export const cartItems = map<Record<string, CartItem>>({});
export const totalItems = atom(0);
export const subtotal = atom(0);


type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc' | 'price' | 'selectedAttributes'>;

export function addCartItem({ id, name, imageSrc, price, selectedAttributes }: ItemDisplayInfo, quantity: number = 1) {
  const key = name + ' - ' + getSelectedOptionsString(selectedAttributes);
  const existingEntry = cartItems.get()[key];

  totalItems.set(totalItems.get() + quantity);
  subtotal.set(subtotal.get() + price * quantity);

  const newSelectedAttributes = selectedAttributes.map(attr => ({ ...attr })); // Crear nuevas instancias

  if (existingEntry) {
    const updateItemData = {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity,
      selectedAttributes: newSelectedAttributes,
    };

    cartItems.setKey(key, updateItemData);
  } else {
    const newItemData = { id, name, imageSrc, price, quantity, selectedAttributes: newSelectedAttributes };
    cartItems.setKey(key, newItemData);
  }
}


export function removeCartItem(key:any) {
  const existingEntry = cartItems.get()[key];

  if (!existingEntry) {
    // Si el elemento no existe en el carrito, no hay nada que hacer
    return;
  }

  const updatedQuantity = existingEntry.quantity - 1;

  if (updatedQuantity <= 0) {
    // Si la cantidad actual es menor o igual a cero, eliminamos el elemento del carrito
    cartItems.setKey(key, undefined!)
  } else {
    // Actualizamos la cantidad y el subtotal
    const updatedItemData = {
      ...existingEntry,
      quantity: updatedQuantity,
    };

    cartItems.setKey(key, updatedItemData);
  }

  // Actualizamos el total de elementos y el subtotal
  totalItems.set(totalItems.get() - 1);
  subtotal.set(subtotal.get() - existingEntry.price);
}

function getSelectedOptionsString(selectedAttributes:any) {
  let selectedOptionsString = '';
  
  selectedAttributes.forEach((attr:any, index:any) => {
    selectedOptionsString += attr.viewValue + ': ' + attr.optionSelected;
    
    if (index < selectedAttributes.length - 1) {
      selectedOptionsString += ' | ';
    }
  });

  return selectedOptionsString;
}