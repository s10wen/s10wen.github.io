/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","d284615b37a9d4e699bc4773a1cb7957"],["/about/index.html","5541cc88bc1337b21c72b356cd122322"],["/archives/2004/06/index.html","c6688ce294799aab79e0b254c15a8e38"],["/archives/2004/index.html","006197a6d2e5888b836d023f2277f2c1"],["/archives/2009/03/index.html","efdee93d0e397b5d307a21a6affa86db"],["/archives/2009/06/index.html","bf30d37dfbbfa181b701684fd7bd647e"],["/archives/2009/index.html","95e3cf5562b335d0744c51195e888815"],["/archives/2010/03/index.html","9ae081e7b8f8ab38e42405a28950121f"],["/archives/2010/04/index.html","033f0bcd22aeb2d8a055ecde31aca0cf"],["/archives/2010/05/index.html","01df1f20851385a2a1fb7b3f663337b4"],["/archives/2010/06/index.html","ee9eadbec7d43678b171e8fa3a086f4a"],["/archives/2010/index.html","e3d7fe14e9d1a7273188cc371f30b986"],["/archives/2011/04/index.html","0e3f88f40b726481900417afbfaafdfa"],["/archives/2011/06/index.html","1af27008f361c83cc1c236e798495657"],["/archives/2011/index.html","5cc543d145a6301f2a8078e1d9ca9493"],["/archives/2012/01/index.html","abadf70ae674ace8f89ce09b7bd2ccb1"],["/archives/2012/02/index.html","3a6e5911d56c63bcfa53294c019f87c3"],["/archives/2012/03/index.html","8e8164d94c74cf61fb685dc5f8e0ea73"],["/archives/2012/04/index.html","d4f2c5355abf3ac9cdcc62cfc6b58e7d"],["/archives/2012/05/index.html","af3821a5fc061b5f5a57e938116161fd"],["/archives/2012/06/index.html","571717215c68f2c8725bd07b1803641f"],["/archives/2012/07/index.html","6ca06ce3fdb3a3553ca7277f08f7acca"],["/archives/2012/08/index.html","de410269041205a0c205d3d84b61ff91"],["/archives/2012/10/index.html","719cd427fe5355e5c4e23a36df601cf5"],["/archives/2012/11/index.html","ba6b73ad65609e0135662d21668b0992"],["/archives/2012/12/index.html","891c248a5cc82167b0bb8608a2c6ba19"],["/archives/2012/index.html","bff1eb93eeb83c39580b8057f1df8900"],["/archives/2013/01/index.html","2176ed72eb8dcfd3c74a4c6e1a6c6cb9"],["/archives/2013/02/index.html","29095a4d5506703c87b3c3dc9972c1d8"],["/archives/2013/03/index.html","ff37c4449cd218efc3dd75c78fd23bb9"],["/archives/2013/04/index.html","85b249eeeb24657ac5d42512e1067892"],["/archives/2013/05/index.html","d757d6f80183a4ce0112db8211dd0d6e"],["/archives/2013/06/index.html","01bcab93e17492140a9c10cf669abea8"],["/archives/2013/07/index.html","b8f2e2b0a750c5f8f95274b8f9c327c7"],["/archives/2013/08/index.html","78daa151d4d203e5050db79910b2d47e"],["/archives/2013/09/index.html","7e3f460d96c1e4cc1403ebfec194ff81"],["/archives/2013/10/index.html","f13a38dbf49e1711a492101e3e6dc928"],["/archives/2013/11/index.html","576b9b8a43ca6968805bdb050b1df98a"],["/archives/2013/12/index.html","824d94c97751184f7e1ee4be9d549640"],["/archives/2013/index.html","053dba27d401cbf485649baeeb9f7673"],["/archives/2014/01/index.html","b74fd615e9c3809ae27c4fc2eaceec48"],["/archives/2014/02/index.html","824be59ccd4b0eb9b02471eb9e119a50"],["/archives/2014/03/index.html","a3a4aaca9d2c64ce5342dd4ded43736d"],["/archives/2014/04/index.html","c3bef05170117c6b5f1b2c27fecf118d"],["/archives/2014/05/index.html","6fde86921ac4f210f2450259c9f0629e"],["/archives/2014/06/index.html","bb7d2acaab7376f3c9d22bd4730aac63"],["/archives/2014/07/index.html","9437648a4d862a2ecdf4cb460b9053c0"],["/archives/2014/08/index.html","be02c86fe38a39e700cf5e4c60b566b0"],["/archives/2014/09/index.html","69d33182363e26d6dcf87411987cb2af"],["/archives/2014/10/index.html","193888e9a271e1cd5f253e8dcb1bd7d7"],["/archives/2014/11/index.html","9707313e3dc72c12708e24b27a0a5b11"],["/archives/2014/12/index.html","0431e6c735d3806d9cb0e5c7d7f379d2"],["/archives/2014/index.html","a81e191a5f692d3d69ae6eff31f87bc9"],["/archives/2015/01/index.html","f8b37fe6c4931956abfe2026dce4d098"],["/archives/2015/02/index.html","05370c85458ab5a82d99af0d59b900e5"],["/archives/2015/04/index.html","5ce868087ab4df0e922916f0b4c5a43e"],["/archives/2015/05/index.html","84a8c195b5322452c24e8fc69d583d30"],["/archives/2015/06/index.html","74d83f9259451aa5e177b76c831dbde4"],["/archives/2015/07/index.html","01affc326053eab75dcf7918cd040515"],["/archives/2015/08/index.html","e60f232948b5062860cdbe0ac963fe14"],["/archives/2015/09/index.html","22176fc067c92ecef23c3b36f207ea00"],["/archives/2015/10/index.html","65693264a9f6db0ef3d536833c9c850f"],["/archives/2015/11/index.html","6b5958d60229edc26326dfd657490d1f"],["/archives/2015/12/index.html","9ea9977978aeb06572a6e59feffe90e2"],["/archives/2015/index.html","e01f9ada66a3e7cf055119acd44253bb"],["/archives/2016/01/index.html","52b1a019a8f87e917df084c848ef29b9"],["/archives/2016/02/index.html","7d5e67a38da9fe3aa5cdbe0a80068fd2"],["/archives/2016/03/index.html","9b5b6277a4d419e5c9cdf782abc5e932"],["/archives/2016/04/index.html","a9da76ab1cf9e5957de95e04c0e272a9"],["/archives/2016/05/index.html","a2cb4ebcb47e4d537ca1f6d0e1e71588"],["/archives/2016/06/index.html","2ca5188081581736965bbb2c5031c14c"],["/archives/2016/07/index.html","c914b98d162ba74c603620e878d54b96"],["/archives/2016/08/index.html","cf53fd9dba2b27943727efa8634df881"],["/archives/2016/09/index.html","81257fadd77519f1bfcabb6f3fd02c1b"],["/archives/2016/10/index.html","a917e09117e9b6e1a51ad7ff8939810e"],["/archives/2016/11/index.html","b611209981466688369bdc145a5ecddf"],["/archives/2016/12/index.html","feec63244fb2585db88235307a52eac3"],["/archives/2016/index.html","e92cd04482f4a1b784b9d1d2d5feee41"],["/archives/2017/01/index.html","293c2911738ffc791ad21fcf84f6b815"],["/archives/2017/02/index.html","f47946fae1f8c149c0ee707edb649f07"],["/archives/2017/03/index.html","764597088518f0234c4b91e4fe188d99"],["/archives/2017/04/index.html","c8143993ce2bb9e1a1d662565193bbb5"],["/archives/2017/05/index.html","f78640a9c37bdd3a2ca92a9d5ef7de99"],["/archives/2017/06/index.html","6e202470f68ccc896f3f87d803cebb96"],["/archives/2017/07/index.html","c49f7336ea1ce0ad981c55cc13e71c53"],["/archives/2017/08/index.html","7a17c6924d61bf45bd48cd194c536011"],["/archives/2017/09/index.html","d069e87f702b103418f0548db525dc3d"],["/archives/2017/11/index.html","ab22f0aac6d7b64fec170cb8adcdace7"],["/archives/2017/12/index.html","3899d75b89612ba070f46087a3fb6942"],["/archives/2017/index.html","0f9299532d2f0d38ac59b23579ce701a"],["/archives/2018/01/index.html","d2a46d1ffb71d4ccd2b900813795a5d3"],["/archives/2018/02/index.html","394259f21eb54d530a149354b9ab3fa4"],["/archives/2018/03/index.html","dc2bc0871762254b336b851ebb33c642"],["/archives/2018/04/index.html","1b0406738da84160dd50020eca6349c3"],["/archives/2018/05/index.html","8d9c9bc755cf3a941bcd9d10ba4d05ed"],["/archives/2018/06/index.html","f4a2342aff162468855cea72d07f9d37"],["/archives/2018/07/index.html","f6f1088dd5e5f65ea1448a387bac643a"],["/archives/2018/08/index.html","2cd21a89e1c1fad9a675691677f6942c"],["/archives/2018/09/index.html","6c1d2b73180dd10dd8857548d0c166b8"],["/archives/2018/10/index.html","98496f05d3054c7c5449d02028208d33"],["/archives/2018/11/index.html","a63c70a438948da36d63ff70feefc391"],["/archives/2018/12/index.html","1aa738599d7b44574455cc8eb5edcf19"],["/archives/2018/index.html","8e256c5b0771da1aacae267c9f83efdb"],["/archives/2019/01/index.html","3969c3e2a0246247752ac41813182695"],["/archives/2019/02/index.html","88034741bb84028de5f60cd7b8878632"],["/archives/2019/03/index.html","e4961460c6189ee8b2bc4ccf16c696f7"],["/archives/2019/04/index.html","34f00e3317f2268ff54a0ef93a779357"],["/archives/2019/05/index.html","446f8acd85627c60a6b72f504f3f85e0"],["/archives/2019/06/index.html","5c16ab422a1f7f258645dcedd8c6799d"],["/archives/2019/09/index.html","021d14416cc75b4ded37bbe0ed338794"],["/archives/2019/10/index.html","f3f77ac41bc375c4a2ece2c55ece6bd8"],["/archives/2019/11/index.html","2001d9a8474b0b06bf1cc6b2fac9a219"],["/archives/2019/index.html","0812d91da1f6981803ec23e3db2da804"],["/archives/2020/01/index.html","fdade5ae3909aff1afc47a6c461cb605"],["/archives/2020/02/index.html","e501e3f4e23b00704968b5d0de82e6cd"],["/archives/2020/index.html","1a66da015f01ee20d731f3b8b0703574"],["/archives/index.html","d845846195c8a1018b086004422e8bff"],["/blog/2004/06/07/explosions-in-the-sky/index.html","b0419e7f96a46ad906cd425b63ee3017"],["/blog/2009/03/13/last-day-at-jd-williams/index.html","5a16d35870d7e42fb393389a6bb897e9"],["/blog/2009/03/16/new-start-at-the-hut-group/index.html","76b14badb93851013cf5d2ee1bb574f2"],["/blog/2009/06/23/everything-everything-photoshop-handsome/index.html","176fa0c0269bdd1962656f5ed572e310"],["/blog/2010/03/07/sendit/index.html","e7187e0c62e19f992231e74d2f1e71e9"],["/blog/2010/04/07/asda-entertainment/index.html","65ed3161ff2f3751cab144053f65972c"],["/blog/2010/05/07/woolworths-entertainment/index.html","444abc30aaeb64ceaabeea825d84f4d0"],["/blog/2010/06/07/the-hut/index.html","351451763bdbabb9ce09859d8b8d11a6"],["/blog/2011/04/07/the-hut-group/index.html","7ab3bb0cceb018a66a543c2aa448ac88"],["/blog/2011/06/07/zavvi/index.html","c83820742a4d21ad50cb48eec256f181"],["/blog/2012/01/13/idhh/index.html","1e08f8a81dcf2d6f40aa70802f3d2534"],["/blog/2012/02/11/cruise-fashion/index.html","c11235bae973d616aefb3fb7c4306480"],["/blog/2012/02/12/allsole/index.html","693ac13c80347b570357b7ec095104d0"],["/blog/2012/02/12/cancer-research-uk/index.html","0212429f0faa16ad95617f5c383331a4"],["/blog/2012/02/12/halo-reach-shop/index.html","a879bb76ff025e7f6e86a46beb4e0a40"],["/blog/2012/02/12/jessica-gamboa/index.html","13438d762213542e3b98138a3b659612"],["/blog/2012/02/12/the-hut-outlet-ebay/index.html","c58eaa9e626666c0fdd75c94a7aadb1d"],["/blog/2012/02/12/urban-coppice/index.html","b127971ed343a28e04f080e653d5b014"],["/blog/2012/02/19/halle-at-giggleswick/index.html","3caf11553b63a8e3325c0f79e75d6f77"],["/blog/2012/03/22/ymca-southport/index.html","f8d8824f61deb09086e2597b6af92a3d"],["/blog/2012/03/24/lancashire-witches/index.html","6a5b479281165573879e87882f62dbb1"],["/blog/2012/03/24/pleasington-golf-club/index.html","7889fdaff74ad1977343e9a3c0f6e363"],["/blog/2012/03/29/simon-owen-design-world-collaboration-james-white-abduzeedo/index.html","8b4da31ab0a24a1fb4a8d9a599958a67"],["/blog/2012/04/05/barbados-football-legends/index.html","7b349b0258b5fe5330cb3e2706b4a88c"],["/blog/2012/05/28/amir-khan/index.html","4a231b3fd6067f976c2cff9883ea5141"],["/blog/2012/06/18/how-to-automatically-compile-a-sass-file-refresh-your-browser-and-iphone-using-livereload-with-mamp-and-wordpress/index.html","c94bc782caec02a098947cfaa5ac51a1"],["/blog/2012/07/26/firesass-equivalent-or-similar-for-chrome-dev-tools-chrome-office-hours-live-from-london/index.html","0661f336a079981ba6dc7f3e2559a455"],["/blog/2012/08/24/easier-changing-directory-in-terminal-for-mac-os-x-using-rupaz/index.html","4250a9f3fbccc748432ca0b79958d06f"],["/blog/2012/10/16/wordpress-error-require_once-function-fopen-failed-to-open-stream-permission-denied/index.html","3777da308ee2c575a64134ba621a58c7"],["/blog/2012/11/02/phagenesis/index.html","eb15601194737a11d8aa9e0243e6910d"],["/blog/2012/11/04/kelly-tidy/index.html","85c60dab7441a425732e154f1a378d91"],["/blog/2012/11/04/styling-the-chrome-dev-tools/index.html","647712d95a3bf179d88b12fd162dcf36"],["/blog/2012/11/05/beckett-investment/index.html","5d5abb7e301e003447dabe146807077e"],["/blog/2012/11/05/cherrys/index.html","4dc4a580d47b027136c80e2d44868c0e"],["/blog/2012/11/11/one-theme-to-rule-them-all/index.html","dac46b757546f8fbe9b1c8b874458683"],["/blog/2012/11/15/mountstmarys/index.html","50a6720f3749b4a9839c74124e8f9fba"],["/blog/2012/11/19/mr-lizard/index.html","99f38857fbd2c5d30ee6d9df74c3ed5c"],["/blog/2012/11/21/workflow-screencast/index.html","90d64221e5a32b641efe5f4341a5a403"],["/blog/2012/12/02/mother-effing-dotfiles/index.html","bfbc414cc1b3317e92694e93bdaf8397"],["/blog/2012/12/11/mac-os-x-osx-dotfiles/index.html","5bc3eeaa348b7f7f72965df88064efb6"],["/blog/2013/01/01/make-google-chrome-canary-default-browser/index.html","24dc9627c9538152e6ad29242b251c59"],["/blog/2013/01/29/codepen-theme-challenge/index.html","e01d1d2632d36182ce14ca2ae35f9326"],["/blog/2013/02/03/manchester-front-end-web-development-meetup/index.html","d8c253dbe774f6c85cf614afb73c6f1d"],["/blog/2013/02/06/hammersmithacademy/index.html","93d1a85d7df1dcf92caac42d040b98d1"],["/blog/2013/02/17/installing-sublime-text-2-on-lxde-linux-useful-for-raspberry-pi/index.html","94c42733d33f4173ad23233a3241fe64"],["/blog/2013/02/24/manchester-game-jam/index.html","8068193eff2e854456693843e69982b1"],["/blog/2013/02/28/webgl-globe-github-data-idea/index.html","995b4f82ae5f7361be1390b2500fe91e"],["/blog/2013/03/07/first-octopress-post/index.html","07361d925a8e83afec372f8ce5ee6312"],["/blog/2013/03/19/mcrfred-is-a-go/index.html","4a886050dd8e6d9d8dd0737852022172"],["/blog/2013/03/20/kidsofbolton/index.html","5f5faff2de910569f15532779a7241b7"],["/blog/2013/03/21/first-mcrfred/index.html","a76be5f1409e6bb42f396518afbd2e25"],["/blog/2013/03/23/adding-emoticons-to-octopress/index.html","4eef955eac4e8b0b619782adff135783"],["/blog/2013/03/27/mcrfred-round-2/index.html","f68318930a31933146c16f4d0a7ecee5"],["/blog/2013/04/02/affetto/index.html","612a919523d9eb251d365f9202b04977"],["/blog/2013/04/02/sublime-text-2-and-bower/index.html","71febdc200de6361ca5f0743d8eae746"],["/blog/2013/04/07/html-5-boilerplate-and-compass/index.html","b73391cea4cd9fe0313bbe3741f25262"],["/blog/2013/04/17/manchester-wordpres-user-group-april/index.html","e2328524f4f12c7f1f6fcaa611ba0d32"],["/blog/2013/04/17/manchester-wordpress-user-group-february/index.html","4cc549ef41f091aa83756b0507e0e357"],["/blog/2013/05/01/manchester-fred-gets-responsive/index.html","acfc775c5a54c128569776d2f266c5b8"],["/blog/2013/05/05/mcrfred-01-videos/index.html","202aa7b770126bd541498f6327eaabad"],["/blog/2013/05/07/hfc/index.html","cedcf1497a266361268005d2b03df9dd"],["/blog/2013/05/08/mcrfred-round-3-github-workshop/index.html","98d2011f4ae0229a100a2609cdb6d8e5"],["/blog/2013/05/09/dolcifollie/index.html","0ebb8bf12acdbbc5662780f91997d572"],["/blog/2013/05/14/mcrfred-round-4-stu-cox-on-modernizr/index.html","c8b479a2f40bffb121f393e6d8f1dc21"],["/blog/2013/05/14/mcrfred-round-5-andrew-nesbitt/index.html","15f35dc26e1ea37b23ceb3c4f151034a"],["/blog/2013/05/15/manchester-wordpress-user-group-may/index.html","ded4268923ca43ecaec3f6e384d83502"],["/blog/2013/05/18/deeserve/index.html","198b35be3e8933f4d7bfcc5a49c63254"],["/blog/2013/05/23/mcrfred-02-videos/index.html","2a7df54ee8a9ecc99481e1c6e6ceb7c1"],["/blog/2013/05/25/mcrfred-the-story-so-far/index.html","072a67bd35b03027fa04e6b538617cfa"],["/blog/2013/05/26/mcrfred-sponsoring-and-donating/index.html","3add2933d1605fe9bf2beb3cfec1c161"],["/blog/2013/05/27/octopress-build-failed-utf-8-issue/index.html","dc753fe8451c5b157b43012364c68767"],["/blog/2013/05/28/wordpress-10th-anniversary-manchester/index.html","4a82f672cd6c72c4ed1e142701615b37"],["/blog/2013/06/01/a-weekend-in-the-woods/index.html","9f894989b186b392fed813afa3143295"],["/blog/2013/06/01/manchester-forking-fred-merge-batman/index.html","e9d838d9086a547978e4fe2fd4b30d04"],["/blog/2013/06/07/rowtonhallhotel/index.html","3bed9dce277134aea8d0ec8ce88675f1"],["/blog/2013/06/12/octopress-is-great-until-it-breaks/index.html","44b67552187efa3e86060172f94a263e"],["/blog/2013/06/19/manchester-wordpress-user-group-june/index.html","96b46c0e4630f187536dad92795a395f"],["/blog/2013/06/23/theming-with-sass-and-compass-codepen/index.html","fcbf20c4a5d175f8b0e15becb1729e51"],["/blog/2013/07/07/mcrfred-04-videos-stu-cox-on-modernizr/index.html","3d8b42ccf2ea492580f0b6ca64b1725b"],["/blog/2013/07/16/gildarnell/index.html","081083b402ed388f55b8f13b771d64dc"],["/blog/2013/07/18/manchester-wordpress-user-group-july/index.html","52d7bddd6f27ba8240fe9960d4299b21"],["/blog/2013/07/24/mcrfred-round-6-martin-rue-on-javascript-as-a-language/index.html","6d28cc9566e9d733311f978525e38329"],["/blog/2013/07/24/mcrfred-round-7-chris-mills-on-the-importance-of-documentation/index.html","0f7714b703e84a6df27ff4b0367ad4d4"],["/blog/2013/08/21/manchester-wordpress-user-group-august/index.html","2e5068a4e9b274018f70b3f0d4d6abd3"],["/blog/2013/08/30/mcrfred-06-videos-martin-rue-on-javascript-as-a-language/index.html","2a4037a8f40ea5547c4f92be7409bed8"],["/blog/2013/09/11/some-awesome-things/index.html","8fe3fa1d8bf3a466bf80625ff8984dd2"],["/blog/2013/09/28/mcrfred-07-videos-chris-mills-on-the-importance-of-documentation/index.html","fb429f900c315c5abeb839ccaf726c84"],["/blog/2013/09/30/mcrfred-round-8-something-a-little-different/index.html","601a54803e92b3db7b4c96dd49a37ea7"],["/blog/2013/10/08/chrome-dev-tools-vertical-center-idea/index.html","d85fe9df0353ccdcc56997d714e413b4"],["/blog/2013/10/16/manchester-wordpress-user-group-october/index.html","59157e676dcb1e98d782e6face322b42"],["/blog/2013/10/22/wallpapercentral/index.html","fa3da89cb2d34c1a3cae1dab439bdd69"],["/blog/2013/11/04/mcrfred-round-10-andrew-clarke/index.html","825eb2045cc69726c34b1264ed96fa26"],["/blog/2013/11/04/mcrfred-round-9-manchester-freelance-front-end-developers/index.html","039e1236ecd6e57cac89eff47957f5dc"],["/blog/2013/11/14/last-day-at-absolute-media/index.html","af7a9e7a91e058951f7d5544a9c95bf5"],["/blog/2013/12/14/mcrfred-09-videos-manchester-freelance-front-end-developers/index.html","0327f3655652e3dad63c5849b473b9b6"],["/blog/2014/01/02/mcrfred-11-ben-frain/index.html","dfde49f3f833dfc113dea8bff17fca8e"],["/blog/2014/01/04/flightdelayservices/index.html","bf4e875d47aa9ddc89afa88ca0b4445e"],["/blog/2014/01/06/simonowendesign-to-s10wen/index.html","7d0dfced8374cfda1ffd05d583f79ec1"],["/blog/2014/01/08/jonathan-stark-on-mobile-testing-devices/index.html","03a2b9194d528a670c9f3296b3f44534"],["/blog/2014/01/12/lego-in-store-augmented-reality/index.html","ccc8b6e4f8d420bcaf2fa2f96dc1b190"],["/blog/2014/01/16/manchester-wordpress-user-group-january/index.html","dda0ed87375dbe3e4a236d8216037147"],["/blog/2014/01/18/mcrfred-2014-sponsors/index.html","ba24c4bae3c9e5797a1266d655429f78"],["/blog/2014/02/09/mcrfred-12-joe-critchley/index.html","f9456f455c0c8a154704a111d61f64b9"],["/blog/2014/02/09/mcrfred-13-patrick-lauke/index.html","efd2f385d7b444a844647c8d64412cf8"],["/blog/2014/02/19/manchester-wordpress-user-group-february/index.html","6b93e97dbc3759ba74ac9fb88ddac3f6"],["/blog/2014/02/21/styling-svg-sucks-so-far/index.html","9f8cab926b66d2075dcb4723e3522897"],["/blog/2014/02/26/mcrfred-t-shirts/index.html","a784eafd27b17e35f286dc434be24972"],["/blog/2014/03/01/should-dev-tool-themes-be-light-or-dark/index.html","1251707dfabc23e189194220355bef6b"],["/blog/2014/03/04/gitbox-not-working/index.html","f1b625c97682b990e6b2b170f709e47e"],["/blog/2014/03/04/jank-busting/index.html","f8cc3e1da3d3d100585e72404f66a9c0"],["/blog/2014/03/12/chrome-dev-tools-theming-with-zero-base-themes/index.html","148e147ea113c810348cf405c3daf368"],["/blog/2014/03/17/chillout-weekend-part-1-of-2/index.html","4fa7238871ffbb4d4ec76fca9b6547de"],["/blog/2014/03/19/manchester-wordpress-user-group-march/index.html","1169916d6d5fcf443c8807e4d6f7c480"],["/blog/2014/03/24/lussostyling/index.html","7e85e38270770b45538a1a10bdc1b7cb"],["/blog/2014/03/24/mindreport/index.html","3a2ee4bfebe095b3a0cc21076a14d9e9"],["/blog/2014/03/26/chillout-weekend-part-2-of-2/index.html","257262d9f5cb5d0bee4a1b581758f533"],["/blog/2014/03/30/winstanley/index.html","7b777d8829a1c63a68466f00141526ee"],["/blog/2014/04/05/mcrfred-14-dan-donald/index.html","1d7632be58714e9eb71500617fdcd568"],["/blog/2014/04/05/mcrfred-the-best-of-the-web-event/index.html","831481cf76275e6d519b9e4d9571eaaf"],["/blog/2014/04/16/manchester-wordpress-user-group-april/index.html","6ee31d71181e87df6bcca112a00b8933"],["/blog/2014/04/26/halo-2/index.html","17d7832d49c7d37eae5d413ae45f93a4"],["/blog/2014/05/08/mcrfred-13-video-patrick-lauke-getting-touchy/index.html","aff6bcefc8c828f61e8dfd52479485be"],["/blog/2014/05/10/video-ben-frain-the-way-of-pragmatic-coding/index.html","600d79c6f7af228f82463144c6c54ba6"],["/blog/2014/05/15/rmri/index.html","e78cf97e437ed113349dff6a5eb71bdf"],["/blog/2014/05/21/manchester-wordpress-user-group-may/index.html","35c10b3e287a4157e7987f72ebe7a33d"],["/blog/2014/05/24/mcrfred-15-simon-owen/index.html","19085f43f75abd4a067b1e71710ea744"],["/blog/2014/05/26/halo-3/index.html","d783f951d7ad3fdd2b6b0805abc185c7"],["/blog/2014/06/15/remy-sharp-on-the-bits-behind-js-bin/index.html","730f0dafacecd6c7816ae41e4e6cf766"],["/blog/2014/06/17/liverpoolveterans/index.html","9674a1d54c5adb3de54477e63acece16"],["/blog/2014/06/23/mcrfred-16-andi-smith/index.html","82409ebc738c5ce9cf1c68be819d12b7"],["/blog/2014/06/30/amscreen/index.html","109ba89d0a3d799e07ac7a5f6b3ad7a1"],["/blog/2014/07/05/mcrfred-15-videos-simon-owen-goes-over-a-recent-project/index.html","d6b9f864d6c92c1fe03a65464a443664"],["/blog/2014/07/09/illustrator-svg-id-issue/index.html","00bc7b542aff3e9a42365b55bd1645fe"],["/blog/2014/07/16/manchester-wordpress-user-group-july/index.html","5ff6a3a0af60068657dcd4d35d87d646"],["/blog/2014/07/22/output-ls-contents-of-a-server-directory-using-bash/index.html","c6883b2f533d26bcfed90d088f43e7cf"],["/blog/2014/07/24/creating-music-with-clojure-and-overtone-with-chris-ford/index.html","ce8ad8be3200a6868dd21a7c6313b9e8"],["/blog/2014/07/24/getting-started-with-clojure-and-overtone/index.html","a1c6c394d5c338991e4a94c7417e4f88"],["/blog/2014/07/29/illustrator-svg-layer-1-id-issue-take-2/index.html","d0766e3d38fa14f03d503ea7e88ef279"],["/blog/2014/08/03/mcrfred-17-bruce-lawson/index.html","ccf4b5a95b6f6f608a0d0aa199a2b051"],["/blog/2014/08/04/ux-is-everyones-responsibility-with-tom-bradley/index.html","ac0d9024cc65f37df3ec8d40cce457ba"],["/blog/2014/08/05/mcrfred-16-videos-andi-smith/index.html","71c1e767a25556b2930dfb60c77bfbc3"],["/blog/2014/08/20/manchester-wordpress-user-group-august/index.html","8530ad4c9e85d4b329b6f493aab45699"],["/blog/2014/09/08/mcrfred-18-jake-smith/index.html","0448c5c7e2ed1744050d1216fd377f84"],["/blog/2014/10/13/mcrfred-19-anthony-casey/index.html","961e054cb401206017386661bcfccb9e"],["/blog/2014/10/21/jeffrey-zeldman-and-andrew-clarke/index.html","f85c3cb8b91fc3af843349e6de830a20"],["/blog/2014/11/01/mcrfred-20-lightning-talks/index.html","ad96155b8f3323e0e9b239a5a3d918ca"],["/blog/2014/11/08/mcrfred-21a-and-21b/index.html","9f5670ad6b3aa28eff0bf5559135b52d"],["/blog/2014/11/15/front-end-north-2014-slides/index.html","c0a5dba1b7d7f6faf65b13060985bfe7"],["/blog/2014/11/16/front-end-north-2014-notes/index.html","8648f8a506f9a8461db5ed8655f6fa56"],["/blog/2014/11/19/how-clean-is-england/index.html","fb76d1183ed1e3fe2be7adf522666884"],["/blog/2014/11/19/manchester-wordpress-user-group-november/index.html","efb371930c101910e6e73ac8cecdcb18"],["/blog/2014/12/06/mcrfred-2015-call-for-speakers-and-sponsors/index.html","28d415dcd6f0210f70edc33bc3e8d23f"],["/blog/2015/01/09/mcrfred-22-user-experience/index.html","2ebdc1f7d655e35325c0ae64c255e589"],["/blog/2015/01/10/gym-and-diet/index.html","4d9b356051752dec68d6764c9dee4ed6"],["/blog/2015/02/02/confconf-notes/index.html","6deb1e6a41e5735f429e7bfd7d513f44"],["/blog/2015/02/08/mcrfred-23-a-practical-journey-to-web-components/index.html","1b5c323816b5b4917aed7a010e4dba91"],["/blog/2015/02/08/mcrfred-24-a-day-in-the-life/index.html","fce6bb9554f3ea1596bc19d2d2b1919a"],["/blog/2015/04/14/mcrfred-25-andi-smith/index.html","b494fa787ac52b21d7d7bd5759e20d3a"],["/blog/2015/05/08/mcrfred-26-codepen-special/index.html","4e4e90a6c9a86c2ea27d58676224a003"],["/blog/2015/05/21/illustrator-svg-hidden-layers/index.html","e91941b2daf07499954c3bdef42b90ec"],["/blog/2015/05/25/chrome-gradient-overlay-issue/index.html","d4407378b18cd68071c09f48add82276"],["/blog/2015/05/31/mcrfred-26-codepen-special-was-a-blast/index.html","43f341eb6bd29008fc1956850ecd6251"],["/blog/2015/06/01/mcrfred-27-tom-pearson-making-tools-for-journalists/index.html","85bf89271f9e8c2568d145279b7daa6e"],["/blog/2015/06/23/chrome-dev-tools-quick-jank-debug-and-fix/index.html","5492a24bf4bec085c1dcf736b7574b5d"],["/blog/2015/06/28/first-hexo-post/index.html","240e2d9b20cec2470931982a4c03b6a6"],["/blog/2015/07/10/A-quick-note-on-writing-website-amends/index.html","f545c5df26bd58ebfdc2f3b880c4cb73"],["/blog/2015/07/13/mcrfred-28-offline-security/index.html","e847cb1bd9d59a926c7398176a3d0563"],["/blog/2015/08/11/mcrfred-29-katie-fenn-on-chrome-dev-tools-and-measuring-css-with-parker/index.html","1b169eb8ba1df9757126f0346ce46e88"],["/blog/2015/08/15/post-SVG-Icons-Sublime-Text-Package/index.html","7e913023b107e275ae69f87402a3b160"],["/blog/2015/09/03/McrFRED-30-Freelance-Special/index.html","ba96d89cb8448024ca07bb15a55f2931"],["/blog/2015/09/18/footime-s10wen-pretending-jamie-oliver/index.html","f2aa63a553787826af2047e1d3f54207"],["/blog/2015/09/26/footime-x2-s10wen-pretending-jamie-oliver/index.html","904d07c2972792503e9f3f1dd6b2f5f8"],["/blog/2015/09/26/mcrfred-29-katie-fenn-on-chrome-dev-tools-and-measuring-css-with-parker-videos/index.html","ae599fb2aee3e7d044ff9f9eb14c6e71"],["/blog/2015/10/10/upfrontmini-2015/index.html","be1b867dbc76d020d89f8a8b9217c85b"],["/blog/2015/10/17/indie-game-the-movie-my-attempt-at-making-a-game/index.html","bf9be8629a2553914bc4b1d2eec6dfdf"],["/blog/2015/10/18/getting-ready-for-mount-toubkal-october-2015/index.html","37652fbf0ca449bd1865d4c488584047"],["/blog/2015/11/02/mcrfred-32-ben-frain-architecting-maintaining-large-scale-css-codebases/index.html","dc7d658a5de705989859df60eaecea73"],["/blog/2015/11/07/ffconf-2015/index.html","cc890c81a14b5641af5d09e8920ff918"],["/blog/2015/11/10/mcrfred-33-christmas-social/index.html","525a14f7d8cf0a05932a5c0ebc4639fd"],["/blog/2015/12/07/free-simple-https-github-pages-cloudflare/index.html","95f04b52e390054a287c14f6ac8676a6"],["/blog/2016/01/12/mcrfred-34-damien-seguin-from-unit9/index.html","d560bb54f9c3a3ee7d8cf2c2682653b9"],["/blog/2016/01/22/last-day-at-carbon-creative/index.html","5f5152722caaf2faf842da66f0b02db4"],["/blog/2016/01/27/the-benefits-of-having-a-clean-error-free-codebase/index.html","7e25a8cf0d9e585c2a03cbc204bbfa73"],["/blog/2016/01/28/mcrfred-together-with-google-developers/index.html","19e63350ca5c18df91faa7d9c16e25c3"],["/blog/2016/02/18/mcrfred-35-lightning-talks/index.html","a5192b42f6e23511b505deeea30fd346"],["/blog/2016/03/04/mcrfred-36-andrew-brandwood-from-code-computerlove/index.html","ae4d722517bdc2887479c48dfa47fded"],["/blog/2016/03/17/smashing-conf-2016/index.html","d01c29fcc7088e32b82860a0f34b0fa4"],["/blog/2016/04/18/mcrfred-37-barney-scott-from-code-computerlove/index.html","89df13985ed6b1063e95e799a3cf5d5d"],["/blog/2016/05/23/mcrfred-38-upfrontconf/index.html","8c18025b74ededdca65ffc00f9581659"],["/blog/2016/06/07/mcrfred-39-tristan-ashley-css-processors/index.html","fa3261b6fa8b3aea6af3f1902670d26d"],["/blog/2016/07/13/mcrfred-40-google-progressive-web-apps/index.html","0a0dd9cf1f2e26f2577c939a6037cc22"],["/blog/2016/08/11/mcrfred-41-simon-owen-developer-workflow/index.html","117adb8bf4e3b06047119a4207e85c87"],["/blog/2016/08/30/mcrfred-42-what-comes-next-is-the-future-screening/index.html","fbbc13eb1a9ff62b4bca24ca12fe2211"],["/blog/2016/09/13/resources-for-learning-javascript/index.html","98ce5d3e065ff58aabf113e600128fa4"],["/blog/2016/09/20/mcrfred-43-mike-hall-streaming-ftw/index.html","3c1fa78a93c6dcf11c7051c44ca494f6"],["/blog/2016/10/04/takeaways-from-frontendnorth/index.html","4e3c02fcc0035755c1f4adc694d61dcf"],["/blog/2016/10/05/naming-convention-ideas-for-CSS-classes/index.html","262636b6c2472eb51c245597ab2602ee"],["/blog/2016/10/28/mcrfred-44-christmas-social/index.html","711e6626d48fea3d82368e94c455b0dc"],["/blog/2016/10/31/mcrfred-45-dan-hett-unplugged/index.html","923054e3268365d1a5d35487f9668ec0"],["/blog/2016/11/24/mcrfred-46-jamie-murphy/index.html","37cb8dba4ac243ba6a807646810eb20d"],["/blog/2016/12/19/mcrfred-46-mike-byrne/index.html","2bbf5fd6e38cae9f5b0b21cd2ec75f85"],["/blog/2017/01/30/digihike/index.html","8b52956a3c507b7c09726fd3d69a1e7e"],["/blog/2017/02/14/mcrfred-47-simon-owen-samantha-rogulska/index.html","caa44b6cd75637b69930df7c79079f34"],["/blog/2017/03/10/mcrfred-48-codepen/index.html","8824cf85aa9c822bade189831b751fe0"],["/blog/2017/03/31/mcrfred-48-codepen-monkey-island-cause-effect/index.html","66ff617240f3f99cbf694eb18ba40047"],["/blog/2017/04/06/mcrfred-49-frank-fenten/index.html","6ff284cbeb940143068cd510b51fb1e5"],["/blog/2017/05/09/mcrfred-50/index.html","e25c2a2d41685264d7cc1c7e1029c9fa"],["/blog/2017/06/06/mcrfred-51-mike-byrne/index.html","44a4c1e5a05d65232771041133d615e0"],["/blog/2017/06/26/google-web-community-leads-summit/index.html","9eec381138823229a7ff48517b55a1ab"],["/blog/2017/07/17/mcrfred-52-alex-lakatos/index.html","8e73f99bc003a878cc2abeb069c1878b"],["/blog/2017/07/17/mcrfred-53-rich-higgins/index.html","66c8842f9baf2bd2b93214cc36c58d45"],["/blog/2017/07/17/mcrfred-54-rapidfire/index.html","4569a2376ca36fba360a9d0745cb995c"],["/blog/2017/07/24/mcrfred-55-freelance-special/index.html","4408ea6f6abf844b8ea3cb391c628a4b"],["/blog/2017/08/11/fuji-xe2-quick-shortcuts/index.html","1228dd06c700552571621d80a9a9a222"],["/blog/2017/08/11/updating-firmware-on-fuji-xe2/index.html","90a0961590d63f79800ccf73f11dfe7a"],["/blog/2017/09/21/fix-the-white-bars-in-safari-on-iphone-x/index.html","e9ca6c487500ccb0300aa5e0ffb6b70e"],["/blog/2017/11/24/simon-owen-manchester-based-freelance-front-end-web-developer/index.html","fde42c76e24bc01e6f9abb8d8e494965"],["/blog/2017/12/06/mcrfred-workshops/index.html","3d6702a4387dc60a1f10132e96dbe483"],["/blog/2017/12/22/last-day-at-thehutgroup/index.html","c2b8a6b3ad8696036eb232b35f2c2da4"],["/blog/2018/01/08/first-week-freelance-front-end-developer-manchester/index.html","4e2dba576bd29246d6c5afcfc9a69931"],["/blog/2018/01/08/mcrfred-56-jo-franchetti/index.html","be59fd0e3cfcbb1fef16261f2ae07754"],["/blog/2018/01/24/takeaways-todd-gardners-talk-the-developers-guide-to-promoting-your-work/index.html","674595be7e8d398e60fe5a6718e3a761"],["/blog/2018/01/30/front-end-developer-workspace-net-magazine/index.html","95d71488d5692e05fd3bd3c8f6fe3326"],["/blog/2018/02/01/first-month-freelance-front-end-developer-manchester/index.html","7d0c3b6a71f81b6659bf71168c509b29"],["/blog/2018/02/05/mcrfred-57-chris-mills/index.html","989ef00cdf15b4616ddfa9e6cb5ce852"],["/blog/2018/02/22/new-home-mcrfred/index.html","285c8d46c5aa70a83cdf963c412c46a2"],["/blog/2018/03/02/mcrfred-58-dylan-schiemann/index.html","937f4ffacddeb693cb6b8307bce43784"],["/blog/2018/03/10/case-study-mccann/index.html","a53beab99edaac1fbdbd05a619aa3ba4"],["/blog/2018/04/18/mcrfred-59-autotrader/index.html","99c7b54b72377817831b5212b2d99b64"],["/blog/2018/05/04/mcrfred-60-phil-hawksworth/index.html","ac5150fd4736840dea8c5c7e7d44e8c7"],["/blog/2018/06/18/mcrfred-61-gareth-chidgey/index.html","2926e0f3c8510443ea7090265e554949"],["/blog/2018/07/01/mcrfred-62-andrew-betts/index.html","ce7054dac3405258f501fbc93b5ae159"],["/blog/2018/07/04/web-community-leads-summit/index.html","d372add62eddb7028c9bc48cdd54bd57"],["/blog/2018/07/10/first-six-months-freelance-front-end-developer-manchester/index.html","32b17cd3f75d90734be794adbb9199ec"],["/blog/2018/07/26/case-study-state-supply/index.html","94ee39bf550cc82a11957f88f7982f50"],["/blog/2018/08/04/case-study-telux/index.html","3f6dd43f84922c484309e72faaa7f383"],["/blog/2018/08/17/mcrfred-63-show-and-tell/index.html","8d29cc151ee7bc09d66227d2ce7941c7"],["/blog/2018/08/29/mcrfred-64-doug-sillars/index.html","c1d36c84c8ff53b53c3a4db5bc134557"],["/blog/2018/09/12/old-school-web-development-techniques/index.html","29d1225be52d390dad932d49a4ffe03e"],["/blog/2018/09/26/virtual-box-brew-install-error/index.html","dcc4b1038f415d36962ceaca8b935857"],["/blog/2018/10/05/mcrfred-65-halloween-special/index.html","b05cafd14c9a1f278f009d669937b3ca"],["/blog/2018/11/13/mcrfred-66-matt-claffey/index.html","e2a58252776c98be3936b09d84e39f83"],["/blog/2018/11/21/mcrfred-67-christmas-social/index.html","c20e95b3d7132221f43cb49a6c27f852"],["/blog/2018/12/06/development-environment-machine-setup-screencast/index.html","fcbb5309e800378bcdb2ae1986178b19"],["/blog/2019/01/01/first-year-freelance-front-end-developer-manchester/index.html","c9514a30da68ff9682e4ac8b9c85d13e"],["/blog/2019/01/04/dev-tips-365/index.html","232da106b81f11feb3c600531532c3ce"],["/blog/2019/01/20/mcrfred-68-simon-owen-dotfiles-screencast/index.html","8332b2299c70869e360d6d9e5426098d"],["/blog/2019/02/06/consistent-css-class-naming-convention/index.html","fd79563d3bceb24bd32a0ecb4f4f7269"],["/blog/2019/02/06/my-take-on-oocss-smacss-bem/index.html","dcde01629d4477707d24c1bf27883082"],["/blog/2019/02/07/case-study-together-trust/index.html","f2dfb7a6e4890fb0ae5883ffcc9ed969"],["/blog/2019/02/12/mcrfred-69-mike-masey/index.html","dcde7975da0caf4dfb8d42aa6fe3a5ae"],["/blog/2019/03/22/mcrfred-70-alex-clapperton/index.html","942867deb27303e198d9dce7fc2babe6"],["/blog/2019/04/16/mcrfred-71-joseph-allen/index.html","36f11152787da0876432639b043e0d9c"],["/blog/2019/04/22/custom-domain-name-with-netlify-123reg/index.html","e9e06831a7f38499b3f28372f701d461"],["/blog/2019/05/10/perfect-developer-job-role/index.html","fdab7ade693e3168417db946d74d6e2d"],["/blog/2019/05/25/mcrfred-72-show-and-tell/index.html","b6c0b0258db2dba168416f028187331e"],["/blog/2019/05/30/mcrfred-73-andy-carter/index.html","09536e1e05f0219f65566822a7e79fb3"],["/blog/2019/06/05/mcrfred-74-chad-gowler/index.html","93c2af941fd2e662fee2756d27e383b5"],["/blog/2019/09/23/mcrfred-75-chad-gowler/index.html","c7ccc0d801d17cdaa92006918fd6cea9"],["/blog/2019/10/19/mcrfred-76-cathy-dutton/index.html","8d3320f2f9983e2900e510159186b1ec"],["/blog/2019/11/14/mcrfred-77-phillip-whittaker/index.html","c941892b0fc70d3efc48ea063ec6c2b1"],["/blog/2020/01/16/mcrfred-78-david-swallow/index.html","5a842c98c61221fb932b9bc57b30628f"],["/blog/2020/02/11/mcrfred-79-rich-higgins/index.html","984be6df9771f9bcddbfca07e214b674"],["/blog/categories/apple/index.html","b526b323cd7547bb6e663234766f624e"],["/blog/categories/bash/index.html","6e7219beeec2d9e881dc06fe61a5327d"],["/blog/categories/browser/index.html","996d9d11074149c1d00db99609a6a2c5"],["/blog/categories/case-study/index.html","936028fbd6977d7f03b2ef6db6a7498a"],["/blog/categories/chrome-dev-tools/index.html","d717b49921e9bb0cce34af4eed6e4de3"],["/blog/categories/chrome/index.html","71218dd5cee1b7e83653d98a99b88b8c"],["/blog/categories/clojure-overtone/index.html","d0b279539f830092ab4fff7dc4d0af41"],["/blog/categories/conference/index.html","58aee0adce9ccdd5aa9f847ebb549c3c"],["/blog/categories/css/index.html","e5f57b1070ef51e05574b9aa917673fa"],["/blog/categories/dev-tips/index.html","2ba67e22071747470f523b7abefd16ec"],["/blog/categories/digihike/index.html","e4d86b182c5756685a64f86956fde3c4"],["/blog/categories/dotfiles/index.html","ef9b30470262424fe6b91fa250d4df95"],["/blog/categories/event/index.html","14385c206c0d409f598a98ddafed7726"],["/blog/categories/ffconf/index.html","b84e3cc8b0f28f04e87ad71cc597bd47"],["/blog/categories/freelance/index.html","98e70a4a2a3d9ac413df1cb09de46008"],["/blog/categories/gaming/index.html","5cacb5bd3bce1a0ebf1a329c68e319b3"],["/blog/categories/health/index.html","a90ce808a9ae47bd12e91054a5a60f58"],["/blog/categories/hexo/index.html","0aa37e77ca85addbdda01444df113513"],["/blog/categories/https/index.html","958c0d3c9406060623c2a97da70b6a73"],["/blog/categories/jank/index.html","af67b5b69a562a6ffd0937fc67e17460"],["/blog/categories/javascript/index.html","3554e34539eada2eb83ee7f258c2fe47"],["/blog/categories/jobs/index.html","520ddb34c41f25c792be9348f55a9661"],["/blog/categories/lego/index.html","0bf155bf8875cfc8ed7dc7daa6cb495a"],["/blog/categories/mcrfred/index.html","e68c8907631596b39fc4a6811fd33750"],["/blog/categories/nux/index.html","90bb68103a9bdc7750ba580eddd10f1f"],["/blog/categories/octopress/index.html","d94b10f4735dc8ad0ad3b18a038f5ba2"],["/blog/categories/photography/index.html","e9d3b9bd075625839aa48a63bec6371c"],["/blog/categories/raspberry-pi/index.html","d7625af4e8203ea51feade5d38e2463a"],["/blog/categories/responsive-web-design/index.html","1c106fe005e73e0417d481a0473cbb1f"],["/blog/categories/sass/index.html","1c3f35c99300d12fdfa9a046dc8b691e"],["/blog/categories/screencast/index.html","22b24cba16726a11ea4a270c8f028616"],["/blog/categories/speaking/index.html","c324805052351f5dcd13fba7e4d13d6f"],["/blog/categories/svg/index.html","10a97106b5fc67b26d2e3b4483b9b540"],["/blog/categories/unplugged/index.html","9b5db4e237e2dec05cb514f72881f478"],["/blog/categories/upfrontconf/index.html","74703f091c851d02c57c0ff6b191324a"],["/blog/categories/web-development/index.html","79f2a69ae71692fd60da6ab42619f46d"],["/blog/categories/webgl/index.html","b5ef022d953bbb0f55ad4c5bc048df7a"],["/blog/categories/wordpress/index.html","8407a346b5b0a5e07a8f0516a3823272"],["/blog/categories/work/index.html","bbc0bab1ae58aeb3d59867f82796b712"],["/blog/categories/workflow/index.html","e799ced29b22ce3cc698a8725ae971fe"],["/clients/index.html","d47b350586d8e6fd626c7c48dd03767d"],["/contact/index.html","14091515db394ca1b38d47c1013df3b8"],["/css/650.css","6ebd284c8e57233dd1342ca8b8fde0b1"],["/css/760.css","4f9a611f03526a9a71622a6258a2306e"],["/css/900.css","76ef5ad20f64b6842593eb0944fa91b7"],["/css/batman.css","21ba39653b5d8e13a049165d24122fa2"],["/css/critical.css","ac575840170bec1238a619ef80e93f3b"],["/css/style.css","75ae3cb706d4a1faef307ddcbf074137"],["/css/styleguide.css","45af1fd5b8518cb45279e25687ff44d3"],["/donate/index.html","30a0e93e4424744ea8f72003a2dadf91"],["/faces/index.html","10c5d1df5786ab9444d4af5313554a9b"],["/index.html","1970c78c2f4ce2e1e0cd7bb1d3e46d9d"],["/js/sw-register.js","513231445679d6ee73ed4de6deb50342"],["/marple-websites/index.html","52af74691991b085c7ad18b212d44d34"],["/mcrfred/coc/index.html","2f900775b169e4d1e32b568767493d7f"],["/page/10/index.html","c8910bc9a3b56d9dea5f1aa22fd30ceb"],["/page/11/index.html","91579607804e341aab5f25e63dcbb636"],["/page/12/index.html","3c58280b11aa08b1639a3520f3990630"],["/page/13/index.html","71ae4500aa5379369640f34df59df92d"],["/page/14/index.html","26f0cf8f3f01467b0aefc047fe1b53c3"],["/page/15/index.html","5afe53172c3166fa25d0e00d0ed16e7b"],["/page/16/index.html","2d4555e6147752031f3c0804a46a13b1"],["/page/17/index.html","85642b0b734fae0870b617bac9cb4086"],["/page/18/index.html","f7b5b0d02b1c3e88b860610a12661261"],["/page/19/index.html","06e14d38c5317db5ab13712960692058"],["/page/2/index.html","9a02e79bcff132f99897fecb99821116"],["/page/20/index.html","e1c11227daa0158bf3932b88153bff1c"],["/page/21/index.html","a6c084790b3a7f7014be583a58e6228b"],["/page/22/index.html","b1530781d35dbfa29254b0bccc9753d9"],["/page/23/index.html","c18c5c2d0d552d9df96de80c2be0c828"],["/page/24/index.html","070bb221b7d43f04a32afa230bbde7f0"],["/page/25/index.html","eaf283af4e9c5058697d58e95a92465e"],["/page/26/index.html","dcadb68e7447344dc05b7183a2501912"],["/page/27/index.html","f6440c74fcde1cedfc1e8d3c448b243a"],["/page/3/index.html","9e9904f569194d69c28980180a59c349"],["/page/4/index.html","0e1887cccfc80c2e7b67f19e107bd843"],["/page/5/index.html","5bf7df550526a26b0d7cb02e0400b0a0"],["/page/6/index.html","2cfbd5e7b05055891f89a0bfc71eeba6"],["/page/7/index.html","13e7972e1a530a6e5d8b17a0f776d160"],["/page/8/index.html","634941bc90e590c27309fe4843fea8bd"],["/page/9/index.html","09091488e45ae9ed17c3da523c46d15d"],["/press-kit/index.html","07eb1e3d0fa1b29e1eaf9cabea4f90a7"],["/reading/index.html","3cac0648b7d0895391eeca9faba12dd9"],["/screencast-smashing-magazine/index.html","2f56fa28384d5fbd87bc445f29460680"],["/services/index.html","0fbaf07a466d59fee8d9a910a756c3e3"],["/speaking/index.html","a587077473a9955d4cd53f36a76390ab"],["/styleguide/index.html","c67332908628532b478165e9f8a96a96"],["/subscribe/index.html","728366f6893b14cdd97216ae54eb32c3"],["/thankyou/index.html","1202d828e9b98b129024566b6ded2e9f"],["/work/index.html","61907db140fc029143950ef94b7ac9f6"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







