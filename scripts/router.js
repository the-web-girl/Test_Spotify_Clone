// router.js - Mini SPA Router

export function navigate(viewFn) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    viewFn(app);
}
