<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'pi pi-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'pi pi-chart-bar',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ]
    }
  }
}
</script>
