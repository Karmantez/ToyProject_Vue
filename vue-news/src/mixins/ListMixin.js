import bus from '@/utils/bus';

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    bus.$emit('end:spinner');
  },
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store
  //     .dispatch('FETCH_LIST', { name: this.$route.name })
  //     .then(({ success }) => {
  //       if (success) {
  //         bus.$emit('end:spinner');
  //       }
  //     })
  //     .catch(error => console.log(error));
  // },
};
