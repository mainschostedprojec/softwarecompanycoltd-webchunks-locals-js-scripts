// © 2025 Software Company Co., Ltd. All rights reserved.
//
  // * author : KarmanMajd * //
  // * company : Software Company Co., Ltd. * //
  // * MIT License : https://opensource.org/licenses/MIT * //
  // * script type : sc security policy script * //
  // * This script is protected by copyright law. Unauthorized use or distribution is prohibited. * //
  // * version : 2.1.0 * //
  // * realease : 2025 * //
//
// sc init hcaptcha api 1 js main
const scjshcaptchasecurityinitscript=document.createElement('script');scjshcaptchasecurityinitscript.src='https://js.hcaptcha.com/1/api.js';scjshcaptchasecurityinitscript.type='text/javascript';scjshcaptchasecurityinitscript.async=true;scjshcaptchasecurityinitscript.defer=true;document.body.appendChild(scjshcaptchasecurityinitscript);
setTimeout(()=>{const scjshcloudflareturnstyleinitscript=document.createElement('script');scjshcloudflareturnstyleinitscript.src='https://challenges.cloudflare.com/turnstile/v0/api.js';scjshcloudflareturnstyleinitscript.type='text/javascript';scjshcloudflareturnstyleinitscript.async=true;scjshcloudflareturnstyleinitscript.defer=true;document.body.appendChild(scjshcloudflareturnstyleinitscript);document.body.innerHTML += '<div class="sc-cf-turnstile-main-init" onclick="document.body.removeChild(this);" style="position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);backdrop-filter:blur(15px);z-index:999;"><div class="cf-turnstile" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;" data-sitekey="0x4AAAAAABdk5KHjkKOafill"></div></div>';},1700);document.body.innerHTML += '<sc-main-content-auth-portal sc-locale-lang="en:default"></sc-main-content-auth-portal>';
