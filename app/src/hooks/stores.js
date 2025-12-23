
import { create } from "zustand";

const useUserStore = create((set) => ({
    user:null,
    update:(user) => set({user:user})
}));

const useErrorStore = create((set) => ({
    error:null,
    update:(error) => set({error:error ? error : "Wystąpił nieoczekiwany błąd"}),
    disable:() => set({error:null})
}));

export {useUserStore, useErrorStore}