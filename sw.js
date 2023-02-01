const STATIC_CACHE ="static";
const APP_SHELL=[
    "/",
    "index.html",
    "index.css",
    "index.js",
    "main.js",
    "OIP (1).jpeg",
    "solar.png",
    "space x2.png",
    "spacex.png",
    "tesla_logo_PNG19.png",
    "tesla.jpeg"

];

self.addEventListener("install", (e) =>{
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache)=>cache.addAll(APP_SHELL));
    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) =>{
    console.log("fetch! ", e.request);

    e.respondWith(
        caches 
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
            );
});