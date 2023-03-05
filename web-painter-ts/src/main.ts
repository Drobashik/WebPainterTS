import { intitiateApp } from "./core/API";

intitiateApp().forEach(object =>
  object.element.addEventListener(object.event, object.callback));