import { intitiateApp } from "./API";

intitiateApp().forEach(object =>
  object.element.addEventListener(object.event, object.callback));