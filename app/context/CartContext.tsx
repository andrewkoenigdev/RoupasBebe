"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  tamanho: string;
  quantidade: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantidade">) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalItens: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(novoItem: Omit<CartItem, "quantidade">) {
    setItems((itensAtuais) => {
      const jaExiste = itensAtuais.find((item) => item.id === novoItem.id);

      if (jaExiste) {
        return itensAtuais.map((item) =>
          item.id === novoItem.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...itensAtuais, { ...novoItem, quantidade: 1 }];
    });
  }

  function removeItem(id: number) {
    setItems((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }

  function increaseQuantity(id: number) {
    setItems((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setItems((itensAtuais) =>
      itensAtuais
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  const totalItens = items.reduce((soma, item) => soma + item.quantidade, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        totalItens,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart precisa ser usado dentro de um CartProvider");
  }
  return context;
}