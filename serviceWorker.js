const CACHE_NAME = "react-messenger-v2";
const staticData = [
    '/',
    'main.js',
];

self.addEventListener("install", async () => {
    const cachedData = await caches.open(CACHE_NAME);
    cachedData.addAll(staticData);
});

self.addEventListener("activate", async () => {
    const keys = await caches.keys();

    await Promise.all(keys.map(key => {
        if (key != CACHE_NAME)
            caches.delete(key);
    }));
});

self.addEventListener("fetch", async (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(res =>
                res ?? fetch(event.request)
            ))
});

//const foo = async (request) => await caches.match(request) ?? await fetch(request);