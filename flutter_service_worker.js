'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0da7cc7dccc3410300d0578b8194f56c",
".git/config": "c66155328257b26426d0b4e69aa0d0a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d3801707531177b6772da6fc173aa2e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99b024a468196fcc9833e31c1fd78098",
".git/logs/refs/heads/main": "99b024a468196fcc9833e31c1fd78098",
".git/logs/refs/remotes/origin/HEAD": "b57437a0f41a55860057737e5f2ac880",
".git/logs/refs/remotes/origin/main": "4685eabfcb7bd33c1f28edbef301985c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/208fbd7f4e380aeb571a274ff0e64acf3fc374": "cfab934a38e70d7781573934ca6f09fa",
".git/objects/10/9ec85f768f360d146e89a797b0e98ac4a8945a": "ae2d9e12ef2d451dbaa7669e1c7920ee",
".git/objects/10/a5946da2f3d3d9de8aa63830284e188668ffe1": "81ea8efb3a7f656f5abf00496c9fbf81",
".git/objects/20/b70c76197fbe6f45ba76bfe2ead4fdad54c0e7": "f862c5ef6aff06938de9460cbfa6d139",
".git/objects/36/6282145e3665c8d03b53e889559c4b58cee097": "1e6899130f663009bf348aaa6de3416c",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3f/00c52c286e043c5095cd972f44c55d0bac4ba9": "b6cadf0cf01383b15e8a4ea4033fad17",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/bf333cd3d1247c08680b92cb592994809fd5b2": "090388238df16fec43def200668983ec",
".git/objects/48/87995a6328f65049ca1ace4d6fa475f349d715": "9862646abe061b10dcecd5a1dccca785",
".git/objects/73/484f859aac3313e1c6cc46e38b7bd0c540eabc": "4f5deaf6bf356aa45c038b7527e9a64b",
".git/objects/77/97a7de28df32d016bbf9be5379f280103db676": "1baa5857b19e0039a8ab98da40ee3856",
".git/objects/7b/71e6b31ef2665e9121c4aae71653ccf9861e7a": "de2426b8163d5425557f8d789d90d049",
".git/objects/8a/07912c8adf31ee71b350ad3620739d0b476870": "05fac39107410a2f2d3377b186f12f75",
".git/objects/92/e7d474824276be1f95073d473d018875cd5d03": "1af03215dd4023efb0f150040f7a43ee",
".git/objects/a6/869da99cf1ff409b81b98cb7c456b51e475578": "e2540f5b20bd922686739c862515a629",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/58dba120d61a0ed848190b2363009b2213df18": "beb548d8a8e506abe9b4ab4bbe177af0",
".git/objects/ba/3b810f747df087548e41520bf7b5913de62d9b": "fc565024fd80bb4253b72a56746f4fb6",
".git/objects/cc/e4912b7e3a46ecda446c88512ac7e8f6d46dbf": "5ad4ad71f744c896248a65fdbce6b7ae",
".git/objects/cd/57f0c08b83081185fe30f9486acf56b8cea22c": "12cf6f9b25a44b25a0fe0d2be540a661",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/81412a60ce24a1ba92f4fd6f3c1651219b7f40": "0e058d5471ce2bb76cf9ef44e00426d5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/f1bc688589d1676c43ca9fd5228b185d89f6ff": "527f3854ce38ba05b6149c748a547a3f",
".git/objects/f0/5ca1aa5ae197998a26ed58a697b9fd54b9070d": "f7f5287e5d4dbcf7f87052c9698d32c7",
".git/objects/pack/pack-eead158473f4382b871709f77edaec712ad9a95b.idx": "f02a096f190c0130a21e156eeb336b88",
".git/objects/pack/pack-eead158473f4382b871709f77edaec712ad9a95b.pack": "0d48ef0502f0f40c7cf94c44b3e1ff63",
".git/objects/pack/pack-eead158473f4382b871709f77edaec712ad9a95b.rev": "6a59568521986017592a899a061590f8",
".git/packed-refs": "f51b8544d28c5b8fdbde4514444397dc",
".git/refs/heads/main": "985a8b1096409c4ba44e579ce7e1d8c1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "985a8b1096409c4ba44e579ce7e1d8c1",
"assets/AssetManifest.bin": "e2cbd3a34d4ae03d0ba26eb63ebf64a8",
"assets/AssetManifest.bin.json": "667c94c11db870faba75104c18ee5d06",
"assets/AssetManifest.json": "ab2a95602644e21c38391639769ad3ce",
"assets/assets/json/box_loading.json": "9f97e85a636ee6053119b46b8a8627f7",
"assets/assets/json/project_data.json": "21967895fc7bba409612e0e0a9bf92fd",
"assets/assets/photos/me.png": "2e5267400c54836e38fa3cad6ac7387a",
"assets/assets/photos/projects/dal_attendance_banner.png": "4f339d0ccc5f4976fa63255ebb9cd934",
"assets/assets/photos/projects/edmc_banner.png": "27dc43ef242de9855857d664301e9760",
"assets/assets/photos/projects/e_relatives_banner.png": "03886ea620ffc76ee2a8942c24cad505",
"assets/assets/photos/ripped_paper.png": "d5275589b70156930495078107a41eaf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ddba54051925942a8c6f05f6aee8a8ff",
"assets/NOTICES": "492bc6ee01d4c63b4048f8a1ec38eacc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4dc46432bca843c71f59c32a819f0c6a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5557539d66050d4d4ae50b8cc07702a8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e30e91c311a265f621ac4fa6fe72e466",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86cb0dd1891722b469b8d8339b09382c",
"/": "86cb0dd1891722b469b8d8339b09382c",
"main.dart.js": "4762c7e99f1959feb7e5949492c97cd9",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
