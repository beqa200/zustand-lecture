import { create } from 'zustand';

interface CountStore {
  count: number;
  increment: (num: number) => void;
  decrement: () => void;
}

const useCountStore = create<CountStore>(
  (set) => ({
    count: 0,
    increment: (num: number) =>
      set((state: { count: number }) => ({
        count: state.count + num,
      })),
    decrement: () =>
      set((state: { count: number }) => ({
        count: state.count - 1,
      })),
  }),
);

export default useCountStore;
