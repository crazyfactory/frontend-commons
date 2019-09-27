(global as any).requestAnimationFrame = (callback: () => void) => {
  setTimeout(callback, 0);
};

(global as any).alert = jest.fn();

(global as any).matchMedia = () => {
  return {
    addListener : jest.fn(),
    matches : false,
    removeListener: jest.fn()
  };
};
