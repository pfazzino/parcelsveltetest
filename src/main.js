import App from "./App.svelte";

if (module.hot) {
    module.hot.accept();
}

const app = new App({
    target: document.getElementById("app"),
});
