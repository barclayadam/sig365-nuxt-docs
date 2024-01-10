<script setup lang="ts">
const {footer} = useAppConfig()
</script>

<template>
  <div class="layout__footer">
    <footer class="footer-container">
      <div class="footer-container__wrapper bt-container">
        <div class="bt-container-inner footer-container__inner">
          <div class="footer-container__col footer-container__col--copyright">

            <p>© 2023 Symprex Ltd. All rights reserved.</p>
          </div>

          <div class="footer-container__col footer-container__col--social-links">
            <a href="https://twitter.com/signature365com" target="_blank" class="footer-social-link fa fa-twitter"></a>
            <a href="https://www.linkedin.com/company/signature365" target="_blank" class="footer-social-link fa fa-linkedin"></a>
            <a href="https://www.facebook.com/signature365com" target="_blank" class="footer-social-link fa fa-facebook"></a>
            <!-- <a href="https://www.instagram.com/signature365com" target="_blank" class="footer-social-link fa fa-instagram"></a> -->
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
