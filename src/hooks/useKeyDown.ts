export type KeyPredicate = (event: KeyboardEvent) => boolean;
export type Handler = (event: KeyboardEvent) => void;

export function useKeyDown(key: string, fn:) {
  window.addEventListener("keydown", (e) => {
    key === e.key ? fn : 0;
  });
}
