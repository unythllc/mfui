import { atom, useAtom } from "jotai";

// Simple store for the shopping cart

export const cartAtom = atom<Item[]>([]);
export const useCart = () => useAtom(cartAtom);

type Item = {
  id: string;
  name: string;
  price: number;
};

export const addToCart = (item: Item) => {
  const [cart, setCart] = useCart();
  setCart([...cart, item]);
};

export const removeFromCart = (item: Item) => {
  const [cart, setCart] = useCart();
  setCart(cart.filter((i: Item) => i.id !== item.id));
};

// Simple store to control toggles, themes, etc.
// This would be use for things like show cart, show menu, etc.

export const toggleThemeAtom = atom(false);
export const useToggleTheme = () => useAtom(toggleThemeAtom);

export const toggleCartAtom = atom(false);
export const useToggleCart = () => useAtom(toggleCartAtom);
