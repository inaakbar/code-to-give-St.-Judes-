var cacheName='v1.0';

var cacheAssets=[
    '/views/home.ejs',
    '/views/Userlogin.ejs',
    '/views/userDashboard.ejs',
    '/views/uploadDoc.js',
    '/views/uploadDoc.ejs',
    '/views/main_form.ejs',
    '/views/main_form.js',
    '/views/Adminlogin.ejs',
    '/views/adminDashboard.ejs',
    '/public/style/style.css',
    '/public/style/style2.css',
    '/public/style/user.css',
    'login1.js'
];


self.addEventListener('install',e=>{
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache=>{
            console.log('service workers :caching files');
            cache.addAll(cacheAssets);
        })
        .then(()=>self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName) {
              console.log('Service Worker: Clearing Old Cache');
              return caches.delete(cache);
            }
          })
        );
      })
    );
  });
  
  // Call Fetch Event
  self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  });
  