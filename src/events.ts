export function dispatchEvent(element: HTMLElement, evtName: string, detail: any = {}) {
  const evt = new CustomEvent(evtName, {
    bubbles: true,
    detail
  });
  element.dispatchEvent(evt);
}
