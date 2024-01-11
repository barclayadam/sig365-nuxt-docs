<script setup lang="ts">
</script>

<template>
  <div class="layout__head">
    <header class="topbar topbar--small" data-topbar="">
      <div class="topbar__nav topbar__nav--white bt-container">
        <div class="bt-container-inner topbar__container-inner">
          <div class="topbar__inner">
            <div class="topbar__col">
              <div class="logo-wrapper">
                <div class="logo">
                  <a href="https://www.signature365.com/">
                    <img src="~/assets/header-logo.png" alt="">
                  </a>
                </div>
                <span class="topbar__help-center-name">Help Center</span>
              </div>
              <button type="button" role="button" aria-label="Toggle Navigation" class="lines-button x"
                      data-toggle-menu=""><span class="lines"></span></button>
            </div>
            <div class="topbar__col topbar__menu">
              <div class="topbar__collapse" data-menu="">
                <div class="topbar__controls topbar__controls--logged-in">
                  <a class="topbar__link" href="https://support.signature365.com/support/home">Home</a>
                  <a class="topbar__link" href="https://status.signature365.com/">Status</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
