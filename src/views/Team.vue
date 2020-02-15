<template>
  <div class="team container">
    <a-card hoverable :loading="loading">
      <img
        alt="profile"
        loading="true"
        src="https://scontent.frgn5-2.fna.fbcdn.net/v/t1.15752-0/p280x280/80902355_1321811304668952_2451544371661635584_n.jpg?_nc_cat=110&_nc_ohc=wIvQJHGczfsAX93UpwL&_nc_ht=scontent.frgn5-2.fna&_nc_tp=6&oh=6df75e9a9325f33c5f508e270950a4e1&oe=5ECCDF46"
        slot="cover"
      />
      <a-card-meta title="Min Thu Kyaw">
        <template slot="description">
          Web Developer
          <a href="https://github.com/thukyaw11">
            <a-icon type="github" :style="{ fontSize: '26px', float: 'right' }" />
          </a>
          <a href="https://www.facebook.com/min.t.kyaw.3591">
            <a-icon type="facebook" :style="{ fontSize: '26px', float: 'right', marginRight : '10px' }"/>
          </a>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello",
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
};
</script>

