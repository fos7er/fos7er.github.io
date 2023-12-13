<template>
  <section class="bg-grey py-[90px]">
    <div class="container animate fade-in-left">
      <h2 class="mb-12 text-center uppercase font-medium text-[#95A3A3] tracking-wider">
        {{ t('portfolio.title') }}
      </h2>
      <div class="sm:grid grid-cols-3 gap-10">
        <block-card
          v-for="item in works"
          :key="item.id"
          :img-src="getFile(item.img)"
          :nuxt-picture-src="item.img"
          :sub-html="item.subHtml"
          :title="item.title"
          class="mb-12 sm:mb-0"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  const { t } = useI18n()
  const images = import.meta.glob('../../assets/img/portfolio/*.*', { eager: true })
  const getFile = (file) => images[`../../assets/img/portfolio/${file}`]?.default
  const works = [
    {
      id: 1,
      img: 'vue-modern-resume.jpg',
      title: 'Modern resume template',
      subHtml: '<h4> <a href="https://fos7er.github.io/vue-modern-resume/">Website</a>  Source on - <a href="https://github.com/fos7er/vue-modern-resume" > GitHub </a></h4> <p> Vue modern resume template</p>'
    },
    {
      id: 2,
      img: 'kino-searcher.jpg',
      title: 'Kino searcher app',
      subHtml: '<h4> <a href="https://fos7er.github.io/vuetify-kino-searcher/">Website</a> Source on - <a href="https://github.com/fos7er/vuetify-kino-searcher" > GitHub </a></h4> <p> Kino searcher app with authentification, database and torrents synchronization</p>'
    },
    {
      id: 3,
      img: 'miatel.ru.jpg',
      title: 'miatel.ru',
      subHtml: '<h4> <a href="https://miatel.ru">Website</a> </h4> <p>Miatel.ru landing site</p>'
    },
    {
      id: 4,
      img: 'fonetica.jpg',
      title: 'fonetica.ch',
      subHtml: '<h4> <a href="https://fonetica.ch">Website</a> </h4> <p>Fonetica.ch landing site</p>'
    },
    {
      id: 5,
      img: 'xms.jpg',
      title: 'XMS project',
      subHtml: '<h4> <a href="https://xms.miatel.ru">Website</a> </h4> <p>Bulk SMS sending application</p>'
    },
    {
      id: 6,
      img: 'miatel.com.jpg',
      title: 'miatel.com',
      subHtml: '<h4> <a href="https://miatel.com">Website</a> </h4> <p>Miatel.com landing site</p>'
    }
  ]
</script>

