var cacheName = 'v1.0';

var cacheAssets = [
    '/adminPages/adminDashboard.html',
    '/adminPages/adminDashboard.js',
    '/homepages/about.html',
    '/homepages/Adminlogin.html',
    '/homepages/home.html',
    '/homepages/Userlogin.html',
    '/userPages/educationForm.html',
    '/userPages/healthForm.html',
    '/userPages/lifeskillsForm.html',
    '/userPages/livelihoodForm.html',
    '/userPages/main_form.html',
    '/userPages/uploadDoc.html',
    '/userPages/uploadDoc.js',
    '/userPages/userHome.html',
    '/userPages/userRequestStatus.html'
]

// installation
self.addEventListener('install', e => {
      console.log('Service Worker: Installed');
      e.waitUntil(
            caches
              .open(cacheName)
              .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
              })
              .then(() => self.skipWaiting())
          );

});    

// activation
self.addEventListener('activate', e => {
    console.log('Service Worker: Installed');
}); 

// fetch
self.addEventListener('fetch', e => {
      console.log('Service Worker: Fetching');
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
      
});
